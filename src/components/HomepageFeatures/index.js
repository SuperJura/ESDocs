import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

const recentPosts = require("../../../.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json");

const HeroList = [
  {
    image: './img/book.png',
    title: 'Game',
    url: '/docs/intro'
  },
  {
    image: './img/re.png',
    title: 'Room Editor',
    url: '/docs/room-editor'
  }
]
function Hero({ image, title, url }) {
  return (
    <div class="article-card article-card-big article-card-hover">
      <a href={url}>
        <div class="content">
          <p class="title">{title}</p>
        </div>
        <img src={image} />
      </a>
    </div>
  );
}
function HeroSmall({ image, title, url }) {
  return (
    <div class="article-card article-card-small article-card-hover">
      <a href={url}>
        <div class="content">
          <p class="title">{title}</p>
        </div>
        <img src={image} />
      </a>
    </div>
  );
}


export function HomepageHeros() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const urlMetadata = require('url-metadata');
    const lastBlogPost = recentPosts.items[0]; // Define lastBlogPost here

    urlMetadata(lastBlogPost.permalink)
      .then((metadata) => {
        var url = metadata.image.replace(/([^:]\/)\/+/g, '$1');
        const urlObject = new URL(url);
        setImageUrl(urlObject.pathname);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  } else {
    const lastBlogPost = recentPosts.items[0]; // Define lastBlogPost here as well
    return (
      <>
        <section className={styles.features}>
          <div className="landingHeroCenter">
            {HeroList.map((props, idx) => (
              <Hero key={idx} {...props} />
            ))}
            <Hero image={imageUrl} title={"Blog: " + lastBlogPost.title} url={lastBlogPost.permalink} />
          </div>
        </section>
        <section className={styles.features}>
          <div className="landingHeroCenter">
            <HeroSmall image={'./img/discord-logo-blue.png'} title={"Discord"} url={"https://discord.gg/pinestudio"} />
            <HeroSmall image={'./img/discord-logo-blue.png'} title={"Press Kit"} url={"https://drive.google.com/drive/folders/167fHIItcneG9BWT_i_Z0R4-HrDct0iHq?usp=sharing"} />
            <HeroSmall image={'./img/discord-logo-blue.png'} title={"Latest DLC (Magic)"} url={"https://store.steampowered.com/app/2419810/Escape_Simulator_Magic_DLC&utm_campaign=ESDocs"} />

          </div>
        </section>
      </>
    );
  }
}