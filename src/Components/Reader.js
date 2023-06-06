import React, { useState, useEffect } from "react";
import Article from "./Article";

function Reader() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState("fruit");
  const [subredditTitle, setSubredditTitle] = useState("");
  
    //get community info
  useEffect(() => {
    fetch("https://www.reddit.com/r/" + subreddit + "/about.json")
      .then((res) => {
        if (res.status !== 200) {
          //TODO: Show a banner if things don't work
          console.log("Error: " + res.status);
          return;
        }
        res.json().then((data) => {
          if (data != null) {
            setSubredditTitle(
              data.data.over18 === false
                ? data.data.title
                : "You shouldn't be looking at this at work"
            );
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [subreddit]);
  //get subreddit posts
  
  useEffect(() => {
    fetch("https://www.reddit.com/r/" + subreddit + ".json")
      .then((res) => {
        if (res.status !== 200) {
          //TODO: Show a banner if things don't work
          console.log("Error: " + res.status);
          return;
        }
        res.json().then((data) => {
          if (data != null) {
            setArticles(data.data.children); //pass articles to the state
          }
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [subreddit]);


  return (
    <div className="Reader">
      <header className="Reader-header">
        <input
          type="text"
          className="input"
          value={subreddit}
          onChange={(e) => setSubreddit(e.target.value)}
        />
        <p>{subredditTitle}</p>
      </header>
      <div className="articles">
        {articles !== null
          ? articles.map((article, index) => (
              <Article
                key={index}
                image={article.thumbnail}
                article={article.data}
              />
            ))
          : ""}
      </div>
    </div>
  );
}

export default Reader;
