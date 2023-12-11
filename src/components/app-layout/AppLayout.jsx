import { Head as Header } from 'components/header-layout/Header';
import { Foot as Footer } from 'components/footer-layout/Footer';
import { Layout, Main } from './AppLayout.styled';
import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
  return (
    <Layout>
      <Header />

      <Main>
        <Outlet />
      </Main>

      <Footer />
    </Layout>
  );
};
