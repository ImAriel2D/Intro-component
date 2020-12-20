import React from 'react';

import ServiceDescription from './components/ServiceDescription';
import TryDescription from './components/TryDescription';
import SubmitFormContainer from './components/SubmitForm/SubmitForm.container';

import './styles/app.scss';

const App = () => (
  <div className="App">
    <div className="service">
      <ServiceDescription />
    </div>
    <div className="submit-form-container">
      <TryDescription />
      <SubmitFormContainer />
    </div>
  </div>
);

export default App;
