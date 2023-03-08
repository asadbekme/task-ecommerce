import { Header, Footer } from "../";
import Routers from "../../routers/Routers";
import { AdminHeader } from "../../admin";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname.startsWith("/dashboard") ? (
        <AdminHeader />
      ) : (
        <Header />
      )}
      <>
        <Routers />
      </>
      <Footer />
    </>
  );
};

export default Layout;
