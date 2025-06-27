import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';

interface SearchInputProps {
  onSearch: (city: string) => void;
  loading?: boolean;
  placeholder?: string;
}

export const SearchInput: React.FC<SearchInputProps> = ({ 
  onSearch, 
  loading = false,
  placeholder = "Enter city name..." 
}) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <MapPin className="h-5 w-5 text-white/60 group-focus-within:text-white/80 transition-colors" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          disabled={loading}
          className="w-full pl-12 pr-12 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl 
                   text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 
                   focus:border-white/40 transition-all duration-300 text-lg
                   disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <button
          type="submit"
          disabled={loading || !query.trim()}
          className="absolute inset-y-0 right-0 pr-4 flex items-center
                   disabled:opacity-50 disabled:cursor-not-allowed
                   hover:scale-110 active:scale-95 transition-transform duration-200"
        >
          <Search className="h-5 w-5 text-white/60 hover:text-white/80 transition-colors" />
        </button>
      </div>
    </form>
  );
};