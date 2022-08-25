import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderSection from './components/Header/Header';
import TitleSection from './components/Title/Title';
import TabsSection from './components/Tabs/Tabs';
import SortingSection from './components/Sorting/Sorting';
import CardsSection from './components/CardsSection/CardsSection';

function App() {
  return (
    <>
      <HeaderSection />
      <TitleSection />
      <TabsSection />
      <SortingSection />
      <CardsSection />
    </>
  );
}

export default App;
