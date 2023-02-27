import { Header, Footer } from '../';
import Routers from '../../routers/Routers';

const Layout = () => {
  return (
    <>
      <Header />
      <>
        <Routers />
      </>
      <Footer />
    </>
  );
};

export default Layout;
