import React from 'react'
import rec_image1 from './images/image1.png'

const About = () => {
    return (
        <>
            <div className='main_about' id='about'>
                <div className='my_about'>
                    <h1 className='_about2'>ABOUT ME</h1>
                    <p className="about3"  >
                        As a devoted frontend developer, I specialize in crafting diverse websites, seamlessly integrating creativity
                        interfaces. Each website is a unique journey through different concepts, showcasing my proficiency in various programming languages. Join me on this digital odyssey, where my love for frontend development unfolds in five lines of innovation and expertise.
                    </p>
                    <div className='about_sudiv'>
                        <div className='design_div'>
                            <h1 className='design_heading' >DESIGN</h1>
                            <p className='design_para'>As an enthusiastic front-end developer, I possess a keen eye for transforming concepts into visually stunning user interfaces.
                                Mastery of design principles allows me to craft pixel-perfect, intuitive layouts.</p>
                        </div>
                        <div className='rec_image' >
                            <img src={rec_image1} className='rec_1' ></img>
                        </div>
                        <div className='develop_div' >
                            <h2 className='develop_heading' >DEVELOPMENT</h2>
                            <p className='develop_para' >Fueled by a passion for coding, I bring designs to life with dynamic web applications. Proficient in HTML, CSS, and JavaScript,ReactJs
                                I implement interactive features, optimizing performance for cutting-edge solutions.</p>
                        </div>
                        <div className='maintain__div'>
                            <h3 className='maintain_heading' >MAINTAINANCE</h3>
                            <p className='maintain_para' >Dedicated to project health, I handle maintenance tasks with meticulous attention. Addressing issues promptly,
                                enhancing security, and optimizing performance, I ensure a seamless and reliable user experience for sustained success.</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default About
