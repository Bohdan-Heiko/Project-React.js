import React from 'react';
import Profile from './Profile';

const Player = (props) => (
        <div>
            <h1 className='header, title-h'>{props.label}</h1>
            <h3 className='tittle-score' style={{ textAlign: 'center' }}>Score: {props.score}</h3>
            <Profile profile={props.profile} />
        </div>
    )

export default Player;