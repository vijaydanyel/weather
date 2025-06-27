import React from 'react';
import { WeatherIcon, MetricIcon } from './WeatherIcon';
import { CurrentWeather } from '../types/weather';
import { formatTime, getWindDirection, capitalizeWords } from '../utils/weatherUtils';

interface WeatherCardProps {
  weather: CurrentWeather;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  const currentTime = new Date();
  const sunrise = new Date(weather.sys.sunrise * 1000);
  const sunset = new Date(weather.sys.sunset * 1000);
  const isNight = currentTime < sunrise || currentTime > sunset;

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Main Weather Card */}
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl mb-6">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {weather.name}, {weather.sys.country}
          </h1>
          <p className="text-white/80 text-lg">
            {capitalizeWords(weather.weather[0].description)}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Temperature and Icon */}
          <div className="flex items-center gap-6">
            <WeatherIcon 
              weather={weather.weather[0].main} 
              size={80} 
              className="text-white drop-shadow-lg"
            />
            <div>
              <div className="text-6xl md:text-7xl font-bold text-white">
                {Math.round(weather.main.temp)}°
              </div>
              <div className="text-white/80 text-xl">
                Feels like {Math.round(weather.main.feels_like)}°
              </div>
            </div>
          </div>

          {/* Min/Max Temperature */}
          <div className="text-center">
            <div className="text-white/80 text-sm uppercase tracking-wide mb-2">
              Today's Range
            </div>
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-2xl font-semibold text-white">
                  {Math.round(weather.main.temp_max)}°
                </div>
                <div className="text-white/60 text-sm">High</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-semibold text-white">
                  {Math.round(weather.main.temp_min)}°
                </div>
                <div className="text-white/60 text-sm">Low</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Weather Details Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Humidity */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
          <div className="flex items-center gap-3 mb-2">
            <MetricIcon type="humidity" className="text-blue-300" />
            <span className="text-white/80 text-sm">Humidity</span>
          </div>
          <div className="text-2xl font-bold text-white">{weather.main.humidity}%</div>
        </div>

        {/* Wind */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
          <div className="flex items-center gap-3 mb-2">
            <MetricIcon type="wind" className="text-gray-300" />
            <span className="text-white/80 text-sm">Wind</span>
          </div>
          <div className="text-2xl font-bold text-white">
            {Math.round(weather.wind.speed * 3.6)} km/h
          </div>
          <div className="text-white/60 text-xs">
            {getWindDirection(weather.wind.deg)}
          </div>
        </div>

        {/* Pressure */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
          <div className="flex items-center gap-3 mb-2">
            <MetricIcon type="pressure" className="text-green-300" />
            <span className="text-white/80 text-sm">Pressure</span>
          </div>
          <div className="text-2xl font-bold text-white">{weather.main.pressure}</div>
          <div className="text-white/60 text-xs">hPa</div>
        </div>

        {/* Visibility */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
          <div className="flex items-center gap-3 mb-2">
            <MetricIcon type="visibility" className="text-purple-300" />
            <span className="text-white/80 text-sm">Visibility</span>
          </div>
          <div className="text-2xl font-bold text-white">
            {Math.round(weather.visibility / 1000)}
          </div>
          <div className="text-white/60 text-xs">km</div>
        </div>

        {/* Sunrise */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
          <div className="flex items-center gap-3 mb-2">
            <MetricIcon type="sunrise" className="text-yellow-300" />
            <span className="text-white/80 text-sm">Sunrise</span>
          </div>
          <div className="text-xl font-bold text-white">
            {formatTime(weather.sys.sunrise, weather.timezone)}
          </div>
        </div>

        {/* Sunset */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
          <div className="flex items-center gap-3 mb-2">
            <MetricIcon type="sunset" className="text-orange-300" />
            <span className="text-white/80 text-sm">Sunset</span>
          </div>
          <div className="text-xl font-bold text-white">
            {formatTime(weather.sys.sunset, weather.timezone)}
          </div>
        </div>
      </div>
    </div>
  );
};