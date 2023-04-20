import Navbar from "pages/components/Navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
