import React from 'react';
import ReactDOM from 'react-dom';

//Apollo / GQL
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

//redux
import ReduxStore from "./redux/store/ReduxStore";
import { Provider } from "react-redux";

// main styles
import './index.css';

// main Component
import App from "./App";


const client = new ApolloClient({});
const store = ReduxStore();

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
