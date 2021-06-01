import React from 'react';
import SubmitFormComponent from './SubmitForm.component';

const SubmitFormContainer = () => {
  const submit = (e) => {
    e.preventDefault();
    // const formData = {
    //   name: e.target.name.value,
    //   lastName: e.target.lastName.value,
    //   email: e.target.email.value,
    //   password: e.target.password.value,
    // };
  };

  return (
    <SubmitFormComponent submit={submit} />
  );
};

export default SubmitFormContainer;
