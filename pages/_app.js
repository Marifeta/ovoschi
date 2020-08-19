import 'react-multi-carousel/lib/styles.css';
import '../global.css';
import Head from "next/head";
import GlobalState from './state';
import React, { useState } from 'react';


export default function MyApp({ Component, pageProps }) {
  // JSON.parse(localStorage.getItem('store')) ||
  const initialState = {
    cart: {},
  };
  const [state, setState] = useState(initialState);

  const addToCart = (itemId) => {
    const newState = {
      ...state,
      cart: {
        ...state.cart,
        [itemId]: state.cart[itemId] ? state.cart[itemId] + 1 : 1
      },
    };
    setState(newState);
    localStorage.setItem('store', JSON.stringify(newState));
  };
  const decrementItem = (itemId) => {
    if (typeof state.cart[itemId] !== 'undefined') {
      const newState = {
        ...state,
        cart: {
          ...state.cart,
          [itemId]: state.cart[itemId] - 1,
        },
      };
      if (!newState.cart[itemId]) {
        delete newState.cart[itemId];
      }
      setState(newState);
      localStorage.setItem('store', JSON.stringify(newState));
    }
  };
  const removeItem = (itemId) => {
    if (typeof state.cart[itemId] !== 'undefined') {
      const newState = {
        ...state,
        cart: {
          ...state.cart,
          [itemId]: state.cart[itemId] - state.cart[itemId],
        },
      };
      if (!newState.cart[itemId]) {
        delete newState.cart[itemId];
      }
      setState(newState);
      localStorage.setItem('store', JSON.stringify(newState));
    }
  };

  const quant = Object.keys(state.cart).reduce((a, b) => {
    return a + state.cart[b]
  }, 0);

  return (
    <>
      <GlobalState.Provider value={{state, addToCart, removeItem, decrementItem, quant}}>

      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Bangers|Exo+2:300,400,500|Material+Icons&display=swap" />
      </Head>
      <Component {...pageProps} />
      </GlobalState.Provider>
    </>
  )
}