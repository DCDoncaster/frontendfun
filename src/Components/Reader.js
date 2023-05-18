import React, {useState,useEffect} from 'react';
import Article from './Article';


function Reader() {
  const [articles, setArticles]=useState([]);
  const [subreddit, setSubreddit]=useState('frontend');

useEffect(()=>{
fetch("https://www.reddit.com/r/"+ subreddit +".json").then(res=>{
  if(res.status !== 200){
    //TODO: Show a banner if things don't work
    console.log("Error: " + res.status);
    return;
  }
  res.json().then(data=>{
if(data != null){
  console.log("Data Received");
  setArticles(data.data.children);//pass articles to the state
   
};
  });
})
.catch(error=>{
  console.log(error);
})
}, [subreddit]);


  return (

  <div className='Reader'>
    <header className="Reader-header">
      <input type="text" className="input" value={subreddit} onChange={e => setSubreddit(e.target.value)}/>
      </header>
      <div className="articles">
        {
          (articles !== null) ? articles.map((article,index) => <Article key={index} article={article.data}/>):''
        }
      </div>
  </div>
  );
}

export default Reader;
