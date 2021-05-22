# Your News

A web app that shows news from multiple sources and gives the viewer a way to research the topic and view the original source.

# Motivation

I wanted to see unbiased news from multiple news outlets with no interest targeting.

# Build Status

Live: [here](https://your-news.herokuapp.com/) on Heroku.

# Stack

- Node
- Express
- React
- Mongodb

# APIs

- Open Weather Map [click](https://openweathermap.org/api)
- News Api [click](https://newsapi.org/)

# Requirements

- Node
- Nodemon

# Setup

- clone to computer using:

```
git clone https://github.com/TS22082/your_news.git
```

- run npm install from inside the root directory AND the client directory.

```
npm install
cd client
npm install
```

**_ Note: you will need accounts and api keys from the news-api and open weather map._**

Create a .env file in root directory:

```
NEWS_API=<your_news_api_key>
WEATHER_API=<your_weather_api_key>
```

- From inside project folder type (requires Nodemon) to start server and client:

```
npm run dev
```

You can also just run the server for development:

```
npm run server
```

You can also just run the client for development:

```
npm run client
```
