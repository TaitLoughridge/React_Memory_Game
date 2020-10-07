
import React, { Component } from 'react';
import './MemoryCard.css';

class MemoryCard extends Component {

    constructor(props) {
        super(props)
        this.state = {isFlipped: false};
    }
    clickHandler() {
        this.setState({
            isFlipped: !this.state.isFlipped
        })
    }

    render() {
        let MemoryCardInnerClass = 'MemoryCardInner'
        if (this.props.isFlipped) {
            MemoryCardInnerClass += 'flipped'
        }
    
        return(
            <div className='MemoryCard' onClick={this.clickHandler.bind(this)}>
                <div className={MemoryCardInnerClass}>
                    <div className='MemoryCardBack'>
                        <img src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png"/>
                    </div>
                    <div className='MemoryCardFront'>▲</div>
                </div>
            </div>
        )
    }
};


export default MemoryCard;