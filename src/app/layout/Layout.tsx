import { MainPage } from '@/pages';
import { Header } from '@/widgets';

const blocks = [Header, MainPage];

export const Layout = () => {
  return (
    <section role="main">
      {blocks.map((Block, id) => (
        <Block key={id} />
      ))}
    </section>
  );
};
