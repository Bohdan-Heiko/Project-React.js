import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => (
    <div className='home-container'>
        <h1 className='title'>GitHun Battle: Battle your friends... and stuff</h1>
        <Link className='button' to='/battle'>Battle</Link>
    </div>
)