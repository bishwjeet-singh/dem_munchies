import React from 'react';
import  phoneImg from './images/sidepic.jpg';
import { useGlobalContext } from './context';

const Hero = () => {
    const {closeSubmenu } = useGlobalContext();
    return (
        <section className = 'hero' onMouseOver ={closeSubmenu}>
            <div className='hero-center'>
                <article className='hero-info'>
                    <h1>
                    "First we eat,<br />
                     then we do everything else"
                    </h1>
                    <p>
                    We would love your feedback, please contact us using the "Let's keep in touch" page and we would love some criticism. 

                    </p>
                    <button className ='btn'>Lets Eat</button>
                </article>
                <article className='hero-images'>
                    <img src={phoneImg} className ='phone-img' alt='phone0' />
                </article>
            </div>
        </section>
    );
};
export default Hero;