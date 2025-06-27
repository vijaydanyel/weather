const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY || 'demo_key';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export class WeatherApiError extends Error {
  constructor(message: string, public statusCode?: number) {
    super(message);
    this.name = 'WeatherApiError';
  }
}

export const weatherApi = {
  async getCurrentWeather(city: string) {
    try {
      const response = await fetch(
        `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
      );
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new WeatherApiError('City not found. Please check the spelling and try again.', 404);
        }
        if (response.status === 401) {
          throw new WeatherApiError('API key invalid. Please check your configuration.', 401);
        }
        throw new WeatherApiError(`Weather service error: ${response.status}`, response.status);
      }
      
      return await response.json();
    } catch (error) {
      if (error instanceof WeatherApiError) {
        throw error;
      }
      throw new WeatherApiError('Network error. Please check your connection and try again.');
    }
  },

  async getForecast(city: string) {
    try {
      const response = await fetch(
        `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`
      );
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new WeatherApiError('City not found. Please check the spelling and try again.', 404);
        }
        if (response.status === 401) {
          throw new WeatherApiError('API key invalid. Please check your configuration.', 401);
        }
        throw new WeatherApiError(`Weather service error: ${response.status}`, response.status);
      }
      
      return await response.json();
    } catch (error) {
      if (error instanceof WeatherApiError) {
        throw error;
      }
      throw new WeatherApiError('Network error. Please check your connection and try again.');
    }
  }
};