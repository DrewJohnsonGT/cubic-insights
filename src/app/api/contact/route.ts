import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

interface Embed {
  title: string;
  description?: string;
  color?: number;
  fields?: {
    inline?: boolean;
    name: string;
    value: string;
    color?: number;
  }[];
  footer?: {
    text: string;
    icon_url?: string;
  };
}

const getCurrentEasternTime = (): string => {
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'America/New_York',
    month: '2-digit',
    day: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };
  return new Intl.DateTimeFormat('en-US', options).format(now);
};

const sendDiscordNotification = async (embed: Embed): Promise<void> => {
  try {
    if (!process.env.DISCORD_WEBHOOK_URL) {
      return;
    }
    await fetch(process.env.DISCORD_WEBHOOK_URL, {
      body: JSON.stringify({
        embeds: [embed],
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
  } catch (err: unknown) {
    const errorMessage = err as Error;
    console.log('Error sending discord notification');
    console.log(errorMessage.message);
  }
};

const createContactFormEmbed = (data: ContactFormData): Embed => ({
  color: 0xff9933,
  description: data.message,
  fields: [
    {
      inline: true,
      name: 'Name',
      value: data.name,
    },
    {
      inline: true,
      name: 'Email',
      value: data.email,
    },
  ],
  footer: {
    text: getCurrentEasternTime(),
  },
  title: 'Contact Form Message',
});

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const data = (await request.json()) as ContactFormData;

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 },
      );
    }

    const embed = createContactFormEmbed(data);
    await sendDiscordNotification(embed);

    return NextResponse.json(
      { success: true, message: 'Contact form submitted successfully' },
      { status: 200 },
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process contact form submission' },
      { status: 500 },
    );
  }
}
