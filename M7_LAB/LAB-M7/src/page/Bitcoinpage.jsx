import BitcoinRates from "../components/BitcoinRates";
import Emoji from "../components/Emoji";

export default function Bitcoinpage() { // Save in pages/Homepage.jsx
    return (
    <div className="Bitcoinpage">
    <h1>Bitcoin</h1>
    <BitcoinRates/>
    <Emoji/>
    </div>
    )
    }