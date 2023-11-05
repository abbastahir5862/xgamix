import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Features = () => {
    const featuresData = [
        {
            title: 'Game Design',
            description: 'Where visions turn into interactive art, crafting unforgettable adventures.'
        },
        {
            title: 'Game Development',
            description: 'In the world of game development, we bring fantasies to life, one line of code at a time.'
        },
        {
            title: 'VR REALM',
            description: 'Unlock the extraordinary in the uncharted worlds of VR, redefining reality.'
        },
    ];
    const [active, setActive] = useState(1);
    const handelActive = index => {
        setActive(index);
    };

    return (
        <div className="features__area-two">
            <div className="container-fluid px-0">
                <div className="row gx-0">
                {featuresData.map((item, index) => (
                    <div className="col-xl-4 col-lg-4" key={index}>
                        <div 
                            className={`features__area-two-item ${active === index ? 'active' : ''}`}                            
                            onMouseEnter={() => handelActive(index)}
                        >
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                            <Link className="simple-btn" to="/services-details">Discover More<i className="far fa-long-arrow-right"></i></Link>
                            <div className="features__area-two-item-user"> <img src="assets/img/user.png" alt="" /> </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;