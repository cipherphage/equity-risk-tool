import { NYSEPath, portfolioPath, privateAPIURL, abcDict } from "./constants";

const sendRequest = (path: string) => {
  return fetch(path);
};

// converts csv file of stock symbols into string[]
export const readCSVToArray = async (path: string) => {
  try {
    const res = await sendRequest(path);
    const data = await res.text();
    const lines = data.split('\n');
    const result: TickerSelect[] = [];

    if (lines.length > 50) {
      lines.forEach((line) => {
        const lineArray = line.split('\t');
        const ticker = lineArray[0];
        const firstLetter = ticker[0];
        abcDict[firstLetter].push({ value: ticker, label: ticker });
      });

      return abcDict;

    } else {
      lines.forEach((line) => {
        const lineArray = line.split('\t');
        const ticker = lineArray[0];
        result.push({ value: ticker, label: ticker });
      });

      return result;
    }

  } catch (err: any) {
    console.warn(err);
    console.log(err.message);
    return [err.message];
  }
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