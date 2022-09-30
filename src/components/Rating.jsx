import React from 'react';

function Rating({ children }) {
    const rating = Math.round(parseFloat(children));
    const getStarStyle = (index => {
        return rating > index ? 'fas' : 'fal';
    })
    return (
        <div className='rating'>
        <i class={"fa-star " + getStarStyle(0)}></i>
        <i class={"fa-star " + getStarStyle(1)}></i>
        <i class={"fa-star " + getStarStyle(2)}></i>
        <i class={"fa-star " + getStarStyle(3)}></i>
        <i class={"fa-star " + getStarStyle(4)}></i>

        </div>
    );
}

export default Rating;