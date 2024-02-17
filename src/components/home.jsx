import React from 'react'
import img1 from './images/my_image.jpg';
import img2 from './images/Git.jpg';
import img3 from './images/linkedin.jpg';
import img4 from './images/x.jpg';
import img5 from './images/insta.jpg';


const home = () => {
    return (
        <>
            <section className='myhome' id="home" >
                <div className="_part1" >
                    <h1>Hi, I'M D D Raj</h1>
                    <h2>I'M A WEB DESIGNER</h2>
                    <h3>“Your website is the center of your digital eco-system, like a brick and mortar location,
                        the experience matters once a customer enters, just as much as the perception they have of you before they walk through the door.”
                        ― Leland Dieno</h3>
                    <div className='_socialmedia' >
                        <a href='https://github.com/RajD03' target='blank' ><img src={img2} className='_github' /></a>
                        <a href='https://www.linkedin.com/in/d-d-raj-7a4b35247/' target='blank'><img src={img3} className='_linkedin' /></a>
                        <a href='https://twitter.com/home?lang=en' target='blank'><img src={img4} className='_twitter' /></a>
                        <a href='https://www.instagram.com/divesh_raj_03/' target='blank' ><img src={img5} className='_insta' /></a>
                    </div>
                </div>
                <div className='_part2'>
                    <img src={img1} className="raj" />
                </div>
            </section>
        </>
    )
}

export default home
