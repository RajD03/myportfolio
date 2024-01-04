import React from "react";
import img1 from './images/my_image.jpg'

const Home = () => {

    return (
        <>
            <div className="front" id="home" >
                <section className="info">
                    <h1 className="_h1" >HI, I'M D D Raj</h1>
                    <h2 className="_h2" >I'M A WEB DESIGNER</h2>
                    <h3 className="_h3" >“Your website is the center of your digital eco-system, like a brick and mortar location,
                        the experience matters once a customer enters, just as much as the perception they have of you before they walk through the door.”
                        ― Leland Dieno</h3>
                    <a href="./ima" className="_view" download="myresume" > DOWNLOAD RESUME</a>
                </section>
                <div className="my_image">
                    <img src={img1} className="raj" />
                </div>
            </div>

        </>
    );
}

export default Home;