import React, { FunctionComponent } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import S from "./App.styled";
import AppRouter from "./components/AppRouter/AppRouter";
import ToastsDisplay from "./components/shared/ToastsDisplay/ToastsDisplay";
import "./services/axios.service";
import store from "./store/store";

const App: FunctionComponent = () => (
  <>
    <S.GlobalStyle />
    <BrowserRouter>
      <S.Container>
        <Provider store={store}>
          <AppRouter />

          <ToastsDisplay />
        </Provider>
      </S.Container>
    </BrowserRouter>
  </>
);

export default App;
