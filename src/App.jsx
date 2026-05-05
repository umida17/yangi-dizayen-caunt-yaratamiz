import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  const updateCount = (val) => {
    setCount(prev => prev + val);
    setHistory(prev => [`${val > 0 ? 'Qo\'shildi' : 'Ayirildi'}: ${val}`, ...prev]);
  };

  return (
    <div className="dashboard-grid">
       <header className="section header">
        <h1>Dashboard Control Center</h1>
      </header>

       <section className="section stats">
        <div>Joriy qiymat: <strong>{count}</strong></div>
        <div>Harakatlar soni: <strong>{history.length}</strong></div>
      </section>

       <section className="section counter-box">
        <h3>Asosiy Hisoblagich</h3>
        <h1 style={{ fontSize: '4rem', color: '#6366f1' }}>{count}</h1>
      </section>

       <section className="section logs">
        <h3>Harakatlar tarixi</h3>
        <ul>
          {history.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </section>

       <section className="section controls">
        <button onClick={() => updateCount(-1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => updateCount(1)}>+</button>
      </section>
    </div>
  );
}

export default App;