import { BaseSyntheticEvent, KeyboardEvent, ReactEventHandler, useState } from 'react';
import Select, { ActionMeta, InputActionMeta, Options, SelectOptionActionMeta, SingleValue } from 'react-select';
import logo from './logo.svg';
import './App.css';
import { callStockAPI, readCSVToArray, readCSVToDict } from './utils/api';
import { NYSEPath } from './utils/constants';
import SingleStockData from './ui/SingleStockData';

function App() {
  const [toAnalyze, setToAnalyze] = useState({} as StockOverview);
  const [portfolio, setPortfolio] = useState([] as StockOverview[]);
  const [NYSEDict, setNYSEDict] = useState({} as BigTickerObject);
  const [isDisabled, setIsDisabled] = useState(true);
  const [testData, setTestData] = useState([] as JSX.Element[]);
  const [apiTracker, setApiTracker] = useState({reqsDone:0,reqsAllowed:100,reqsLeft:100});
  const [NYSEOptions, SetNYSEOptions] = useState([] as TickerSelect[]);

  const initNSYEDict = async () => {
    const list = await readCSVToDict(NYSEPath);
    setNYSEDict(list);
    SetNYSEOptions(list.A);
    setIsDisabled(false);
  };

  const sendSymbol = async (selected: SingleValue<TickerSelect>, actionMeta: ActionMeta<TickerSelect>) => {
    // TODO check sym is a letter A through Z
    const sym = selected?.value;

    if (sym && actionMeta.action === 'select-option') {
      console.log(`Fetching company overview for ${sym}!`);
      const stockData = await callStockAPI(sym);
      setToAnalyze(stockData);
    }
  };

  const optionsChecker = (sym: string) => {
    if (sym) {
      console.log(`Got sym: ${sym}!`);
      // TODO check sym is a letter A through Z
      SetNYSEOptions(NYSEDict[sym[0]]);
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
        <button onClick={initNSYEDict}>Analyze a stock</button>
      </section>
      <section>
        <h2>Stock Analyzer</h2>
        <Select 
          id="a" 
          className="basic-single"
          classNamePrefix="select"
          isDisabled={isDisabled}
          isClearable={true} 
          isSearchable={true}
          name="ticker"
          onInputChange={optionsChecker}
          onChange={sendSymbol}
          options={NYSEOptions} 
        />
        <SingleStockData singleStockData={toAnalyze}/>
        <div id="results" className="hidden"></div>
      </section>
    </div>
  );
}

export default App;
