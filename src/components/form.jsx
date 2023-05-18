import React, { useState } from 'react';

const CarSellForm = () => {
  const [carData, setCarData] = useState({
    carMake: '',
    carModel: '',
    year: '',
    mileage: '',
    condition: '',
    features: [],
    transmission: '',
    priceRange: '',
    contactNumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCarData({ ...carData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let updatedFeatures = [...carData.features];

    if (checked) {
      updatedFeatures.push(value);
    } else {
      updatedFeatures = updatedFeatures.filter((feature) => feature !== value);
    }

    setCarData({ ...carData, features: updatedFeatures });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(carData);
  };

  return (
    <div className="car-sell-app">
    <div className="car-sell-app-form">
      <h2>Car Selling Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Car Make:
          <input
            type="text"
            name="carMake"
            value={carData.carMake}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Car Model:
          <input
            type="text"
            name="carModel"
            value={carData.carModel}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Year:
          <input
            type="date"
            name="year"
            value={carData.year}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Mileage(km):
          <input
            type="number"
            name="mileage"
            value={carData.mileage}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Condition:
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="condition"
                value="Excellent"
                checked={carData.condition === 'Excellent'}
                onChange={handleInputChange}
                required
              />
              Excellent
            </label>
            <label>
              <input
                type="radio"
                name="condition"
                value="Good"
                checked={carData.condition === 'Good'}
                onChange={handleInputChange}
                required
              />
              Good
            </label>
            <label>
              <input
                type="radio"
                name="condition"
                value="Fair"
                checked={carData.condition === 'Fair'}
                onChange={handleInputChange}
                required
              />
              Fair
            </label>
            <label>
              <input
                type="radio"
                name="condition"
                value="Poor"
                checked={carData.condition === 'Poor'}
                onChange={handleInputChange}
                required
              />
              Poor
            </label>
          </div>
        </label>
        <label>
          Features:
          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="features"
                value="Air Conditioning"
                checked={carData.features.includes('Air Conditioning')}
                onChange={handleCheckboxChange}
              />
              Air Conditioning
            </label>
            <label>
              <input
                type="checkbox"
                name="features"
                value="Power Steering"
                checked={carData.features.includes('Power Steering')}
                onChange={handleCheckboxChange}
              />
              Power Steering
            </label>
            <label>
              <input
                type="checkbox"
                name="features"
                value="Power Windows"
                checked={carData.features.includes('Power Windows')}
                onChange={handleCheckboxChange}
              />
              Power Windows
            </label>
            <label>
              <input
                type="checkbox"
                name="features"
                value="ABS"
                checked={carData.features.includes('ABS')}
                onChange={handleCheckboxChange}
              />
              ABS
            </label>
            <label>
              <input
                type="checkbox"
                name="features"
                value="Navigation System"
                checked={carData.features.includes('Navigation System')}
                onChange={handleCheckboxChange}
              />
              Navigation System
            </label>
          </div>
        </label>
        <label>
          Transmission:
          <select
            name="transmission"
            value={carData.transmission}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Transmission</option>
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>
        </label>
        <label>
          Price Range($):
          <input
            type="range"
            name="priceRange"
            min="0"
            max="100000"
            step="1000"
            value={carData.priceRange}
            onChange={handleInputChange}
          />
          <span>{carData.priceRange}</span>
        </label>
        <label>
          Contact Number:
          <input
            type="text"
            name="contactNumber"
            value={carData.contactNumber}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default CarSellForm;
