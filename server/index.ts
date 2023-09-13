import express, { Express, Request, Response } from 'express';
import cors from 'cors';

const PORT = process.env.SERVER_PORT || 3001;

const app: Express = express();

// enable cors
app.use(cors({origin:'http://localhost:3000'}));

const stockAPIDomain = 'https://alphavantage.co';
const stockAPIPathOne = '/query?function=OVERVIEW&symbol=';
const stockAPIPathTwo = `&apikey=${process.env.ALPHAVANTAGE_SECRET_API_KEY}`;

const stockAPIURL = (sym: string) => {
  return stockAPIDomain + stockAPIPathOne + sym + stockAPIPathTwo;
}

const sendRequest = (path: string) => {
  return fetch(path);
};

app.get("/api/stockData", async (req: Request, res: Response) => {
  const sym = req.query.symbol;

  if (typeof sym === 'string') {
    try {
      const stockAPIRes = await sendRequest(stockAPIURL(sym));
      const data = await stockAPIRes.json();
      res.json(data);
  
    } catch (err: any) {
      console.log(typeof err);
      console.log(err);
      res.json(err.message());
    }
  } else {
    res.sendStatus(403);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});