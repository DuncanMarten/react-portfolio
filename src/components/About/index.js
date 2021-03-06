import React from "react";
import Headshot from "../../assets/photos/Duncan.jpg";

function About() {

    return (
        <section className="my-5">

            <h2>About Me</h2>

            <img src={Headshot} alt="Duncan" className="my-2"></img>

            <div className="my-2">
                <p>
                    I am a jack-of-all-trades. Throughout my life I have done a lot of different things and learned many different subjects. 
                    I have learned and worked through how to educate the public using nature as a resource and catalyst. 
                    As well as, I am in the process of learning multiple coding languages for my next life endevour of becoming a Full-Stack Web Developer. 
                    I have learned how to put my head down and finish a task when needed from my father who is the hardest working person I know.
                    When I am not learning, you can find me at local recreation areas enjoying nature either with friends or solo. 
                    I find that nature is an ally in me keeping my cool in tough situations.
                </p>
            </div>
        </section>
    )
}

export default About;