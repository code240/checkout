import React, { useContext } from 'react';
import './Banner.scss';
import { BasicContext } from '../../Contexts/BasicDataProvider';

const Banner = () => {
    const { installedApps } = useContext(BasicContext);

    if (!installedApps || installedApps?.length == 0) {
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