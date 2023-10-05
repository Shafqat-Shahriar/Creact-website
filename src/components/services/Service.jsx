import React from 'react'
import './service.css'
import image1 from '../../assets/zig-zag3.webp'
import image2 from '../../assets/zig-zag3.webp'
import image3 from '../../assets/zig-zag3.webp'
import image4 from '../../assets/zig-zag3.webp'
import image5 from '../../assets/zig-zag3.webp'
import image6 from '../../assets/zig-zag3.webp'
import go from '../../assets/srv.jpg'

const Service = () => {
  return (
    <section className="Rhero">
            <h1>Our Services</h1>
            <p>We offer a wide range of services to meet your needs.</p>

            <div className="son">
                <div className="service-item">
                    <i className="service-icon"></i>
                    <h2>Service 1</h2>
                    <p>Description of Service 1</p>
                </div>

                <div className="service-item">
                    <i className="service-icon"></i>
                    <h2>Service 2</h2>
                    <p>Description of Service 2</p>
                </div>

                <div className="service-item">
                    <i className="service-icon"></i>
                    <h2>Service 3</h2>
                    <p>Description of Service 3</p>
                </div>

                <div className="service-item">
                    <i className="service-icon"></i>
                    <h2>Service 4</h2>
                    <p>Description of Service 4<br/>fhewhfoewfwfoiwfhow<br/>efwefwfw</p>
                </div>
            </div>
          
        {/*section2*/}

            

            <div className="brother">
                <img src={image1} alt="Image 1" />
                <img src={image2} alt="Image 2" />
                <img src={image3} alt="Image 3" />
                <img src={image4} alt="Image 4" />
                <img src={image5} alt="Image 5" />
            </div>

            <div className="srv">
              <img src={go} />
            </div>
            {/*section3*/}
            <div className="portfolio">
                <div className="column">
                    <h1>Portfolio</h1>
                    <div className="contentB">
                        <img src={image1} alt="Image 1" />
                        <h2>Project 1</h2>
                        <p>
                            <ul>
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                            </ul>
                        </p>
                        <a href="#">View Page</a>
                    </div>
                    <div className="contentB">
                        <img src={image2} alt="Image 2" />
                        <h2>Project 2</h2>
                        <p>
                            <ul>
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                            </ul>
                        </p>
                        <a href="#">View Page</a>
                    </div>
                    <div className="contentB">
                        <img src={image3} alt="Image 3" />
                        <h2>Project 3</h2>
                        <p>
                            <ul>
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                            </ul>
                        </p>
                        <a href="#">View Page</a>
                    </div>
                </div>

                <div className="column">
                    <div className="contentB">
                        <img src={image4} alt="Image 4" />
                        <h2>Project 4</h2>
                        <p>
                            <ul>
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                            </ul>
                        </p>
                        <a href="#">View Page</a>
                    </div>
                    <div className="contentB">
                        <img src={image5} alt="Image 5" />
                        <h2>Project 5</h2>
                        <p>
                            <ul>
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                            </ul>
                        </p>
                        <a href="#">View Page</a>
                    </div>
                    <div className="contentB">
                        <img src={image6} alt="Image 6" />
                        <h2>Project 6</h2>
                        <p>
                            <ul>
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                            </ul>
                        </p>
                        <a href="#">View Page</a>
                    </div>
                </div>
            </div>

    </section>
  )
}

export default Service