import { createContext, useLayoutEffect, useState } from "react";

// create context object
export const TrendingContext = createContext({});

// create the provider component
export const TrendingProvider = ({ children }) => {
  const [trendData, setTrendData] = useState();

  const getTrendData = async () => {
    try {
      const data = await fetch(
        `https://pro-api.coingecko.com/api/v3/search/trending`,
        {
          headers: {
            "x-cg-pro-api-key": "CG-hifxrsmm2TzEqGmg2Rtdx4Bk",
          },
        }
      )
        .then((res) => res.json())
        .then((json) => json);

      // console.log(data);
      setTrendData(data.coins);
    } catch (error) {
      console.log(error);
    }
  };

  const resetTrendingResult = () => {
    getTrendData();
  };

  useLayoutEffect(() => {
    getTrendData();
  }, []);

  return (
    <TrendingContext.Provider
      value={{
        trendData,
        resetTrendingResult,
      }}
    >
      {children}
    </TrendingContext.Provider>
  );
};
