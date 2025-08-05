import React from "react";

const StepTwo = (props) => {
  const { data, errors, handleChange = () => {} } = props;
  const { address, city, state } = data;
  return (
    <div className="stepOne-container">
      <input
        type="text"
        name="address"
        value={address}
        onChange={(e) => handleChange(e)}
        placeholder="Address"
      />
      <span className="error-class">{errors && errors.address}</span>
      <select
        name="city"
        value={city}
        onChange={(e) => handleChange(e)}
        placeholder="City"
      >
        <option>Delhi</option>
        <option>Noida</option>
        <option>Bangalore</option>
      </select>
      <span className="error-class">{errors && errors.city}</span>
      <select
        name="state"
        value={state}
        onChange={(e) => handleChange(e)}
        placeholder="state"
      >
        <option>Delhi</option>
        <option>UP</option>
        <option>Karnataka</option>
      </select>
      <span className="error-class">{errors && errors.state}</span>
    </div>
  );
};

export default StepTwo;
