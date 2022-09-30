import React from 'react';

function IdCard({ picture, firstName, lastName, gender, birth, height }) {
    return (
        <div className='id-card'>
            <img className='id-card--picture' src={picture} alt=""/>
            <div className='id-card--properties'>

                <span className='id-card--property'>
                    <span className='id-card--property-name'>First name: </span> {firstName}
                </span>
                <span className='id-card--property'>
                    <span className='id-card--property-name'>lastName: </span> {lastName}
                </span>
                <span className='id-card--property'>
                    <span className='id-card--property-name'>Gender: </span>  {gender}
                </span>
                <span className='id-card--property'>
                    <span className='id-card--property-name'>Height: </span> {height}
                </span>
                <span className='id-card--property'>
                    <span className='id-card--property-name'>Birth: </span> {''}
                    {birth.toLocaleDateString()}
                </span>

            </div>
        </div>
    );
}

export default IdCard;