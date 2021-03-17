import React from 'react';
import './error-indicator.css';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <div className="boom">BOOM! </div>
      <div>something has gone wrong</div>
      <div>(but we already on the way to fix it)</div>
    </div>
  )
}

export default ErrorIndicator;