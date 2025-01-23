import React, { useEffect, useState } from "react";
import CurrencySelect from "./CurencySelect";
import { HiMiniArrowsRightLeft } from "react-icons/hi2";


const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("npr");
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(null);


  const fetchCurrencies = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/currencies.json`);
    const data = await res.json();
    setCurrencies(Object.keys(data));
  };

  const currencyConversion = async () => {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/currencies/${toCurrency}.json`);
    const data = await res.json();
    setConvertedAmount(amount / data[toCurrency][fromCurrency])
  };

const handleSwap = () =>{
  setFromCurrency(toCurrency)
  setToCurrency(fromCurrency)
}

  useEffect(() => {
    fetchCurrencies();
    currencyConversion()
  }, [amount,handleSwap]);


  return (
    <div className="h-screen flex justify-center items-center bg-center w-full " style={{backgroundImage: "url('/currency.png')" }}>
      <div className="md:w-[35%] bg-black bg-opacity-30 backdrop-blur-xl flex flex-col gap-3 rounded-xl p-10">
        <h1 className="text-center text-2xl font-semibold text-white">Currency Converter</h1>
        <label className="text-white">Enter Amount</label>
        <input
          type="number"
          className="p-2 rounded-md"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          value={amount}
        />
        <div className="flex justify-between items-center">
          <CurrencySelect currencies={currencies} currency={fromCurrency} setCurrency={setFromCurrency} title='From:' />
          <div className=" flex justify-center items-center rounded-full w-12 h-12 p-2 bg-black bg-opacity-10 backdrop-blur-2xl" onClick={handleSwap}><HiMiniArrowsRightLeft className="text-xl text-white"/></div>
          <CurrencySelect currencies={currencies} currency={toCurrency} setCurrency={setToCurrency} title='To:' />
        </div>

       
        <div className="bg-indigo-500 bg-opacity-50 rounded-md p-2 text-center">
          {`${amount} ${fromCurrency.toUpperCase()} = ${Number(convertedAmount).toFixed(2)} ${toCurrency.toUpperCase()}`}
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
