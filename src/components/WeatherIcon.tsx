import React from 'react';
import { 
  Sun, 
  Cloud, 
  CloudRain, 
  CloudSnow, 
  Zap, 
  CloudDrizzle,
  Sunrise,
  Sunset,
  Eye,
  Wind,
  Droplets,
  Gauge,
  Thermometer
} from 'lucide-react';

interface WeatherIconProps {
  weather: string;
  size?: number;
  className?: string;
}

export const WeatherIcon: React.FC<WeatherIconProps> = ({ 
  weather, 
  size = 24, 
  className = "" 
}) => {
  const iconProps = { size, className };

  switch (weather.toLowerCase()) {
    case 'clear':
      return <Sun {...iconProps} />;
    case 'clouds':
      return <Cloud {...iconProps} />;
    case 'rain':
      return <CloudRain {...iconProps} />;
    case 'drizzle':
      return <CloudDrizzle {...iconProps} />;
    case 'thunderstorm':
      return <Zap {...iconProps} />;
    case 'snow':
      return <CloudSnow {...iconProps} />;
    case 'mist':
    case 'smoke':
    case 'haze':
    case 'dust':
    case 'fog':
    case 'sand':
    case 'ash':
    case 'squall':
    case 'tornado':
      return <Cloud {...iconProps} />;
    default:
      return <Sun {...iconProps} />;
  }
};

interface MetricIconProps {
  type: 'sunrise' | 'sunset' | 'visibility' | 'wind' | 'humidity' | 'pressure' | 'temperature';
  size?: number;
  className?: string;
}

export const MetricIcon: React.FC<MetricIconProps> = ({ type, size = 20, className = "" }) => {
  const iconProps = { size, className };

  switch (type) {
    case 'sunrise':
      return <Sunrise {...iconProps} />;
    case 'sunset':
      return <Sunset {...iconProps} />;
    case 'visibility':
      return <Eye {...iconProps} />;
    case 'wind':
      return <Wind {...iconProps} />;
    case 'humidity':
      return <Droplets {...iconProps} />;
    case 'pressure':
      return <Gauge {...iconProps} />;
    case 'temperature':
      return <Thermometer {...iconProps} />;
    default:
      return <Sun {...iconProps} />;
  }
};