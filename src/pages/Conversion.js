import { useContext, useEffect, useState } from "react";
import { CryptoContext, CryptoProvider } from "../context/CryptoContext";

function Conversion() {
  const { cryptoData, getCryptoData } = useContext(CryptoContext);
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [selectedCryptoPrice, setSelectedCryptoPrice] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const [btcUsd, setBtcUsd] = useState();
  const [btcAud, setBtcAud] = useState();
  const [ethUsd, setEthUsd] = useState();
  const [solUsd, setSolUsd] = useState();
  const [conversionRate, setConversionRate] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [inputAmount, setInputAmount] = useState("");

  useEffect(() => {
    getCryptoData();
  }, []);

  useEffect(() => {
    fetch(
      "https://pro-api.coingecko.com/api/v3/coins/markets?vs_currency=USD",
      {
        headers: {
          "x-cg-pro-api-key": "CG-hifxrsmm2TzEqGmg2Rtdx4Bk",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setEthUsd(data.find((coin) => coin.symbol === "eth").current_price);
        setSolUsd(data.find((coin) => coin.symbol === "sol").current_price);
      });
  }, []);

  useEffect(() => {
    fetch("https://pro-api.coingecko.com/api/v3/exchange_rates", {
      headers: {
        "x-cg-pro-api-key": "CG-hifxrsmm2TzEqGmg2Rtdx4Bk",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setBtcAud(data.rates.aud.value);
        setBtcUsd(data.rates.usd.value);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    if (selectedCrypto === "BTC") {
      setConversionRate(selectedCurrency === "AUD" ? btcAud : btcUsd);
    } else if (selectedCrypto === "ETH") {
      setConversionRate(ethUsd);
    } else if (selectedCrypto === "SOL") {
      setConversionRate(solUsd); // Set conversion rate for Solana
    }
  }, [selectedCrypto, btcUsd, btcAud, ethUsd, solUsd, selectedCurrency]);

  const handleCryptoSelect = (event) => {
    const selectedCryptoName = event.target.value;

    setSelectedCurrency(""); // Reset selected currency when crypto changes
    setSelectedCrypto(selectedCryptoName);
    const selectedCryptoObject = cryptoData.find(
      (crypto) => crypto.name === selectedCryptoName
    );
    console.log(selectedCryptoObject);
    if (selectedCryptoObject) {
      setSelectedCryptoPrice(selectedCryptoObject.current_price);
      setConvertedAmount(null);
    }
  };

  const handleCurrencySelect = (event) => {
    const selectedCurrency = event.target.value;
    setSelectedCurrency(selectedCurrency);

    if (selectedCrypto && selectedCryptoPrice) {
      let conversionRate;

      switch (selectedCurrency) {
        case "USD":
          conversionRate =
            selectedCrypto === "BTC"
              ? btcUsd
              : selectedCrypto === "ETH"
              ? ethUsd
              : solUsd;
          break;
        case "AUD":
          conversionRate =
            selectedCrypto === "BTC"
              ? btcAud
              : selectedCrypto === "ETH"
              ? ethUsd * (btcAud / btcUsd)
              : solUsd * (btcAud / btcUsd);
          break;
        default:
          conversionRate = 1; // Default to 1 if currency not recognized
      }

      if (!isNaN(conversionRate)) {
        setConversionRate(conversionRate);
        setConvertedAmount(selectedCryptoPrice * conversionRate);
      }
    }
  };

  const handleInputChange = (event) => {
    const amount = event.target.value;
    setInputAmount(amount);
    console.log("Input Amount:", amount);
    console.log("Conversion Rate:", conversionRate);
    if (selectedCryptoPrice && selectedCurrency && !isNaN(conversionRate)) {
      const cryptoAmount = parseFloat(amount) / conversionRate;
      console.log("Crypto Amount:", cryptoAmount);
      setConvertedAmount(cryptoAmount);
    }
  };

  if (!cryptoData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="bg-gray-300 w-full h-full flex justify-center">
        <div className="w-[75%] h-[75%] bg-gray-300 bg-opacity-75 flex items-center pt-10 pb-10 justify-center rounded-lg relative">
          <div className="flex  flex-col m-5">
            <select className="h-10 mb-10" onChange={handleCryptoSelect}>
              <option value="">Select a Crypto</option>
              {cryptoData.map((el) => (
                <option key={el.id} value={el.name}>
                  {el.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col m-5 top-0">
            <select className="h-10 mb-10" onChange={handleCurrencySelect}>
              <option value="">Select Currency</option>
              <option value="USD">USD</option>
              <option value="AUD">AUD</option>
            </select>
          </div>
          <div className="flex">
            <input
              className="h-10 mb-10"
              type="number"
              value={inputAmount}
              onChange={handleInputChange}
              placeholder="Enter amount"
            />
          </div>
        </div>
      </div>
      <div>
        {selectedCrypto && (
          <div>
            <h1 className="text-black text-center">{selectedCrypto}</h1>
          </div>
        )}
        {selectedCurrency && conversionRate !== undefined && (
          <div>
            <h2 className="text-black text-center">
              Rate: {conversionRate.toFixed(2)}
            </h2>
          </div>
        )}
        {selectedCrypto && selectedCurrency && convertedAmount !== null && (
          <p className="text-black text-center">
            With {inputAmount} {selectedCurrency}, you can buy approximately (
            {convertedAmount.toFixed(5)} {selectedCrypto})
          </p>
        )}
      </div>
    </>
  );
}

function ConversionWrapper() {
  return (
    <CryptoProvider>
      <Conversion />
    </CryptoProvider>
  );
}

export default ConversionWrapper;
