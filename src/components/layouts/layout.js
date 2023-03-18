import Footer from "./footer";
import Header from "../header/index";

export default function Layout({ children }) {
  return (
    <>
      {/* <Header /> */}
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
