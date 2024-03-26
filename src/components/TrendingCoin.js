import React from "react";
import { useNavigate } from "react-router-dom";

const TrendingCoin = ({ data }) => {
  let navigate = useNavigate();

  const getCoinDetails = (id) => {
    navigate(`${id}`);
  };

  return (
    <div
      className="w-[40%] bg-gray-200 mb-12
    last:mb-0 rounded-lg p-4 relative cursor-pointer
    hover:bg-gray-100 hover:bg-opacity-40
    "
      onClick={() => getCoinDetails(data.id)}
    >
      {data ? (
        <>
          <h3 className="txt-base text-lg flex items-center my-0.5">
            <span className="text-gray-100 capitalize">name:&nbsp;</span>
            <span className="text-cyan text-lg">{data.name}</span>
            <img
              src={data.large}
              alt={data.name}
              className="w-[4rem] h-[4rem] mx-1.5 ml-7 rounded-full"
            />
          </h3>

          <h3 className="txt-base flex items-center my-0.5">
            <span className="text-gray-100 text-lg capitalize">
              market cap rank:&nbsp;
            </span>
            <span className="text-cyan text-lg">{data.market_cap_rank}</span>
          </h3>
          <h3 className="txt-base flex items-center my-0.5">
            <span className="text-gray-100 text-lg capitalize">
              price (in btc):&nbsp;
            </span>
            <span className="text-cyan text-lg">
              {new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "btc",
                maximumSignificantDigits: 3,
              }).format(data.price_btc)}
            </span>
          </h3>

          <h3 className="txt-base flex items-center my-0.5">
            <span className="text-gray-100 capitalize text-lg">
              score:&nbsp;
            </span>
            <span className="text-cyan text-lg">{data.score}</span>
          </h3>
        </>
      ) : (
        <div
          className="w-full  h-full flex justify-center items-center
             "
        >
          <div
            className="w-8 h-8 border-4 border-cyan rounded-full
             border-b-gray-200 animate-spin 
             "
            role="status"
          />
          <span className="ml-2">please wait...</span>
        </div>
      )}
    </div>
  );
};

export default TrendingCoin;
