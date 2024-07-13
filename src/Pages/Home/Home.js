
import React, { useContext } from 'react'
import './Home.scss';
import { AppContext } from '../../Contexts/AppProvider';

const Home = () => {
    const { name } = useContext(AppContext);

    return (
        <div className='Home'>
            Home
            <h1>
                {name}
            </h1>
        </div>
    )
}

export default Home;