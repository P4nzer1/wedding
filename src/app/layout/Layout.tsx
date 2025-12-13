import { MainPage } from '@/pages';

const blocks = [MainPage];

export const Layout = () => {
  return (
    <section role="main">
      {blocks.map((Block, id) => (
        <Block key={id} />
      ))}
    </section>
  );
};
