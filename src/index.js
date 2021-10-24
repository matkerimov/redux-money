import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {Provider} from "react-redux";
// import {store} from "./redux/store";



ReactDOM.render(
  <React.StrictMode>
      <LocalizationProvider dateAdapter={AdapterDateFns}>

      {/*<Provider store={store}>*/}
    <App />
      {/*</Provider>*/}
      </LocalizationProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

