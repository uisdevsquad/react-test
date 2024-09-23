import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import DebugmateGlobalErrorHandler from './components/DebugmateGlobalErrorHandler';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TriggerEventError from './components/TriggerEventError';
import TriggerNetworkError from './components/TriggerNetworkError';
import TriggerPromiseRejection from './components/TriggerPromiseRejection';
import TriggerReferenceError from './components/TriggerReferenceError';
import TriggerSyntaxError from './components/TriggerSyntaxError';
import TriggerTypeError from './components/TriggerTypeError';
import App from './App';
import RangeError from './components/RangeError';
import StateMutationError from './components/StateMutationError';
import AsyncError from './components/AsyncError';
import ClickEventError from './components/ClickEventError';
import LifecycleError from './components/LifecycleError';
import UnhandledRejectionError from './components/UnhandledRejectionError';
import GenerateDivisionByZeroError from './components/GenerateDivisionByZeroError';
import GenerateUriError from './components/GenerateUriError';
import ErrorBoundary from './components/ErrorBoundary';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/uri-error",
    element: <GenerateUriError />,
  },
  {
    path: "/division-by-zero",
    element: <GenerateDivisionByZeroError />,
  },
  {
    path: "/event-error",
    element: <TriggerEventError />,
  },
  {
    path: "/network-error",
    element: <TriggerNetworkError />,
  },
  {
    path: "/promise-rejection",
    element: <TriggerPromiseRejection />,
  },
  {
    path: "/reference-error",
    element: <TriggerReferenceError />,
  },
  {
    path: "/syntax-error",
    element: <TriggerSyntaxError />,
  },
  {
    path: "/type-error",
    element: <TriggerTypeError />,
  },
  {
    path: "/state-mutation-error",
    element: <StateMutationError />,
  },
  {
    path: "async-error",
    element: <AsyncError />,
  },
  {
    path: "click-event-error",
    element: <ClickEventError />,
  },
  {
    path: "/life-cycle-error",
    element: <LifecycleError />,
  },
  {
    path: "range-error",
    element: <RangeError />,
  },
  {
    path: "unhandled-rejection-error",
    element: <UnhandledRejectionError />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <DebugmateGlobalErrorHandler >
        <RouterProvider router={router} />
      </DebugmateGlobalErrorHandler>
    </ErrorBoundary>  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
