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
        setEthUsd(data[1].current_price);
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
    }
  }, [selectedCrypto, btcUsd, btcAud, ethUsd, selectedCurrency]);

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
          conversionRate = selectedCrypto === "Bitcoin" ? btcUsd : ethUsd;
          break;
        case "AUD":
          conversionRate =
            selectedCrypto === "Bitcoin" ? btcAud : ethUsd * (btcAud / btcUsd);
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

  useEffect(() => {
    if (selectedCrypto === "bitcoin") {
      setConversionRate(selectedCurrency === "AUD" ? btcAud : btcUsd);
    } else if (selectedCrypto === "ethereum") {
      setConversionRate(
        selectedCurrency === "AUD" ? (btcAud / btcUsd) * ethUsd : 0
      );
    }
  }, [selectedCrypto, btcUsd, btcAud, ethUsd, selectedCurrency]);

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
    <div className="bg-gray-300 w-full h-full flex justify-center">
      <div className="w-[65%] h-[75%] bg-gray-300 bg-opacity-75 flex items-center pt-10 pb-10 justify-center rounded-lg relative">
        <div className="flex  flex-col m-5">
          <select className="h-10 mb-10" onChange={handleCryptoSelect}>
            <option value="">Select a Crypto</option>
            {cryptoData.map((el) => (
              <option key={el.id} value={el.name}>
                {el.name}
              </option>
            ))}
          </select>
          {selectedCrypto && (
            <div>
              <h1 className="text-white">{selectedCrypto}</h1>
            </div>
          )}
        </div>
        <div className="flex flex-col m-5">
          <select className="h-10 mb-10" onChange={handleCurrencySelect}>
            <option value="">Select Currency</option>
            <option value="USD">USD</option>
            <option value="AUD">AUD</option>
          </select>
          {selectedCurrency && conversionRate !== undefined && (
            <div>
              <h2 className="text-white">Rate: {conversionRate.toFixed(2)}</h2>
            </div>
          )}
        </div>
        <div className="flex">
          <input
            className="h-10 m-5"
            type="number"
            value={inputAmount}
            onChange={handleInputChange}
            placeholder="Enter amount"
          />
          {selectedCrypto && selectedCurrency && convertedAmount !== null && (
            <p className="text-white text-center">
              With {inputAmount} {selectedCurrency}, you can buy approximately (
              {convertedAmount.toFixed(5)} {selectedCrypto})
            </p>
          )}
        </div>
      </div>
    </div>
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
