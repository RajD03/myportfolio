import React from 'react'
import Cssimg from './images/css.jpg'
import Html5img from './images/html5.png'
import Javascriptimg from './images/javascript.png'
import Mongoimg from './images/mongo.png'
import Sagaimg from './images/saga.jpg'
import Reactimg from './images/react.png'

const skills = () => {
    return (
        <>
            <div className='_skill' id='about'>
                <h1>Skills🛠️</h1>
                <div className='skill_img'>
                    <img src={Cssimg} className='_icss' />
                    <img src={Html5img} className='_ihtml' />
                    <img src={Javascriptimg} className='_ijs' />
                    <img src={Mongoimg} className='_imongo' />
                    <img src={Sagaimg} className='_isaga' />
                    <img src={Reactimg} className='_ireact' />
                </div>
            </div>
        </>
    )
}

export default skills