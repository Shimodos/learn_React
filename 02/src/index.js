import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { Header } from './App';
import { Button } from './App';
import BootstrapTest from './BootstrtapTest';
import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';

const BigButton = styled(Button)`
  margin: 0 auto;
  width: 245px;
  text-align: center;
  /* position: relative; */
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
    <BigButton as="a">send order</BigButton>
    <BootstrapTest />
  </StrictMode>
);
