import React, { useState } from 'react';
import './SearchBar.css'; 

const SearchBar = () => {
  const countriesData = [
    {
      "country": "United States",
      "capital": "Washington, D.C.",
      "population": 331002651,
      "official_language": "English",
      "currency": "United States Dollar"
    },
    {
      "country": "Canada",
      "capital": "Ottawa",
      "population": 37742154,
      "official_language": ["English", "French"],
      "currency": "Canadian Dollar"
    },
    {
      "country": "Brazil",
      "capital": "Brasília",
      "population": 212559417,
      "official_language": "Portuguese",
      "currency": "Brazilian Real"
    },
    {
      "country": "United Kingdom",
      "capital": "London",
      "population": 67886011,
      "official_language": "English",
      "currency": "Pound Sterling"
    },
    {
      "country": "Australia",
      "capital": "Canberra",
      "population": 25409800,
      "official_language": "English",
      "currency": "Australian Dollar"
    },
    {
      "country": "Germany",
      "capital": "Berlin",
      "population": 83783942,
      "official_language": "German",
      "currency": "Euro"
    },
    {
      "country": "France",
      "capital": "Paris",
      "population": 65273511,
      "official_language": "French",
      "currency": "Euro"
    },
    {
      "country": "Italy",
      "capital": "Rome",
      "population": 60244639,
      "official_language": "Italian",
      "currency": "Euro"
    },
    {
      "country": "Spain",
      "capital": "Madrid",
      "population": 46754778,
      "official_language": "Spanish",
      "currency": "Euro"
    },
    {
      "country": "Japan",
      "capital": "Tokyo",
      "population": 126476461,
      "official_language": "Japanese",
      "currency": "Japanese Yen"
    },
    {
      "country": "China",
      "capital": "Beijing",
      "population": 1393409038,
      "official_language": "Mandarin",
      "currency": "Renminbi"
    },
    {
      "country": "India",
      "capital": "New Delhi",
      "population": 1380004385,
      "official_language": ["Hindi", "English"],
      "currency": "Indian Rupee"
    },
    {
      "country": "South Africa",
      "capital": "Pretoria",
      "population": 59308690,
      "official_language": ["Zulu", "Xhosa", "Afrikaans", "English"],
      "currency": "South African Rand"
    },
    {
      "country": "Russia",
      "capital": "Moscow",
      "population": 145912025,
      "official_language": "Russian",
      "currency": "Russian Ruble"
    },
    {
      "country": "Mexico",
      "capital": "Mexico City",
      "population": 128932753,
      "official_language": "Spanish",
      "currency": "Mexican Peso"
    },
    {
      "country": "Argentina",
      "capital": "Buenos Aires",
      "population": 45195777,
      "official_language": "Spanish",
      "currency": "Argentine Peso"
    },
    {
      "country": "Chile",
      "capital": "Santiago",
      "population": 19116201,
      "official_language": "Spanish",
      "currency": "Chilean Peso"
    },
    {
      "country": "Colombia",
      "capital": "Bogotá",
      "population": 50882891,
      "official_language": "Spanish",
      "currency": "Colombian Peso"
    },
    {
      "country": "Peru",
      "capital": "Lima",
      "population": 32971854,
      "official_language": ["Spanish", "Quechua", "Aymara"],
      "currency": "Peruvian Sol"
    },
    {
      "country": "Egypt",
      "capital": "Cairo",
      "population": 91250000,
      "official_language": "Arabic",
      "currency": "Egyptian Pound"
    },
    {
      "country": "Turkey",
      "capital": "Ankara",
      "population": 84339067,
      "official_language": "Turkish",
      "currency": "Turkish Lira"
    },
    {
      "country": "Nigeria",
      "capital": "Abuja",
      "population": 206139589,
      "official_language": "English",
      "currency": "Nigerian Naira"
    },
    {
      "country": "Kenya",
      "capital": "Nairobi",
      "population": 53771296,
      "official_language": ["Swahili", "English"],
      "currency": "Kenyan Shilling"
    },
    {
      "country": "Ghana",
      "capital": "Accra",
      "population": 31072940,
      "official_language": "English",
      "currency": "Ghanaian Cedi"
    },
    {
      "country": "South Korea",
      "capital": "Seoul",
      "population": 51269185,
      "official_language": "Korean",
      "currency": "South Korean Won"
    },
    {
      "country": "Thailand",
      "capital": "Bangkok",
      "population": 69799978,
      "official_language": "Thai",
      "currency": "Thai Baht"
    },
    {
      "country": "Malaysia",
      "capital": "Kuala Lumpur",
      "population": 32365999,
      "official_language": "Malay",
      "currency": "Malaysian Ringgit"
    },
    {
      "country": "Vietnam",
      "capital": "Hanoi",
      "population": 97338579,
      "official_language": "Vietnamese",
      "currency": "Vietnamese Dong"
    },
    {
      "country": "Singapore",
      "capital": "Singapore",
      "population": 5850342,
      "official_language": ["English", "Mandarin", "Malay", "Tamil"],
      "currency": "Singapore Dollar"
    },
    {
      "country": "New Zealand",
      "capital": "Wellington",
      "population": 4822233,
      "official_language": ["English", "Māori"],
      "currency": "New Zealand Dollar"
    },
    {
      "country": "Sweden",
      "capital": "Stockholm",
      "population": 10099270,
      "official_language": "Swedish",
      "currency": "Swedish Krona"
    },
    {
      "country": "Norway",
      "capital": "Oslo",
      "population": 5421241,
      "official_language": "Norwegian",
      "currency": "Norwegian Krone"
    },
    {
      "country": "Finland",
      "capital": "Helsinki",
      "population": 5540720,
      "official_language": ["Finnish", "Swedish"],
      "currency": "Euro"
    },
    {
      "country": "Denmark",
      "capital": "Copenhagen",
      "population": 5792202,
      "official_language": "Danish",
      "currency": "Danish Krone"
    },
    {
      "country": "Ireland",
      "capital": "Dublin",
      "population": 4937786,
      "official_language": ["Irish", "English"],
      "currency": "Euro"
    },
    {
      "country": "Belgium",
      "capital": "Brussels",
      "population": 11589623,
      "official_language": ["Dutch", "French", "German"],
      "currency": "Euro"
    },
    {
      "country": "Netherlands",
      "capital": "Amsterdam",
      "population": 17134872,
      "official_language": "Dutch",
      "currency": "Euro"
    },
    {
      "country": "Switzerland",
      "capital": "Bern",
      "population": 8654622,
      "official_language": ["German", "French", "Italian", "Romansh"],
      "currency": "Swiss Franc"
    },
    {
      "country": "Austria",
      "capital": "Vienna",
      "population": 8917205,
      "official_language": "German",
      "currency": "Euro"
    },
    {
      "country": "Poland",
      "capital": "Warsaw",
      "population": 38386000,
      "official_language": "Polish",
      "currency": "Polish Zloty"
    }
   
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearch = (event) => {
    const userInput = event.target.value;
    setSearchTerm(userInput);

    if (userInput === '') {
      setFilteredSuggestions([]);
      setShowSuggestions(false);
    } else {
      const filtered = countriesData.filter(country =>
        country.country.toLowerCase().includes(userInput.toLowerCase()) ||
        country.capital.toLowerCase().includes(userInput.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    }
  };

  const highlightMatch = (text, searchTerm) => {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, "<strong>$1</strong>");
  };

  return (
    <div className="search-container">
     
      <input className='input'
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        onFocus={() => setShowSuggestions(searchTerm.length > 0)} 
        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        placeholder="Search countries by name or capital..."
      />
      
      
      {showSuggestions && filteredSuggestions.length > 0 && (
        <ul className="suggestions">
          {filteredSuggestions.map((suggestion, index) => (
            <p key={index} dangerouslySetInnerHTML={{ __html:` ${highlightMatch(suggestion.country, searchTerm)} - ${highlightMatch(suggestion.capital, searchTerm)}` }} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;