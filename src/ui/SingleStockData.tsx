interface SSDProps {
  singleStockData: StockOverview;
}

const SingleStockData = ({singleStockData}: SSDProps) => {
  const data = [];
  let k: keyof StockOverview;

  for(k in singleStockData) {
    data.push(<p key={k}>{k}: {' '+singleStockData[k]}</p>);
  }

  return <div data-testid={singleStockData.Name}>
    {data.map((el) => (el))}
  </div>;
};

export default SingleStockData;