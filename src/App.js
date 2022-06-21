import "./components/styles.css";
import React from "react";
import Navbar from "./components/Navbar";
import ConnectToWallet from "./components/ConnectToWallet";
import LPContent1 from "./components/LandingPage-Content-1";
import Kendrick from "./components/Kendrick";
import DiscoverNFT from "./components/DiscoverNFT";
import LPContent2 from "./components/LandingPage-Content-2";
import FooterInfoA from "./components/FooterInfoA";
import FooterInfoB from "./components/FooterInfoB";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ConnectToWallet />
      <LPContent1 />
      <Kendrick />
      <DiscoverNFT />
      <LPContent2 />
      <FooterInfoA/>
      <FooterInfoB />
    </div>
  );
}

export default App;
