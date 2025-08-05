import React from "react";

const StepThree = ({ feedback, rating, suggestion, handleChange, errors }) => {
  return (
    <div className="stepOne-container">
      <input
        type="text"
        name="feedback"
        value={feedback}
        onChange={handleChange}
        placeholder="feedback"
      />
      <span className="error-class">{errors && errors.feedback}</span>
      <input
        type="text"
        name="rating"
        value={rating}
        onChange={handleChange}
        placeholder="rating"
      />
      <span className="error-class">{errors && errors.rating}</span>
      <input
        type="number"
        name="suggestion"
        value={suggestion}
        onChange={handleChange}
        placeholder="suggestion"
      />
      <span className="error-class">{errors && errors.feedback}</span>
    </div>
  );
};

export default StepThree;
