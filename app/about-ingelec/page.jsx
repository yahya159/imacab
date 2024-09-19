// app/about-ingelec/page.jsx
import React from 'react';
import CompanyList from '../_components/CompanyList';

function AboutIngelec() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">About Ingelec Group</h1>
      <p className="text-lg leading-relaxed">
        {/* Add content about Ingelec Group here */}
        Welcome to the Ingelec Group information page. Here you can find more details about our company, mission, and products.
      </p>
     <CompanyList />   
      {/* Add more content as needed */}
    </div>
  );
}

export default AboutIngelec;
