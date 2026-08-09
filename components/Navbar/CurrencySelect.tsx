const CurrencySelect = () => {
  return (
    <div className="relative">
      <label htmlFor="currency" className="sr-only">
        Select currency
      </label>

      <select
        id="currency"
        defaultValue="NGN"
        className="h-10 
        cursor-pointer 
        appearance-none 
        border 
        border-[#eadfd9] 
        bg-white 
        px-4 
        pr-9 
        text-[16px] 
        text-black 
        outline-none 
        transition 
        hover:border-black 
        focus:border-black"
      >
        <option value="NGN">NGN</option>
        <option value="USD">USD</option>
      </select>

      <span className="
        pointer-events-none 
        absolute 
        right-3 
        top-1/2 
        -translate-y-1/2 
        text-xs 
        text-black"
        >
          ▾
      </span>
    </div>
  );
};

export default CurrencySelect;