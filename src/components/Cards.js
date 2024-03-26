import image1 from "../assets/cube 3d.png";
import image2 from "../assets/tesseract 3d.png";
import image3 from "../assets/element 3d.png";
import "../styles/cards.css";

function Cards() {
  const whiteImageStyle = {
    filter: "brightness(0) invert(1)",
  };

  return (
    <>
      <div className="bg-gray-500">
        <div className="cards flex w-[75vw] mx-auto justify-center text-white items-center pb-10">
          <div className="flex flex-col m-2">
            <div>
              <img src={image1} alt="servoce-logo" style={whiteImageStyle} />
            </div>
            <div>
              <h2 className="text-lg text-cyan">Direct Connectivity</h2>
            </div>
            <div>
              <p>
                Zerocap provides riskless principal access to the best liquidity
                providers, market makers and exchanges – resulting in faster,
                tighter, and more secure trades.
              </p>
            </div>
          </div>
          <div className="flex flex-col m-2">
            <div>
              <img src={image2} alt="servoce-logo" style={whiteImageStyle} />
            </div>
            <div>
              <h2 className="text-lg text-cyan">Enhanced Liquidity</h2>
            </div>
            <div>
              <p>
                We address the issue of limited liquidity on single crypto
                exchanges via smart technology, allowing for substantial trades
                with significant transaction volume.
              </p>
            </div>
          </div>
          <div className="flex flex-col m-2">
            <div>
              <img src={image3} alt="servoce-logo" style={whiteImageStyle} />
            </div>
            <div>
              <h2 className="text-lg text-cyan">Increased Anonymity</h2>
            </div>
            <div>
              <p>
                OTC trading offers a level of anonymity not available at
                centralised venues, reducing the risk front-running.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
