import "../styles/homepage.css";
import chartImg from "../assets/chart.jpg";
import cryptoImg from "../assets/crypto.jpg";

import Cards from "../components/Cards";
import MainBg from "../components/MainBg";

function HomePage() {
  return (
    <>
      <MainBg />
      <div className="w-screen h-screen mt-[-20px] back content">
        <main className="pt-10 m-auto  w-[80vw] h-[85vh] mt-20 flex flex-col justify-between items-center relative font-nunito">
          <div className="flex flex-col items-center  justify-center h-screen mt-[-150px]">
            <h1 className="text-white text-xxxl w-[80vw] font-thin font-roboto title">
              OTC crypto trading: Enhanced liquidity, superior pricing, T+0
              settlements
            </h1>
          </div>
          <div className="flex flex-col items-center mb-[100px]">
            <p className="text-white text-thin text-center w-[80vw]">
              Zerocap carries out regulated and unregulated activities.
              Financial services and products are available to wholesale clients
              only. Spot crypto-asset services and products offered by Zerocap
              are not regulated by ASIC.
            </p>
          </div>
        </main>
      </div>
      <div className="bg-gray-500 flex items-center pt-10 pb-10 justify-center h-[60vh] selection:bg-red">
        <div className="flex text-white h-auto w-[75vw] items-center justify-center">
          <div className="w-[30vw]">
            <h1 className="text-xl font-thin">
              Crypto OTC Trading <br /> Has Never Been Easier
            </h1>
          </div>
          <div className="w-[60vw] text-md">
            <p>
              Zerocap’s Over-the-counter (OTC) crypto trading desk provides
              depth, improved pricing and T+0 global settlement capabilities
              across a huge universe of assets and FX pairs. Customers can book
              large block trades via chat, voice or over a streaming liquidity
              interface, also accessible via API.
            </p>
          </div>
        </div>
      </div>
      <Cards />
      <div className="bg-gray-500 text-white">
        <div className="flex w-[80vw] justify-around mx-auto pt-20 pb-20">
          <div className="flex flex-col w-[30vw]">
            <img src={cryptoImg} alt="xx" className="mb-5" />
            <h1 className="text-lg">
              How to Buy and Sell any Cryptocurrency with Zerocap
            </h1>
            <p className="mb-5">
              Chief Innovation Officer Jonathan de Wet explains the frameworks
              behind Zerocap’s service of how to buy and sell any cryptocurrency
              ever created; the key advantages, how it works, and the current
              structural challenges.
            </p>
            <button className="mt-auto bg-cyan h-9 rounded-full w-[20vw]">
              Read Article
            </button>
          </div>
          <div className="flex flex-col w-[30vw]">
            <img src={chartImg} alt="xx" className="mb-5" />
            <h1 className="text-lg">
              Crypto OTC Trading: The Decision-Maker of Digital Currencies
            </h1>
            <p className="mb-5">
              OTC trading in the crypto market offers several advantages. It
              provides fast accessibility, fewer bureaucratic obstacles, and the
              ability to trade large volumes of cryptocurrency without
              significantly impacting the market price.
            </p>
            <button className="mt-auto bg-cyan h-9 rounded-full w-[20vw]">
              Read Article
            </button>
          </div>
        </div>
      </div>
      <div className="bg-orange w-full h-[35vh] flex flex-col justify-center items-center">
        <h1 className="font-thin text-xxl">Strat your trading with Us</h1>
        <button className="bg-white rounded-xl mt-2 w-40 h-10">
          Contact Us
        </button>
      </div>
    </>
  );
}

export default HomePage;
