import React from 'react';
import Header from '../components/Header';
import Packages from '../components/Packages';
import Footer from '../components/Footer';

const PackagesPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Packages />
      </div>
      <Footer />
    </div>
  );
};

export default PackagesPage;