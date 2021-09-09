import React from 'react';
import './index.css';
export const Button = () => {
  return (
    <div className="btn">
      <button onClick={() => window.location.reload(false)}>EXIBIR OUTRA CITAÇÃO</button>
    </div>
  );
};
