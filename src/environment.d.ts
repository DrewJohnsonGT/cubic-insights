declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    NEXT_PUBLIC_APP_URL: string;
    DISCORD_WEBHOOK_URL: string;
  }
}
