import React from 'react';
import Header from '../components/Header';
import MenuDrawer from '../components/MenuDrawer';
import PersonalCabinet from '../components/PersonalCabinet';
import BottomNavigation from '../components/BottomNavigation';

const CabinetPage = () => {
  return (
    <div>
      <Header />
      <MenuDrawer />
      <PersonalCabinet />
      <BottomNavigation />
    </div>
  );
};

export default CabinetPage;
