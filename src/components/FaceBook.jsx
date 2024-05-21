import React, { useState } from 'react'; // useStateを追加
import profiles from '../data/berlin.json';
import './FaceBook.css';

const FaceBook = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleFilterByCountry = (country) => {
    setSelectedCountry(country);
  };

  const clearFilter = () => {
    setSelectedCountry(null);
  };

  return (
    <div className="FaceBookContainer">
      <div className="countryButtons">
        <button onClick={clearFilter}>All</button>
        {profiles.map((profile) => (
          <button key={profile.country} onClick={() => handleFilterByCountry(profile.country)}>
            {profile.country}
          </button>
        ))}
      </div>
      {profiles.map((profile) => (
        <div
          key={profile.id}
          className={`Profile ${selectedCountry && profile.country !== selectedCountry ? 'hidden' : ''}`}
        >
          <div>
            <img src={profile.img} alt={profile.firstName} style={{ width: 100, height: 100 }} />
          </div>
          <div>
            <p>
              <b>First Name:</b> {profile.firstName}
            </p>
            <p>
              <b>Last Name:</b> {profile.lastName}
            </p>
            <p>
              <b>Country:</b> {profile.country}
            </p>
            <p>
              <b>Type:</b> {profile.isStudent ? 'Student' : 'Teacher'}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaceBook;
