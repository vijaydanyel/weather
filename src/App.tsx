import React, { useState, useEffect } from 'react';
import { SearchInput } from './components/SearchInput';
import { WeatherCard } from './components/WeatherCard';
import { ForecastCard } from './components/ForecastCard';
import { ErrorMessage } from './components/ErrorMessage';
import { LoadingSpinner } from './components/LoadingSpinner';
import { weatherApi, WeatherApiError } from './services/weatherApi';
import { CurrentWeather, WeatherForecast } from './types/weather';
import { getWeatherGradient } from './utils/weatherUtils';

function App() {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>(null);
  const [forecast, setForecast] = useState<WeatherForecast | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [backgroundGradient, setBackgroundGradient] = useState('from-blue-400 via-blue-500 to-blue-600');

  useEffect(() => {
    // Load default city on mount
    handleSearch('London');
  }, []);

  const handleSearch = async (city: string) => {
    setLoading(true);
    setError(null);

    try {
      const [weatherData, forecastData] = await Promise.all([
        weatherApi.getCurrentWeather(city),
        weatherApi.getForecast(city)
      ]);

      setCurrentWeather(weatherData);
      setForecast(forecastData);

      // Update background gradient based on weather
      const currentTime = new Date();
      const sunrise = new Date(weatherData.sys.sunrise * 1000);
      const sunset = new Date(weatherData.sys.sunset * 1000);
      const isNight = currentTime < sunrise || currentTime > sunset;
      
      setBackgroundGradient(getWeatherGradient(weatherData.weather[0].main, isNight));
    } catch (err) {
      if (err instanceof WeatherApiError) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
      setCurrentWeather(null);
      setForecast(null);
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    if (currentWeather) {
      handleSearch(currentWeather.name);
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${backgroundGradient} transition-all duration-1000 p-4`}>
      {/* Header */}
      <header className="text-center py-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Weather Now
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
          Get real-time weather information for any city around the world
        </p>
      </header>

      {/* Search */}
      <div className="mb-12">
        <SearchInput 
          onSearch={handleSearch} 
          loading={loading}
          placeholder="Search for a city..."
        />
      </div>

      {/* Content */}
      <main className="pb-8">
        {loading && <LoadingSpinner />}
        
        {error && !loading && (
          <ErrorMessage message={error} onRetry={handleRetry} />
        )}
        
        {currentWeather && !loading && !error && (
          <>
            <WeatherCard weather={currentWeather} />
            {forecast && <ForecastCard forecast={forecast} />}
          </>
        )}
      </main>

      {/* Footer */}
      <footer className="text-center py-6">
        <p className="text-white/60 text-sm">
          Weather data provided by OpenWeatherMap API
        </p>
      </footer>
    </div>
  );
}

export default App;