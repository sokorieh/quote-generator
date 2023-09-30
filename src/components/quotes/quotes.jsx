import React, { useState } from 'react';
import './quotes.css';
import reload_icon from '../assets/reload.png';
import x_icon from '../assets/x-mark.png';

const Quote = () => {

    const [quote, setQuote] = useState({
        text: "Preoccupied with a single leaf... you won't see the tree. Preoccupied with a single tree... you'll miss the entire forest.",
        author: 'Vagabond'
    });

    return (
        <div className='container'>
            <div className="quote">{quote.text}</div>
            <div>
                <div className='line'></div>
                <div className='bottom'>
                    <div className='author'>{quote.author}</div>
                    <div className="icons">
                        <img src={reload_icon} alt='reload'></img>
                        <img src={x_icon} alt='x'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quote