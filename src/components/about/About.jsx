import React from 'react'
import US from '../../assets/play.jpg'
import './about.css'

const About = () => {
  return (
    <section className="hero">
            {/* First Column */}
            <div className="robin1">
                <h1>Experience Unprecedented Success With Strategic Web Design, SEO, &amp; Ad Management.</h1>
                <img src={US} alt="our employee" />
            </div>

            {/* Second Column */}
            <div className="robin2">
                <p>With an impressive legacy of over 15 years in the digital marketing realm, Content Thunder has been instrumental in propelling numerous businesses towards achieving millions of annual website visits, tens of thousands of leads, registrations, appointments, and revenue spikes surpassing a million dollars. If concrete results are your priority, your search ends here.</p>
                <a href="#target_blank"  target="_blank" className="cta-button">See our work</a>
            </div>
        </section>
  )
}

export default About