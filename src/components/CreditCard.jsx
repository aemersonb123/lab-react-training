import React from 'react';
import visaLogo from '../assets/images/visa.png';
import mastercardLogo from '../assets/images/mastercard.png';

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  return (
    <div className="credit-card" style={{ backgroundColor: bgColor, color }}>
    <div className='credit-ccard--logo-container'>
     <img
     src={type === 'Visa' ? visaLogo : mastercardLogo}
     className="credit-card--logo"
     alt={type + " logo"}
     />
     </div>
      <span className="credit-card--number">{"**** **** **** " + number.slice(12)}</span>
      <div className="credit-card--info">
        <div className='credit-card--info-left'>
          <span className="credit-card--expiration">
            Expires {expirationMonth}/{expirationYear}
          </span>
          <span className="credit-card--name">{owner}</span>
        </div>
        <span className="credit-card--bank">{bank}</span>
      </div>
    </div>
  );
}

export default CreditCard;