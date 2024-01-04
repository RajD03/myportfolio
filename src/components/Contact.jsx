import React from "react";

const Contact = () => {

    return (
        <>
            <div className="main_contact" id="contacts">
                <h1 className="_cont_heading">CONTACT ME</h1>
                <form className="sub_foot" action="https://formspree.io/f/mnqeqqwd" method="POST" >
                    <input type="name" name="name" placeholder="enter your name " className="contact_box" required  ></input>
                    <input type="email" name="email" placeholder="enter your email" className="contact_box" required ></input>
                    <input type="message" name="message" placeholder="enter your message" className="contact_box1" required></input>
                    <button type="submit" className="_submit" required >Submit</button>
                </form>
                {/* <input type="submit" className="_submit" required ></input> */}
            </div>
        </>
    );
}

export default Contact;