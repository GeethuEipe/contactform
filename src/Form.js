import React, { useState } from 'react';

import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

const Form = () => {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);
  const submitForm = () => {
    setFormIsSubmitted(true);
  };
  return (
    <div>
      {!formIsSubmitted ? (
        <FormSignup submitForm={submitForm} />
      ) : (
        <FormSuccess />
      )}
    </div>
  );
};
export default Form;
