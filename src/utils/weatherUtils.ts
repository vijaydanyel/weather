export const getWeatherGradient = (weatherMain: string, isNight: boolean = false) => {
  const gradients = {
    Clear: isNight 
      ? 'from-indigo-900 via-purple-900 to-pink-800'
      : 'from-yellow-400 via-orange-500 to-pink-500',
    Clouds: isNight
      ? 'from-gray-800 via-gray-700 to-gray-600'
      : 'from-gray-400 via-gray-500 to-gray-600',
    Rain: isNight
      ? 'from-blue-900 via-blue-800 to-indigo-900'
      : 'from-blue-400 via-blue-500 to-blue-600',
    Drizzle: isNight
      ? 'from-blue-800 via-slate-700 to-gray-700'
      : 'from-blue-300 via-blue-400 to-blue-500',
    Thunderstorm: isNight
      ? 'from-gray-900 via-purple-900 to-indigo-900'
      : 'from-gray-700 via-purple-600 to-indigo-700',
    Snow: isNight
      ? 'from-blue-100 via-white to-blue-50'
      : 'from-blue-50 via-white to-gray-100',
    Mist: isNight
      ? 'from-gray-600 via-gray-500 to-gray-400'
      : 'from-gray-300 via-gray-200 to-white',
    Smoke: 'from-gray-500 via-gray-400 to-gray-300',
    Haze: 'from-yellow-200 via-orange-200 to-red-200',
    Dust: 'from-yellow-300 via-orange-300 to-red-300',
    Fog: 'from-gray-200 via-white to-gray-100',
    Sand: 'from-yellow-400 via-orange-400 to-red-400',
    Ash: 'from-gray-400 via-gray-300 to-gray-200',
    Squall: 'from-gray-600 via-blue-600 to-indigo-600',
    Tornado: 'from-gray-800 via-gray-700 to-gray-900'
  };

  return gradients[weatherMain as keyof typeof gradients] || gradients.Clear;
};

export const formatTime = (timestamp: number, timezone: number) => {
  const date = new Date((timestamp + timezone) * 1000);
  return date.toLocaleTimeString('en-US', { 
    hour: '2-digit', 
    minute: '2-digit',
    timeZone: 'UTC'
  });
};

export const formatDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString('en-US', { 
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  });
};

export const getWindDirection = (deg: number) => {
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
  return directions[Math.round(deg / 22.5) % 16];
};

export const capitalizeWords = (str: string) => {
  return str.split(' ').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
};