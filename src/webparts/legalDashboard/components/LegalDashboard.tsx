import * as React from 'react';
import { ILegalDashboardProps } from './ILegalDashboardProps';
import App from './App';

const LegalDashboard: React.FC<ILegalDashboardProps> = (props) => {
  return (
    <div>
      <App />
    </div>
  );
};

export default LegalDashboard;