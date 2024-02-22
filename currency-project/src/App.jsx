import { useState } from 'react'
import './App.css'
import Input  from './components/input'
import useCurrencyinfo from './hooks/useCurrencyinfo'



function App() {
  const [amount,setAmount] = useState(0)
  const [from,setFrom] = useState("usd")
  const [to,setTo] = useState("inr")
  const usercurrency = useCurrencyinfo(from)
  const Currency = Object.keys(usercurrency)
  const [convertedamount,setConvertedamount] = useState(0)
  const convert = () =>{setConvertedamount(amount * usercurrency[to])}
  console.log(amount * usercurrency[to])

  return (
    <>
      <div className="w-full h-screen ">
        <div
          className="w-full h-full flex justify-center items-center "
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/564x/53/69/78/53697872025477160a3f64348988fcca.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="w-96 h-fit bg-gray-400 p-4 flex flex-col justify-between rounded-md">
            <form action="" onSubmit={(e)=>{
              e.preventDefault()
              convert()
            }}>
              <Input
              label={"From"}
              Amount={amount}
              currencyoption={Currency}
              Amountonchange={(amount)=>setAmount(amount)}
              currencyonchange={(currency)=>{
                setFrom(currency)
              }}
              selectcurrency={from}


              ></Input>
              <Input
               label={"To"}
              Amount={convertedamount}
              currencyoption={Currency}
              
              currencyonchange={(currency)=>{
                setTo(currency)
              }}
              selectcurrency={to}


              ></Input>
              <button type='submit' className='bg-blue-500 p-2 w-full rounded-md text-white'>convert</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
