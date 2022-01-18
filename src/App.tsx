import React from 'react';
import type { FC } from 'react';
import routes, { renderRoutes } from 'src/routes';
import { BrowserRouter } from 'react-router-dom';

const App: FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </div>
  );
};

export default App;
