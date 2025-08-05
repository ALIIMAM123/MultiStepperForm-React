const StepOne = (props) => {
  const { data, errors, handleChange = () => {} } = props;
  const { personName, email, age } = data;
  return (
    <div className="stepOne-container">
      <input
        type="text"
        name="personName"
        value={personName}
        onChange={(e) => handleChange(e)}
        placeholder="Person Name"
      />
      <span className="error-class">{errors && errors.personName}</span>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => handleChange(e)}
        placeholder="Email"
      />
      <span className="error-class">{errors && errors.email}</span>
      <input
        type="number"
        name="age"
        value={age}
        onChange={(e) => handleChange(e)}
        placeholder="Age"
      />
      <span className="error-class">{errors && errors.age}</span>
    </div>
  );
};

export default StepOne;
