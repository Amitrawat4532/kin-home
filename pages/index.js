import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Freequote from "../components/Freequote";
import Getintouch from "../components/Getintouch";
import Happycustomer from "../components/Happycustomer";
import Homepage from "../components/Homepage";

import Navbar from "../components/Navbar";
import Ourprocess from "../components/Ourprocess";
import Testimonal from "../components/Testimonal";
import Why from "../components/Why";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Homepage />
      <Why />
      <Ourprocess />
      <Happycustomer />
      <Freequote />
      <Feature />
      <Testimonal />
      <Getintouch />
      <Footer />{" "}
    </>
  );
}
