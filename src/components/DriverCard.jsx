import React from 'react';
import Rating from './Rating';

function DriverCard({
    name,
    rating,
    img,
    car
}) {
    return (
        <div className='driver-card'>
        <img src={img} alt="" className='driver-card--image' />
        <div className='driver-card--info'>
            <span className='driver-card--name'>{name}</span>
            <span className='driver-card--rating'>
                <Rating>{rating}</Rating>
            </span>
            <span className='driver-card--car'>
                {car.model} - {car.licensePlate}
            </span>
        </div>
            
        </div>
    );
}

export default DriverCard;