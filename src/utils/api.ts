export const NYSEPath = './NYSE.txt';
export const portfolioPath = './Portfolio.txt';
const privateAPIURL = 'http://127.0.0.1:3001/api/stockData?symbol=';

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

    lines.forEach((line) => {
      const lineArray = line.split('\t');
      const ticker = lineArray[0];
      result.push({ value: ticker, label: ticker });
    });

    return result;

  } catch (err: any) {
    console.warn(err);
    return [err.message()];
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