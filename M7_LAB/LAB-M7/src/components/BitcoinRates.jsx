import { useState,useEffect } from "react";
import { useData } from "../hooks/useData";   // Import the custom hook
import { useEmoji } from "../context/EmojiContext";


const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {

        const [currency, setCurrency] = useState(currencies[0]);
        const { emoji } = useEmoji();
        // const [price, setPrice] = useState(null);

        // fetch URL: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}
        const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);

// useEffect(() => {
//     console.log('running effect');
//     let ignore =false;

// // const fetchType= type =='all'?'':`&type=${type}`
//  fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
//  .then(response => response.json())
//  .then(json => {
//   console.log(json);  
//  if(!ignore)
//     setPrice(json.bitcoin[currency.toLowerCase()] || json.error);
// });



// return()=>{
//     ignore=true;
//     console.log('effect cleanup - component unmounted/ re rendered');
// }
//  }, [currency]);

// jo: please fix formatting here, code is good though
// Use the custom hook for fetching Bitcoin price data
const priceData=useData(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`,{});

 // Extract Bitcoin price safely to avoid undefined errors
 const price = priceData?.bitcoin?.[currency.toLowerCase()] ?? "Loading...";

            return (
                <div className="BitcoinRates componentBox">
                    <h3>Bitcoin Exchange Rate</h3>

                    <label>Choose currency:
                        <select value={currency}
                         onChange={e => setCurrency(e.target.value)}>
                                {options}
                        </select>
                    </label>

                    <p>1 BTC = {price} {currency}</p>
                  <span>{emoji}</span>
                </div>
        )
}

export default BitcoinRates