import React, { useId } from "react";

// label to change label from  or to
// amount the value to convert
// onCurrencyChange event which trigger the currencychange part applied over currecny options
// currency option seslc toptions for the avaible currency options
// select currency selected currency value from the options
// class name user based css for deffrentiating the components of to or from

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  className = "",
}) {
  const amountInputId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          id={amountInputId}
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {
            // key is used for the performance factor
            // Without key
            // React sees: option, option, option (can't tell them apart!)
            currencyOptions.map((cur) => (
              <option key={cur} value={cur}>
                {cur}
              </option>
            ))
            // With key
            // React sees: option-usd, option-eur, option-gbp (knows exactly which is which!)
          }
        </select>
      </div>
    </div>
  );
}

export default InputBox;
