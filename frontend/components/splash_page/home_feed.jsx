import React from 'react';
import {Link} from 'react-router-dom';

const homeFeed = () => (
    <div className='splash-wrapper'>
        <div className='splash-nav-wrapper'>
            <h3 id='github'><a href='https://github.com/jonathan-calixto/participation-tracker' target='_blank'>Github</a></h3>
            <h3 id='title'>ClassroomCounts</h3>
            <Link className='login signup' to='/signup/'>Sign Up</Link>
        </div>

        <div className='splash-img'>
            <div className='splash-textbox'>
                <h1 className='splash-header'>Classroom Counts</h1>
                <h3>The best student participation tracking app you'll ever use</h3>
                <div className='splash-button-wrapper'> 
                    <Link className='login' to='/login/'>Log In</Link>
                </div>
            </div>
        </div>
    </div>
)

export default homeFeed;