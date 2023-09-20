import { 
  getSelectObject,
  getSingleTickerFromSingleLine,
  getTickerSelectArrayFromCSVLines,
  getTickerSelectDictFromCSVLines,
  getValidTicker 
} from "./csvProcessing";

const goodTestDict: TestDict = {
  'A': 'A',
  'ZZZZ': 'ZZZZ',
  'abcdefghijklmnop': 'ABCDEFGHIJKLMNOP'
};

const badTestDict: TestDict = {
  '': '',
  ' ': ' ',
  'jasl;kdfnw[': 'jasl;kdfnw[',
  '123': '123'
};

const combinedDict = { ...goodTestDict, ...badTestDict };

const getTestLine = (t: string) => ( t + '\t' + t );

const getTestLineArray = () => {
  const testLineArray: string[] = [];
    
  for (const t in combinedDict) {
    const line = getTestLine(t);
    testLineArray.push(line);
  }

  return testLineArray;
};

describe('Calling getValidTicker', () => {
  it('should return boolean test true on good inputs', () => {
    for (const g in goodTestDict) {
      expect(getValidTicker(g)).toStrictEqual(goodTestDict[g]);
    }
  });

  it('should return boolean test false on bad inputs', () => {
    for (const b in badTestDict) {
      expect(getValidTicker(b)).toStrictEqual('');
    }
  });
});

describe('Calling getSelectObject', () => {
  it('should return TicketSelect object', () => {
    for (const t in combinedDict) {
      expect(getSelectObject(t).value).toStrictEqual(t);
      expect(getSelectObject(t).label).toStrictEqual(t);
    }
  });
});

describe('Calling getSingleTickerFromSingleLine', () => {
  it('should return ticker on good input', () => {
    let t: keyof TestDict;

    for (t in goodTestDict) {
      const line = getTestLine(t);
      expect(getSingleTickerFromSingleLine(line)).toStrictEqual(goodTestDict[t]);
    }
  });

  it('should return empty string on bad input', () => {
    for (const t in badTestDict) {
      const line = getTestLine(t);
      expect(getSingleTickerFromSingleLine(line)).toStrictEqual('');
    }
  });
});

describe('Calling getTickerSelectArrayFromCSVLines', () => {
  it('should return TicketSelect[] with only valid tickers', () => {
    const testLineArray: string[] = getTestLineArray();

    const tickerSelectArray = getTickerSelectArrayFromCSVLines(testLineArray);
    const goodTestCompareValues = Object.values(goodTestDict);
    const badTestCompareValues = Object.values(badTestDict);

    tickerSelectArray.forEach((tsObj) => {
      expect(goodTestCompareValues.includes(tsObj.value)).toStrictEqual(true);
      expect(badTestCompareValues.includes(tsObj.value)).toStrictEqual(false);
    });
  });
});

describe('Calling getTickerSelectDictFromCSVLines', () => {
  it('should return BigTickerObject with only valid tickers', () => {
    const testLineArray: string[] = getTestLineArray();
    const tickerAbcDict = getTickerSelectDictFromCSVLines(testLineArray);

    expect(tickerAbcDict.A.length).toStrictEqual(2);
    expect(tickerAbcDict.A[0].value).toStrictEqual(goodTestDict.A);
    expect(tickerAbcDict.A[1].label).toStrictEqual(goodTestDict.abcdefghijklmnop);
    expect(tickerAbcDict.Z.length).toStrictEqual(1);
    expect(tickerAbcDict.Z[0].value).toStrictEqual(goodTestDict.ZZZZ);
    expect(tickerAbcDict.J.length).toStrictEqual(0);
  });
});