import React from 'react'
import './quotes.css'
import { useState } from 'react';

const Quote = () => {

    const [quote, setQuote] = useState({
        text: 'Hello my name is eric',
        author: ' Eric'
    });

    return (
        <div className='container'>
            <div className="quote">{quote.text}</div>

        </div>
    )
}

export default Quote