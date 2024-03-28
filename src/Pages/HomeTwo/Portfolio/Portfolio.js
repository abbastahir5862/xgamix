import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <div className="portfolio__area section-padding">
            <div className="container">
                <div className="row mb-60">
                    <div className="col-xl-12">
                        <div className="portfolio__area-title lg-t-center">
                            <span className="subtitle">Portfolio</span>
                            <h2>Explore Our Creations</h2>
                        </div>
                    </div>
                </div>
                <div className="row mb-30">
                    <div className="col-xl-4 col-lg-4 lg-mb-30">
                        <div className="portfolio__area-item">
                            <div className="portfolio__area-item-image">
                                <img className="img__full" src="assets/img/portfolio/portfolio-1.jpg" alt="" />
                                <div className="portfolio__area-item-image-content">
                                    <div className="portfolio__area-item-image-content-text">
                                        <span <link to="/portfolio-details">Game Assets</span>
                                        <h4><Link to="/portfolio-details">Advertisement</Link></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-8 col-lg-8">
                        <div className="portfolio__area-item">
                            <div className="portfolio__area-item-image">
                                <img className="img__full" src="assets/img/portfolio/portfolio-2.jpg" alt="" />
                                <div className="portfolio__area-item-image-content">
                                    <div className="portfolio__area-item-image-content-text">
                                        <span>VR Events</span>
                                        <h4><Link to="/portfolio-details">Stage</Link></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-30">
                    <div className="col-xl-8 col-lg-8 lg-mb-30">
                        <div className="portfolio__area-item">
                            <div className="portfolio__area-item-image">
                                <img className="img__full" src="assets/img/portfolio/portfolio-3.jpg" alt="" />
                                <div className="portfolio__area-item-image-content">
                                    <div className="portfolio__area-item-image-content-text">
                                        <span>VR Galleries</span>
                                        <h4><Link to="/portfolio-details">NFT Art</Link></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4">
                        <div className="portfolio__area-item">
                            <div className="portfolio__area-item-image">
                                <img className="img__full" src="assets/img/portfolio/portfolio-4.jpg" alt="" />
                                <div className="portfolio__area-item-image-content">
                                    <div className="portfolio__area-item-image-content-text">
                                        <span>Game Assets</span>
                                        <h4><Link to="/portfolio-details">Low Poly</Link></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 lg-mb-30">
                        <div className="portfolio__area-item">
                            <div className="portfolio__area-item-image">
                                <img className="img__full" src="assets/img/portfolio/portfolio-5.jpg" alt="" />
                                <div className="portfolio__area-item-image-content">
                                    <div className="portfolio__area-item-image-content-text">
                                        <span>Photography5</span>
                                        <h4><Link to="/portfolio-details">Photography</Link></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="portfolio__area-item">
                            <div className="portfolio__area-item-image">
                                <img className="img__full" src="assets/img/portfolio/portfolio-6.jpg" alt="" />
                                <div className="portfolio__area-item-image-content">
                                    <div className="portfolio__area-item-image-content-text">
                                        <span>Spatial Design</span>
                                        <h4><Link to="#">Game store</Link></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
