import React from 'react';
import { WeatherIcon } from './WeatherIcon';
import { WeatherForecast } from '../types/weather';
import { formatDate } from '../utils/weatherUtils';

interface ForecastCardProps {
  forecast: WeatherForecast;
}

export const ForecastCard: React.FC<ForecastCardProps> = ({ forecast }) => {
  // Group forecast by day and get one entry per day
  const dailyForecast = forecast.list.reduce((acc, item) => {
    const date = new Date(item.dt * 1000).toDateString();
    if (!acc[date]) {
      acc[date] = item;
    }
    return acc;
  }, {} as Record<string, any>);

  const forecastDays = Object.values(dailyForecast).slice(0, 5);

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">
        5-Day Forecast
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {forecastDays.map((day, index) => (
          <div 
            key={day.dt}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 
                     text-center hover:bg-white/15 transition-all duration-300 
                     hover:scale-105 hover:shadow-lg"
          >
            <div className="text-white/80 text-sm font-medium mb-3">
              {index === 0 ? 'Today' : formatDate(day.dt)}
            </div>
            
            <div className="flex justify-center mb-3">
              <WeatherIcon 
                weather={day.weather[0].main} 
                size={40} 
                className="text-white"
              />
            </div>
            
            <div className="text-white/90 text-xs mb-3 capitalize">
              {day.weather[0].description}
            </div>
            
            <div className="flex justify-between items-center">
              <div className="text-white font-bold text-lg">
                {Math.round(day.main.temp_max)}°
              </div>
              <div className="text-white/60 text-sm">
                {Math.round(day.main.temp_min)}°
              </div>
            </div>
            
            <div className="mt-2 text-white/60 text-xs">
              {Math.round(day.pop * 100)}% rain
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};