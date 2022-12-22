import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./About.scss";
import { urlFor, client } from "../../client";

// const abouts = [
//   {
//     title: "Web Design",
//     description: "I'm mediocre web designer, but google search does wonders.",
//     imgUrl: images.about02,
//   },
//   {
//     title: "Frontend Development",
//     description: "I'm an eager beginner hungry for knowledge.",
//     imgUrl: images.about01,
//   },
//   {
//     title: "Backend Enthusiast",
//     description: "After I master Frontend I would love to move towards backend",
//     imgUrl: images.about03,
//   },
// ];

function About() {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts" ]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className="head-text">
        I know that <span>Good Apps </span>
        <br />
        Mean <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default About;
