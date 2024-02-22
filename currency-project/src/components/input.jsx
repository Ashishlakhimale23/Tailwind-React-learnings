
function Input({
    label,
    Amount,
    Amountonchange,
    currencyoption=[],
    currencyonchange,
    selectcurrency

}){
    return (
      <div className='bg-white mb-2 rounded-md'>
        <div className="flex justify-between px-3 py-2">
          <label htmlFor="" className=''>{label}</label>
          <label htmlFor="">Currency</label>
        </div>
        <div className='flex justify-between px-3 pb-2'>
          <input type="text" className='w-20 outline-none px-2 rounded-md' value={Amount} onChange={(e)=> Amountonchange && Amountonchange(Number(e.target.value))}/>
          <select name="" id="" value={selectcurrency} onChange={(e)=>{currencyonchange && currencyonchange(e.target.value)}}>
            {currencyoption.map((currency)=>(
                <option key={currency } value={currency}>{currency}</option>
            ))}          
          </select>
        </div>
      </div>
      
    ); 
}
export default Input;