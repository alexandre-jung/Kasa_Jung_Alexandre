import { Outlet } from 'react-router-dom';
import Header from '@components/Header';
import Footer from '@components/Footer';

const Layout = () => {
  return (
    <div className="d-flex flex-col mh-100 align-items-center">
      <div className="container">
        <Header />
      </div>
      <main className="container flex-grow-1">
        <Outlet />
      </main>
      <div style={{ alignSelf: 'stretch' }}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
