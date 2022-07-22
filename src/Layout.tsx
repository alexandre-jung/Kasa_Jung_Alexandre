import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Layout = () => {
  return (
    <div className='d-flex flex-col mh-100'>
      <Header className='container' />
      <main className='container flex-grow-1'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
