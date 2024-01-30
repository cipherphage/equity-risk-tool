# Equity Risk Microservice

## About

- *Work in progress, not yet functioning!
- Must Haves:
  - Correlation analysis on equity timeseries data.
    - Hedgecraft, an open-source portfolio correlation library: [https://github.com/mayabenowitz/Hedgecraft](https://github.com/mayabenowitz/Hedgecraft).
  - UI for the analysis.
- Nice To Haves:
  - Sentiment analysis on news reports.
    - Hugging Face's Transformers library and various free news APIs.
- Might Haves:
  - Utilize Alpha Vantage Stock Market API to fetch stock data.
    - Note: the following rate limits apply:
      - Up to 5 API requests per minute.
      - Up to 100 API requests per day.


## Built Using

- Next.js FastAPI Starter template: [https://github.com/psycho-baller/nextjs-and-fastapi-backend](https://github.com/psycho-baller/nextjs-and-fastapi-backend)
- Hedgecraft, an open-source portfolio correlation library: [https://github.com/mayabenowitz/Hedgecraft](https://github.com/mayabenowitz/Hedgecraft).
- Alpha Vantage Stock Market API: [https://www.alphavantage.co/](https://www.alphavantage.co/).
- Note regarding data: I obtained some equity timeseries data in CSV format from here: [https://www.eoddata.com](https://www.eoddata.com).

## Running the app:

- See the app template README for basic install/running instructions: [app_template_README.md](./app_template_README.md).