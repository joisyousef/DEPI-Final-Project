import React from 'react';
import { motion } from 'framer-motion';


function NewsFeed() {
  // Animation variants for Framer Motion
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } }
  };

  const cardsData = [
    {
      imgSrc: './assets/images/home/1 (1).jpg',
      date: 'March 24, 2021',
      title: 'Global Empower Extensive Channels Extensive Create Method',
      description: 'Complete actualize centric color and shading without installed bases. Awesome medical template.',
    },
    {
      imgSrc: './assets/images/home/2 (1).jpg',
      date: 'March 24, 2021',
      title: 'Global Empower Extensive Channels Extensive Create Method',
      description: 'Complete actualize centric color and shading without installed bases. Awesome medical template.',
    },
    {
      imgSrc: './assets/images/home/3.jpg',
      date: 'March 24, 2021',
      title: 'Global Empower Extensive Channels Extensive Create Method',
      description: 'Complete actualize centric color and shading without installed bases. Awesome medical template.',
    }
  ];

  return (
    <section className="news-feed">
      <div className="container">
        <div className="text-section">
          <p>News Feed</p>
          <h1>Be the First to Know New Stories</h1>
        </div>

        <div className="cards">
          {cardsData.map((card, index) => (
            <motion.article
              key={index}
              className="card"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05, boxShadow: '0px 4px 15px rgba(0,0,0,0.1)' }}
            >
              <figure>
                <img src={card.imgSrc} alt="news" className="card-image" />
              </figure>
              <div className="mid">
                <span>by admin {card.date}</span>
                <h5>{card.title}</h5>
                <p>{card.description}</p>
              </div>
              <motion.b whileHover={{ scale: 1.1 }}>Read more</motion.b>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewsFeed;
