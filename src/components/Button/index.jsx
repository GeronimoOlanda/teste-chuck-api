import React from 'react';
import { Button } from '@material-ui/core';

import './index.css';

export const Buttonn = () => {
  return (
    <div className="btn">
      <Button
        title="Recarregar Citação"
        onClick={() => window.location.reload(false)}
        variant="outlined"
        color="primary"
        href="#outlined-buttons"
      >
        EXIBIR OUTRA CITAÇÃO
      </Button>
    </div>
  );
};
