import { abcDict } from "./constants";

export const getSelectObject = (ticker: string) => {
  return { value: ticker, label: ticker };
};

export const getSingleTickerFromSingleLine = (line: string) => {
  const lineArray = line.split('\t');
  const ticker = lineArray[0];

  return ticker;
};

export const getTickerSelectArrayFromCSVLines = (csvLines: string[]) => {
  const tickerSelectArray: TickerSelect[] = [];

  csvLines.forEach((line) => {
    const ticker = getSingleTickerFromSingleLine(line);
    tickerSelectArray.push(getSelectObject(ticker));
  });

  return tickerSelectArray;
};

export const getTickerSelectDictFromCSVLines = (csvLines: string[]) => {
  csvLines.forEach((line) => {
    const ticker = getSingleTickerFromSingleLine(line);
    const firstLetter = ticker[0];
    abcDict[firstLetter].push(getSelectObject(ticker));
  });

  return abcDict;
};