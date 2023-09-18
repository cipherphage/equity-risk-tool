import { BaseSyntheticEvent, KeyboardEvent, useState } from 'react';
import Select, { SingleValue } from 'react-select';
import logo from './logo.svg';
import './App.css';
import { callStockAPI, readCSVToArray } from './utils/api';
import { NYSEPath } from './utils/constants';
import SingleStockData from './ui/SingleStockData';

function App() {
  const [toAnalyze, setToAnalyze] = useState({} as StockOverview);
  const [portfolio, setPortfolio] = useState([] as StockOverview[]);
  const [NYSEList, setNYSEList] = useState({} as BigTickerObject);
  const [isDisabled, setIsDisabled] = useState(true);
  const [testData, setTestData] = useState([] as JSX.Element[]);
  const [apiTracker, setApiTracker] = useState({reqsDone:0,reqsAllowed:100,reqsLeft:100});
  const [NYSEOptions, SetNYSEOptions] = useState([] as TickerSelect[]);

  const initNSYEList = async () => {
    const list = await readCSVToArray(NYSEPath);
    if (!Array.isArray(list)) {
      setNYSEList(list);
      SetNYSEOptions(list.A);
      setIsDisabled(false);
    }
  };

  const sendSymbol = async (sym: string | undefined) => {
    if (sym) {
      const stockData = await callStockAPI(sym);
      setToAnalyze(stockData);
    }
  };

  const optionsChecker = (e: any) => {
    const sym = e?.target?.value;
    if (sym) {
      // TODO check sym is a letter A through Z
      SetNYSEOptions(NYSEList[sym[0]]);
    }
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
          //defaultValue={}
          isDisabled={isDisabled}
          isClearable={true} 
          isSearchable={true}
          name="ticker"
          onKeyDown={optionsChecker}
          options={NYSEOptions} 
        />
        <SingleStockData singleStockData={toAnalyze}/>
        <div id="results" className="hidden"></div>
      </section>
    </div>
  );
}

export default App;
