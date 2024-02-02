import React, { useState }  from "react";
import img2 from './images/github_logo.jpg';
import img3 from './images/linkedin_logo.jpg';
const currTime = new Date().toLocaleTimeString();
const currDate = new Date().toLocaleDateString();

const Nav = () => {
    let time = new Date().toLocaleTimeString('en-US', { hour12: true });
    
    const [ctime, setCtime] = useState(time);
    const UpdateTime = () =>{
        time = new Date().toLocaleTimeString('en-US', { hour12: true });
        setCtime(time);
    };
    setInterval(UpdateTime,1000);

    return (
        <nav className="nav_bar">
            <a href="#" className="_home" >Home</a>
            <a href="#" className="_project" >Projects </a>
            <a href="#" className="_about" >About </a>
            <a href="#" className="_contact" >Contacts</a>
            <a href="#" >|</a>
            <a href="https://www.instagram.com/divesh_raj_03/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="#F8F7F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5932 15.1514 13.8416 15.5297C13.0901 15.9079 12.2385 16.0396 11.4078 15.9059C10.5771 15.7723 9.80977 15.3801 9.21485 14.7852C8.61993
             14.1902 8.22774 13.4229 8.09408 12.5922C7.96042 11.7615 8.09208 10.9099 8.47034 10.1584C8.8486 9.40685 9.4542 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717
              9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" stroke="#F8F7F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.5 6.5H17.51" stroke="#F8F7F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></a>
            <a href="https://twitter.com/Divesh59836383" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
                <path d="M23 1.99998C22.0424 2.67546 20.9821 3.19209 19.86 3.52999C19.2577 2.8375 18.4573 2.34668 17.567 2.12391C16.6767 1.90115 15.7395 1.95718 14.8821 2.28444C14.0247 2.6117 13.2884 3.19439 12.773 3.9537C12.2575 4.71302 11.9877 5.61232 12 6.52998V7.52998C10.2426 7.57555 8.50127 7.1858 6.93101 6.39543C5.36074 5.60506 4.01032 4.43862 3 2.99998C3 2.99998 -1 12 8 16C5.94053 17.398 3.48716 18.0989 1 18C10 23 21 18 21 6.49998C20.9991 6.22144 20.9723 5.94358 20.92 5.66999C21.9406 4.66348 22.6608 3.3927 23 1.99998V1.99998Z" stroke="#F8F7F9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg></a>
            {/* <a href="" className="_img2" > <img src={img2} /> </a>         
            <a href="" className="_img3"> <img src={img3} /> </a>         
             */}
            <h1 className="_date" >Date:- {currDate} {time} </h1>
        </nav>
    );
}

export default Nav;