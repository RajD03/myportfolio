import React from 'react'
import img1 from './images/my_image.jpg';

const home = () => {
    return (
        <>
            <section className='myhome'>
                <div className="_part1" id="home" >
                    <h1>HI, I'M D D Raj</h1>
                    <h2>I'M A WEB DESIGNER</h2>
                    <h3>“Your website is the center of your digital eco-system, like a brick and mortar location,
                        the experience matters once a customer enters, just as much as the perception they have of you before they walk through the door.”
                        ― Leland Dieno</h3>
                </div>
                <div className='_part2'>
                    <img src={img1} className="raj" />
                </div>
            </section>
        </>
    )
}

export default home
