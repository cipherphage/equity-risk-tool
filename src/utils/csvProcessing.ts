import { abcDict } from "./constants";

export const getUpperCasedString = (str: string) => ( str.toUpperCase() );

export const getValidTicker = (ticker: string) => {
  // leading with most common case
  if (/^[A-Z]+$/.test(ticker)) {
    
    return ticker;
  } else if (/^[a-zA-Z]+$/.test(ticker)) {

    return getUpperCasedString(ticker);
  } else {

    return '';
  }
};

export const getSelectObject = (ticker: string) => {
  return { value: ticker, label: ticker };
};

export const getSingleTickerFromSingleLine = (line: string) => {
  const lineArray = line.split('\t');
  const ticker = lineArray[0];

  return getValidTicker(ticker);
};

export const getTickerSelectArrayFromCSVLines = (csvLines: string[]) => {
  const tickerSelectArray: TickerSelect[] = [];

  csvLines.forEach((line) => {
    const ticker = getSingleTickerFromSingleLine(line);
    if (ticker) {
      tickerSelectArray.push(getSelectObject(ticker));
    }
  });

  return tickerSelectArray;
};

export const getTickerSelectDictFromCSVLines = (csvLines: string[]) => {
  csvLines.forEach((line) => {
    const ticker = getSingleTickerFromSingleLine(line);
    if (ticker) {
      const firstLetter = ticker[0];
      abcDict[firstLetter].push(getSelectObject(ticker));
    }
  });

  return abcDict;
};