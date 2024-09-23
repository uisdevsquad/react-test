import React from 'react';
import { Link } from 'react-router-dom';

const App = () => {
  const errorLinks = [
    { route: '/uri-error', name: 'URIError' },
    { route: '/division-by-zero', name: 'Division by Zero' },
    { route: '/event-error', name: 'Event Error' },
    { route: '/network-error', name: 'Network Error' },
    { route: '/promise-rejection', name: 'Promise Rejection' },
    { route: '/reference-error', name: 'ReferenceError' },
    { route: '/syntax-error', name: 'SyntaxError' },
    { route: '/type-error', name: 'TypeError' },
    { route: '/state-mutation-error', name: 'State Mutation Error' },
    { route: '/async-error', name: 'AsyncError' },
    { route: '/click-event-error', name: 'Click Event Error' },
    { route: '/life-cycle-error', name: 'Lifecycle Error' },
    { route: '/range-error', name: 'RangeError' },
    { route: '/unhandled-rejection-error', name: 'Unhandled Rejection Error - not working' },
  ];

  return (
    <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50 relative min-h-screen flex flex-col items-center justify-center">
      <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
          <div className="flex lg:justify-center lg:col-start-2">
            <img src="https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png" className="h-12 w-auto text-white lg:h-16 lg:text-[#FF2D20]" alt="" />
          </div>
        </header>

        <main className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {errorLinks.map((link, index) => (
              <Link
                key={index}
                to={link.route}
                className="inline-flex w-full items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="w-full">{link.name}</span>
                <svg
                  className="w-4 h-4 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </main>

        <footer className="py-16 text-center text-sm text-black dark:text-white/70 space-y-4">
          <p>DebugMate Domain: {process.env.REACT_APP_DEBUGMATE_DOMAIN} | Token: {process.env.REACT_APP_DEBUGMATE_TOKEN}</p>
        </footer>
      </div>
    </div>
  );
};

export default App;