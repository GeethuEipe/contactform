import React, { useEffect, useState } from 'react';

import Validation from './Validation';

const FormSignup = ({ submitForm }) => {
  const [values, setValues] = useState({
    fullname: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    setDataIsCorrect(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      submitForm(true);
    }
  }, [errors]);
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Contact Form</h2>
        </div>
        <form className="form-wrapper">
          <div className="name">
            <label className="label">User Name</label>
            <input
              className="input"
              type="text"
              name="fullname"
              value={values.fullname}
              onChange={handleChange}
            />
            {errors.fullname && <p className="error">{errors.fullname}</p>}
          </div>
          <div className="email">
            <label className="label">Email</label>
            <input
              className="input"
              type="email"
              name="email"
              values={values.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="password">
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              name="password"
              values={values.password}
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <div className="password">
            <label className="label">Confirm Password</label>
            <input
              className="input"
              type="password"
              name="password2"
              value={values.password2}
              onChange={handleChange}
            />
            {errors.password2 && <p className="error">{errors.password2}</p>}
          </div>

          <div>
            <button className="submit" onClick={handleFormSubmit}>
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const FormSuccess = () => {
  return (
    <div className="container">
      <div className="app-wrapper">
        <h1 className="form-success">Submit Successfully</h1>
      </div>
    </div>
  );
};
export default FormSignup;
