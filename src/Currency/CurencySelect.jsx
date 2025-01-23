import React from "react";

const CurrencySelect = ({ currencies,currency,setCurrency,title }) => {
  return (
    <div className="flex flex-col gap-3">
        <div className="font-semibold text-white"><label htmlFor={title}>{title}</label></div>
        
      <select value={currency} onChange={(e)=>{setCurrency(e.target.value)}} className="p-2 rounded-xl">
        {currencies?.map((item) => {
          return <option key={item} value={item} className="text-black"  >{item}</option>;
          
        })}


      </select>
      

      
    </div>
  );
};

export default CurrencySelect;
