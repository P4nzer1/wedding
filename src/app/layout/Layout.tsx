import { MainPage } from '@/pages';
import { Header, Footer } from '@/widgets';

const blocks = [Header, MainPage, Footer];

export const Layout = () => {
  return (
    <>
      {blocks.map((Page, id) => (
        <Page key={id} />
      ))}
    </>
  );
};
