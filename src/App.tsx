import { useState } from 'react';
import Select, { SingleValue } from 'react-select';
import logo from './logo.svg';
import './App.css';
import { NYSEPath, callStockAPI, readCSVToArray } from './utils/api';
import SingleStockData from './ui/SingleStockData';

function App() {
  const [toAnalyze, setToAnalyze] = useState({} as StockOverview);
  const [portfolio, setPortfolio] = useState([] as StockOverview[]);
  const [NYSEList, setNYSEList] = useState([] as TickerSelect[]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [testData, setTestData] = useState([] as JSX.Element[]);

  const initNSYEList = async () => {
    const list = await readCSVToArray(NYSEPath);
    setNYSEList(list);
    setIsDisabled(false);
  };

  const sendSymbol = async (sym: string | undefined) => {
    if (sym) {
      const stockData = await callStockAPI(sym);
      setToAnalyze(stockData);
    }
  };

  const getSymbol = (e: SingleValue<TickerSelect>) => {
    const sym = e?.value;
    sendSymbol(sym);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Equity Risk Tool
        </h2>
      </header>
      <section>
        <button onClick={initNSYEList}>Analyze a stock</button>
      </section>
      <section>
        <h2>Stock Analyzer</h2>
        <Select 
          id="a" 
          className="basic-single"
          classNamePrefix="select"
          defaultValue={NYSEList[0]}
          isDisabled={isDisabled}
          isClearable={true} 
          isSearchable={true}
          name="ticker"
          onChange={getSymbol}
          options={NYSEList} 
        />
        <SingleStockData singleStockData={toAnalyze}/>
        <div id="results" className="hidden"></div>
      </section>
    </div>
  );
}

export default App;
