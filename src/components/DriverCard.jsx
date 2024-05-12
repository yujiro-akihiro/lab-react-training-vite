import React from 'react';

function DriverCard(props) {
    const { name, rating, img, car } = props;

    return (
        <div className="driverCard">
            <img src={img} alt={name} />
            <div>
                <h2>{name}</h2>
                <p>{rating} stars</p>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    );
}

export default DriverCard;
