import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'services/Loader';
//--------------------------------------------------------------
import { Head as Header } from 'components/header-layout/Header';
import { Foot as Footer } from 'components/footer-layout/Footer';
//--------------------------------------------------------------
import { Layout, Main } from './AppLayout.styled';

export const AppLayout = () => {
  return (
    <Layout>
      <Header />

      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>

      <Footer />
    </Layout>
  );
};
