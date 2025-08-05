import React, { useState, useEffect } from "react";
import "./App.css";

import StepOne from "./Stepone";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
// import useStepper from "./hooks";

const initialData = {
  personName: "",
  email: "",
  age: "",
  address: "",
  city: "",
  state: "",
  feedback: "",
  rating: "",
  suggestion: "",
};

const App = () => {
  const [stepNo, setStepNo] = useState(1);
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState({});

  const stepObj = {
    1: StepOne,
    2: StepTwo,
    3: StepThree,
  };

  const stepsField = {
    1: ["personName", "email", "age"],
    2: ["address", "city", "state"],
    3: ["feedback", "rating", "suggestion"],
  };

  const handleValidation = (fields) => {
    const err = {};
    fields.forEach((field) => {
      let name = field;
      let value = data[field];
      if (name == "personName") {
        if (value == "" || value == undefined) {
          err[field] = "Person name is required !";
        }
      } else if (name == "email") {
        const regex = /^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
        if (value == "" || value == undefined || !regex.test(value)) {
          err[field] = "Email is required !";
        }
      } else if (name == "age") {
        if (value == "" || value == undefined) {
          err[field] = "Age is required !";
        }
      } else if (name == "address") {
        if (value == "" || value == undefined) {
          err[field] = "Address is required !";
        }
      } else if (name == "city") {
        if (value == "" || value == undefined) {
          err[field] = "City is required !";
        }
      } else if (name == "state") {
        if (value == "" || value == undefined) {
          err[field] = "State is required !";
        }
      } else if (name == "feedback") {
        if (value == "" || value == undefined) {
          err[field] = "State is required !";
        }
      } else if (name == "rating") {
        if (value == "" || value == undefined) {
          err[field] = "State is required !";
        }
      } else if (name == "suggestion") {
        if (value == "" || value == undefined) {
          err[field] = "State is required !";
        }
      }
    });
    setErrors(err);
    return Object.keys(err).length == 0;
  };

  const handleNext = () => {
    const stepsToSkipValidation = [2];

    if (stepsToSkipValidation.includes(stepNo)) {
      setStepNo((prev) => prev + 1);
      return;
    }

    const currentStepField = stepsField[stepNo];
    const isValid = handleValidation(currentStepField);
    console.log("isValid", isValid);
    if (isValid) {
      setStepNo((prev) => {
        if (prev >= 3) {
          return prev;
        }
        return prev + 1;
      });
    }
  };

  const handleBack = () => {
    if (stepNo == 3) {
      const confirmBack = window.confirm(
        "Are you sure  want to go back to step 2"
      );
      if (!confirmBack) return;
    }

    setStepNo((prev) => {
      if (prev <= 1) {
        return prev;
      }
      return prev - 1;
    });
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log(data, "resultt");
  };

  const Step = stepObj[stepNo];
  return (
    <div className="multistep-wrapper">
      <Step data={data} handleChange={handleChange} errors={errors} />
      <div className="btn-container">
        <button onClick={handleBack}>Prev</button>
        {stepNo == 3 ? (
          <button onClick={handleSubmit}>Submit</button>
        ) : (
          <button onClick={handleNext}>Next</button>
        )}
      </div>
    </div>
  );
};

export default App;
