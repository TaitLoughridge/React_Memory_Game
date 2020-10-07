
import React, { component } from 'react';
import './MemoryCard.css';

function MemoryCard(props) {
    return(
        <div className='MemoryCard'>
            <div className='MemoryCardInner'>
                <div className='MemoryCardBack'>
                    <img src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png"/>
                </div>
                <div className='MemoryCardFront'>▲</div>
            </div>
        </div>
    )
};


export default MemoryCard;