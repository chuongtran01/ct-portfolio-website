import React from 'react';
import './Portfolio.css';
import place from '../../assets/place.png'
import space from '../../assets/space.png'
import accident from '../../assets/accident.png'

const data = [
    {
        id: 1,
        image: place,
        title: 'Place Sharing App',
        github:  "https://github.com/chuongtran01/Place-Sharing-App",
        demo: "https://learn-reactjs-udemy-seven.vercel.app/products"
    },
    {
        id: 1,
        image: space,
        title: 'Space Program API',
        github:  "https://github.com/chuongtran01/NASA-Project-API",
        demo: "https://chuongtran01.github.io/Simple-Music-Player/"
    },
    {
        id: 1,
        image: accident,
        title: 'Workplace Accident App',
        github:  "https://github.com/chuongtran01/CodeRED-Artemis-Hackathon",
        demo: "https://chuongtran01.github.io/To-do-App/"
    },
]

function Portfolio() {
    return (
        <section id="portfolio">
            <h2>Projects</h2>

            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, github, demo}) => {
                        return (
                            <article key={id} className='portfolio__item'>
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className='portfolio__item-cta'>
                                    <a href={github} className='btn2' target='_blank' rel="noopener">Github</a>
                                    {/* <a href={demo} className='btn btn-primary' target='_blank' rel="noopener">Live Demo</a> */}
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    );
}

export default Portfolio;