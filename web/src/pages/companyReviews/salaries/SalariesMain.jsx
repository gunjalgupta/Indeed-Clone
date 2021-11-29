import React from 'react';
import Salaries from '../snapshot/Salaries';

function SalariesMain() {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%',
    }}
    >
      <Salaries title="Average Salaries at JCPenny" showButton />
      <p>Show Salaries by industry here</p>
      {/* Use this <SalariesByIndustry /> */}
    </div>
  );
}

export default SalariesMain;