

import React from 'react';
import Counter from './Counter';
import InfoCard from './InfoCard';
import './App.css';

function App() {
  return (
    <div className="dashboard-container">
      {/* 1-blok: Hisoblagich */}
      <Counter />

      {/* 2-5 bloklar: Qo'shimcha ma'lumotlar */}
      <InfoCard title="Loyihalar" description="Jami 12 ta tugallangan ishlar." />
      <InfoCard title="Skillset" description="React, Next.js, Tailwind, TypeScript." />
      <InfoCard title="Tajriba" description="1 yillik professional tajriba." />
      <InfoCard title="Status" description="Yangi imkoniyatlarga ochiqman." />
    </div>
  );
}

export default App;