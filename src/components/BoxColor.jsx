import React from 'react';

function BoxColor({ r, g, b}) {
const rgbString = `rgb(${r}, ${g}, ${b})`;

    return (
        <div className="box-color" style={{backgroundColor: rgbString}}>
            <span className='box-color--color'>{rgbString}</span>
            <span className='box-color--color'>
            #{r.toString(16)}
            {g.toString(16)}
            {b.toString(16)}
            </span>
        </div>
    );
}

export default BoxColor;