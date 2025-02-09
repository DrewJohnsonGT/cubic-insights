import { OhioMap } from '~/components/OhioMap';
import { Header } from '~/components/PageLayout/Header';

export default function Home() {
  return (
    <>
      <Header title="Home" />
      <OhioMap />
    </>
  );
}
