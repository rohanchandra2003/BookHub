import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>Welcome to BookHub, your one-stop destination for discovering and exploring books across every genre. Whether you're a seasoned reader looking for your next great read or a casual book lover, our platform helps you find the perfect match. With an extensive library of titles from fiction, non-fiction, self-help, biographies, and more, you can search, browse, and get personalized recommendations based on your reading preferences.
            <br></br>
Our mission is to make book searching simple, engaging, and enjoyable. Through our advanced search filters and curated lists, you can quickly find bestsellers, hidden gems, and books trending in the literary world. Explore detailed book summaries, author insights, and user reviews to make informed choices.
<br></br>
Join our community of book enthusiasts today, and dive into the world of literature with ease!
</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
