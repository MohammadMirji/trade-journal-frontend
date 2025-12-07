import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { createTrade, getTrade } from "../services/tradeService";

function Journal() {

  const [stock, setStock] = useState('');
  const [entry, setEntry] = useState('');
  const [exit, setExit] = useState('');
  const [pnl, setPnl] = useState('');
  const [trade, setTrade] = useState([]);

  useEffect( () => {
    getTrade().then(res => setTrade(res.data))
    .catch(err => console.error(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stock.trim()) return alert("Please enter Stock name");
    try {
      await createTrade({stock, entry, exit, pnl});
      setStock("");
      setEntry("");
      setExit("");
      setPnl("");
      alert("Trade added sucessfully!");
    } catch (error) {
      console.error("Error creating trade", error);
      alert("Error creating trade");
    }
  }
  return (
    <div style={{margin:10}}>
      <form onSubmit={handleSubmit}>
        <h2>Add trades</h2>
        <div className="tradeform">
          <p style={{width:100}}>Stock name</p>
          <input
            style={{ position: "relative", left: "10%" }}
            type="text"
            placeholder="Add Stock name"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          ></input>
        </div>
        <div className="tradeform">
          <p style={{width:100}}>Entry</p>
          <input
            style={{ position: "relative", left: "10%" }}
            type="number"
             placeholder="Add Entry price"
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
          ></input>
        </div>
        <div className="tradeform">
          <p style={{width:100}}>Exit</p>
          <input
            style={{ position: "relative", left: "10%" }}
            type="number"
            placeholder="Add Exit price"
            value={exit}
            onChange={(e) => setExit(e.target.value)}
          ></input>
        </div>
        <div className="tradeform">
          <p style={{width:100}}>PnL</p>
          <input
            style={{ position: "relative", left: "10%" }}
            type="number"
            placeholder="Add PnL"
            value={pnl}
            onChange={(e) => setPnl(e.target.value)}
          ></input>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div>
        <h2>All trades</h2>
       <ul>
        {trade.map(u =>(
          <li key={u._id}>{u.stock} | {u.entry} | {u.exit} | {u.pnl}</li>
        ))}
       </ul>
      </div>
    </div>
  );
}

export default Journal;
