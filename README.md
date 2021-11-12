# How I worked on this project
My goal was to understand how to reverse engineer the design for a large company

  * I broke down the Robinhood app into individual components and continued to extract further components as needed
  * I added some unique functionlity; such as click to 'buy' which allows for tracking of share amount and stock price: [Example code](https://user-images.githubusercontent.com/47878230/141580637-10b784cf-5362-4970-95f6-8102c97df9f1.png)


# How to navigate this project
  * UI components were custom made:[ Example code for 'chip' component](https://user-images.githubusercontent.com/47878230/141540977-742b98e2-fcbd-40a6-b75b-924c52303204.png)
  * The graph uses chart.js to display test data: [Graph configuration](https://user-images.githubusercontent.com/47878230/141541364-02f9e1e9-ec90-47cc-a903-07334458577f.png)
  * I used a Firestore database to store faux stock information: [Screenshot of database](https://user-images.githubusercontent.com/47878230/141558672-20e2200a-f55f-4925-9037-5de2c25f1895.png)
  * The application fetches live stock data from the Finnhub API: Examples for the [request](https://user-images.githubusercontent.com/47878230/141562135-f06e6c39-2d77-4fd4-83e7-e31d9230e9f9.png)
 and [data transformation](https://user-images.githubusercontent.com/47878230/141565142-5777d529-96a2-43e4-befb-33245112e1c2.png)
  
# If I had more time I would change this
  * Make the line graph correspond to real data
  * Make UX more intuitive for adding and tracking stocks
  * Make the app responsive

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



