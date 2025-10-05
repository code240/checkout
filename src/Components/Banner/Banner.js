import React from 'react';
import './Banner.scss';

const Banner = () => {

    if (true) {
        return (
            <div className='skeleton Banner_skeleton'></div>
        )
    }
    return (
        <div className='Banner quicksand'>
            You will save 30% on prepaid order.
        </div>
    )
}

export default Banner