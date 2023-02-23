import { Header, Footer } from '../';
import Routers from '../../routers/Routers';

const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
