import React from "react";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Provider, useDispatch } from "react-redux";
import store from "../redux/store";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
}

export default MyApp;
