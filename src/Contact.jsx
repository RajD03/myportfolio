import React from "react";

const Contact = () => {
    return(
        <>
            <div className="_cont" >
                <h1>Contact</h1>
            </div>
            <div id="_foot">
                <div>
                    <input type="name" placeholder="Enter Your Name " className="_iname" required ></input>
                    <input type="name" placeholder="Enter Your Email " className="_iname" required ></input>
                    <input type="name" placeholder="Enter Your Phone Number " className="_lastname" required></input>
                </div>
                <input type="message" placeholder="Enter Your Message" className="_imsg" required></input>
                <input type="submit" value={"     Submit"} className="_submit" ></input>
            </div>
        </>
    );
}

export default Contact;