import { NYSEPath, portfolioPath, privateAPIURL, abcDict } from "./constants";
import { getTickerSelectArrayFromCSVLines, getTickerSelectDictFromCSVLines } from "./csvProcessing";

const sendRequest = (path: string) => {
  return fetch(path);
};

// array is sorted alphabetically if CSV is sorted
export const readCSVToArrayOfLines = async (path: string) => {
  try {
    const res = await sendRequest(path);
    const data = await res.text();
    const lines = data.split('\n');
    return lines;

  } catch (err: any) {
    console.warn(err);
    return [err.message];
  }
};

// sub-arrays are sorted alphabetically if CSV is sorted
export const readCSVToDict = async (path: string) => {
  const lines = await readCSVToArrayOfLines(path);
  const tickerDict = getTickerSelectDictFromCSVLines(lines);
  return tickerDict;
};

// converts csv file of stock symbols into string[]
export const readCSVToArray = async (path: string) => {
  const lines = await readCSVToArrayOfLines(path);
  const tickerArray = getTickerSelectArrayFromCSVLines(lines);

  return tickerArray;
};

export const callStockAPI = async (sym: string) => {
  try {
    const res = await sendRequest(privateAPIURL + sym)
    const data = await res.json();
    return data;

  } catch (err: any) {
    console.warn(err);
    return err;
  }
}