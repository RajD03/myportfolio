import React from 'react'
import img1 from './images/Vector 1.png';
import img2 from './images/Vector 2.png';
import img3 from './images/Vector 3.png';
import img4 from './images/Vector 4.png';
import Git from './images/Git.jpg'
import Uparrow from '@mui/icons-material/KeyboardDoubleArrowUp';
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className='main_foot'>
                <div className='sub_div'>
                    <a href='#contacts' ><img src={img1} ></img></a>
                    <a href='https://www.instagram.com/divesh_raj_03/'><img src={img2} ></img></a>
                    <a href='https://www.linkedin.com/in/d-d-raj-7a4b35247/' ><img src={img3} ></img></a>
                    <a href='https://www.instagram.com/divesh_raj_03/' ><img src={img4} ></img></a>
                    <a href='https://github.com/RajD03' ><img src={Git} className='git_logo' ></img></a>
                </div>
                <div className='foot_content'>
                    <NavLink exact to='/termsandcondition' className='_terms' ># Terms and Conditions</NavLink>
                    <NavLink exact to='/privacypolicy' className='_privacy'># Privacy Policy</NavLink>
                    <h3 className='foot_text'>Design with love © D D Raj 2023. All right reserved</h3>
                </div>
                <div className='nav_foot' >
                    <a href='#home' > <Uparrow /> </a>
                    <a href='#home'> BACK TO TOP </a>
                </div>
            </div>
        </>
    )
}

export default Footer