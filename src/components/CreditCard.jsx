import React from 'react';

class CreditCard extends React.Component {
  render() {
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = this.props;

    // クレジットカード番号の最後の4桁を表示する
    const last4Digits = number.slice(-4);

    return (
      <div className="CreditCard" style={{ backgroundColor: bgColor, color: color }}>
        <div>Type: {type}</div>
        <div>Number: **** **** **** {last4Digits}</div>
        <div>Expires: {expirationMonth}/{expirationYear}</div>
        <div>Bank: {bank}</div>
        <div>Owner: {owner}</div>
      </div>
    );
  }
}

export default CreditCard;
