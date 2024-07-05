import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.tsx';
import MainPage from './pages/MainPage.tsx';
import StatisticsPage from './pages/StatisticsPage.tsx';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route
          index
          element={<MainPage />}
        />
        <Route
          path="/statistics"
          element={<StatisticsPage />}
        />
      </Routes>
    </MainLayout>
  );
}

export default App;
