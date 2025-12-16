
[![Netlify Status](https://api.netlify.com/api/v1/badges/755f1c49-62d1-4b68-a1a5-4914e9095bf1/deploy-status)](https://app.netlify.com/projects/legendary-sunburst-82c066/deploys)
# React Weather App

A small React application that shows current weather and a short forecast for a city. Built with Create React App and designed to be simple, extendable, and easy to deploy.

Live demo: https://deploy-preview-6--legendary-sunburst-82c066.netlify.app/

## Features
- Search weather by city name
- Current conditions (temperature, humidity, wind, description)
- 5-day / hourly forecast (depending on API used)
- Error handling for not-found cities and network issues
- Responsive UI for desktop and mobile

## Built with
- React (Create React App)
- CSS / Sass (adapt to what this project uses)
- Fetch / Axios (depending on implementation)
- OpenWeatherMap or other weather API (you must supply an API key)

## Screenshots
Add screenshots to the repo and update paths below:
- ![Current weather](./screenshots/current.png)
- ![Forecast](./screenshots/forecast.png)

## Getting started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites
- Node.js (>= 16 recommended) and npm or yarn
- A weather API key (e.g., OpenWeatherMap)

### Install
1. Clone the repository
   ```bash
   git clone https://github.com/Andrew112/react-weather-app.git
   cd react-weather-app
   ```
2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

### Environment variables
Create a `.env` file in the project root with your API key (React requires the REACT_APP_ prefix):
```bash
REACT_APP_WEATHER_API_KEY=your_api_key_here
REACT_APP_WEATHER_API_BASE=https://api.openweathermap.org/data/2.5
# optional: REACT_APP_UNITS=metric
```
Restart the dev server after creating/updating `.env`.

### Available scripts
- `npm start` — start the development server (http://localhost:3000)
- `npm run build` — build the app for production
- `npm test` — run tests (if present)
- `npm run lint` — lint code (if configured)

### Usage
- Start the dev server with `npm start`.
- Enter a city name in the search input and press Enter or click Search.
- The app will fetch current weather & forecast data and render results.

## Project structure (example)
- src/
  - components/ — React components (Search, CurrentWeather, Forecast, etc.)
  - api/ — API helpers
  - styles/ — CSS or Sass files
  - utils/ — utility functions
  - App.js, index.js

Adjust the structure to match the actual repository.

## Testing
If tests are included:
```bash
npm test
```
Add tests for components and API helpers to ensure core flows work (search, successful response, error handling).

## Deployment
Build and deploy the `build/` folder to any static host (Netlify, Vercel, GitHub Pages, etc.):
```bash
npm run build
# then follow your host's deployment steps
```

## Contributing
Contributions are welcome. Suggested workflow:
1. Fork the repo
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit changes: `git commit -m "Add ..."`
4. Push and open a pull request

Please open issues for bugs or feature requests.

## Troubleshooting
- If API returns 401/403: check `REACT_APP_WEATHER_API_KEY`.
- If data is missing: verify API endpoint and response shape used in the code.
- For CORS issues: ensure you're calling a server-side proxy or using the API provider's allowed endpoints.

## License
Specify a license (e.g., MIT) or update as appropriate.

## Acknowledgements
- Create React App
- OpenWeatherMap (or whichever API you used)
- UI inspiration and icon sets
