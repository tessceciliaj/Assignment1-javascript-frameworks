import React, { useState } from "react";
import './App.css'
import meBW from "./assets/meBW.png"
import aiArt from "./assets/flwrpckr.png"
import hourglass from "./assets/myDesign.png"

const sideLength = "200px";

const articles = [
  {
    id: 1,
    className: "first",
    title: "About Me",
    subheading: "👋Hi im Therese, a Frontend developer student.",
    picture: meBW,
    content: "In January 2022 I found codecademy. I started to self-study Math, HTML, CSS and Javascript. Since Mars 2022 i've created art with a javascript libary called p5.js. In September 2022 I joined the Frontend developer program on Changemaker educations. They've provided me additional knowledge about HTML, Javascript & css. Also about git, github, jQuery, API's, Figma. To enhance inspiration and playfullness I also create AI-art in Midjorney. Further on I'm exited to learn more about how to write sufficient code in jsx and  dive deeper into design. "
  },
  {
    id: 2,
    className: "second",
    title: "My peachy Idea",
    subheading: "I would like to create a miniature story page with react.",
    picture: aiArt,
    content: "I love to play around with creative tools, where my favourite tool is my imagination. So for my project I would like to create a page where there are several miniature stories. To each story there will be three images on display, a title and buttons. My goal is to display one story at the time and make it feel playfull."
  },
  {
    id: 3,
    className: "third",
    title: "My luminous design",
    subheading: " I will create a light and playfull design. Focus on pseudo-class hover.",
    picture: hourglass,
    content: "All of my earlier projects contains a dark design, see https://lunagrace.tech/ for example. And now I want to produce a light and playful layout. I want the pictures on display to have different hover-effects, so there is where my main focus will be. Gradient buttons. Playful and bubbly feeling to it."
  }
];

function App() {
  const [currentArticle, setCurrentArticle] = useState(0);
  const [displayAll, setDisplayAll] = useState(false);

  function handleSwitchArticle() {
    setCurrentArticle((currentArticle + 1) % articles.length);
  }

  function handleToggleDisplay() {
    setDisplayAll(!displayAll);
  }

  return (
    <div>
      {displayAll ? (
        <div>
          {articles.map(article => (
            <div key={article.id}>
              <article className={article.className}>
              <h2>{article.title}</h2>
              <p className='subHeading'>{article.subheading}</p>
              <div className='container'>
                <img src={article.picture} alt="" width={sideLength} />
                <p>{article.content}</p>
              </div>
              </article>
        </div>
      ))}
    </div>
      ) : (
        <div>
          <article className={articles[currentArticle].className}>
            <h2>{articles[currentArticle].title}</h2>
            <p className='subHeading'>{articles[currentArticle].subheading}</p>
            <div className='container'>
              <img src={articles[currentArticle].picture} alt="" width={sideLength} />
              <p>{articles[currentArticle].content}</p>
            </div>
          </article>
        </div>
      )}
      <div className={articles[currentArticle].className}>
        <button onClick={handleToggleDisplay}>Toggle Display</button>
        <button onClick={handleSwitchArticle}>Switch Article</button>
      </div>
    </div>
  );
}

export default App;