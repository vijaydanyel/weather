# Weather Now - Beautiful Weather Website

A modern, responsive weather application built with React, TypeScript, and Tailwind CSS. Get real-time weather information and 5-day forecasts for any city worldwide.

## Features

- 🌤️ Real-time weather data for any city
- 📅 5-day weather forecast
- 🎨 Dynamic backgrounds that adapt to weather conditions
- 📱 Fully responsive design
- ⚡ Fast and lightweight
- 🔍 City search with error handling
- 🌡️ Detailed weather metrics (humidity, wind, pressure, etc.)
- 🌅 Sunrise and sunset times
- 💫 Smooth animations and transitions

## Setup Instructions

### 1. Get Your API Key

1. Visit [OpenWeatherMap](https://openweathermap.org/api)
2. Sign up for a free account
3. Navigate to the "API Keys" section
4. Copy your API key

### 2. Configure Environment Variables

1. Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Open the `.env` file and replace `your_api_key_here` with your actual API key:
   ```
   VITE_OPENWEATHER_API_KEY=your_actual_api_key_here
   ```

### 3. Install and Run

The project is ready to run! The development server should start automatically.

If you need to restart the server:
```bash
npm run dev
```

## Technology Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Lucide React** - Beautiful icons
- **OpenWeatherMap API** - Weather data provider

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── WeatherCard.tsx     # Main weather display
│   ├── ForecastCard.tsx    # 5-day forecast
│   ├── SearchInput.tsx     # City search input
│   ├── WeatherIcon.tsx     # Weather icons
│   ├── ErrorMessage.tsx    # Error handling
│   └── LoadingSpinner.tsx  # Loading states
├── services/            # API services
│   └── weatherApi.ts       # OpenWeatherMap API client
├── types/              # TypeScript type definitions
│   └── weather.ts          # Weather data types
├── utils/              # Helper functions
│   └── weatherUtils.ts     # Weather-related utilities
└── App.tsx             # Main application component
```

## Features Breakdown

### Dynamic Backgrounds
The background gradient automatically changes based on:
- Current weather conditions (sunny, cloudy, rainy, etc.)
- Time of day (day/night cycle)

### Weather Metrics
- Current temperature and "feels like" temperature
- Daily high and low temperatures
- Humidity percentage
- Wind speed and direction
- Atmospheric pressure
- Visibility distance
- Sunrise and sunset times

### 5-Day Forecast
- Weather conditions for the next 5 days
- High and low temperatures
- Precipitation probability
- Weather descriptions

### Error Handling
- Invalid city names
- Network connectivity issues
- API rate limiting
- Service unavailability

## Customization

The app is designed to be easily customizable:

- **Colors**: Modify the gradient colors in `src/utils/weatherUtils.ts`
- **Icons**: Add or change weather icons in `src/components/WeatherIcon.tsx`
- **Layout**: Adjust the responsive design in component files
- **API**: Extend the weather API client in `src/services/weatherApi.ts`

## Browser Support

This application works in all modern browsers that support:
- ES2020+ JavaScript features
- CSS Grid and Flexbox
- Fetch API
- CSS Custom Properties

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).