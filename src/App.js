import React, { useState, useEffect } from "react";
import "./App.css";

import StepOne from "./Stepone";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

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

  const validationRules = {
    personName: (value) => (value.trim() == "" ? "Please Enter Name" : ""),
    email: (value) =>
      value.trim() == ""
        ? "Please Enter Email"
        : /^[a-zA-Z0-9_.+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(value)
        ? ""
        : "Please Enter a Valid Email",
    age: (value) => (value.trim() < 18 ? "Please Enter Valid Age" : ""),
    address: (value) => (value.trim() !== "" ? "" : "Please Enter Address"),
    city: (value) => (value.trim() !== "" ? "" : "Please Enter City"),
    state: (value) => (value.trim() !== "" ? "" : "Please Enter State"),
    feedback: (value) => (value.trim() !== "" ? "" : "Please Enter Feedback"),
    rating: (value) => (value.trim() !== "" ? "" : "Please Enter Rating"),
    suggestion: (value) =>
      value.trim() !== "" ? "" : "Please Enter Suggestion",
  };

  const handleValidation = (fields) => {
    const err = {};
    fields.forEach((field) => {
      let value = data[field];
      let rule = validationRules[field];
      const result = rule?.(value);
      if (result) {
        err[field] = result;
      }
    });
    setErrors(err);
    return Object.keys(err).length == 0;
  };

  const handleNext = () => {
    // const stepsToSkipValidation = [2];
    // if (stepsToSkipValidation.includes(stepNo)) {
    //   setStepNo((prev) => prev + 1);
    //   return;
    // }

    const currentStepField = stepsField[stepNo];
    const isValid = handleValidation(currentStepField);
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
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = () => {
    // console.log(data, "resultt");
    const currentStepField = stepsField[stepNo];
    const isValid = handleValidation(currentStepField);
    if (isValid) {
      console.log(data, "data");
    }
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
