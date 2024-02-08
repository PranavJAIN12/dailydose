import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
// import Rock from './Rocksalt.ttf';

export default function News(props) {



  const [article, setArticle] = useState([]);
  const [mystyle, setmystyle]= useState(
    {
      color:"black",
      backgroundColor:"white"
    }
  )
  const[btntext, setbtntext]= useState("set dark mode")

  const togglestyle=()=>{
    if(mystyle.color==="black"){
      setmystyle({
        backgroundColor:"black",
        color:"white",
        
        
      })
      setbtntext("set light mode")
    }
    else{
      setmystyle({
        backgroundColor:"white",
        color:"black"
      })
      setbtntext("set dark mode")
    }
  }

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=102a2d9a536447b0bf0ff8cdc5f78128&page=1&pageSize=${props.pageSize}`;

    axios
      .get(url)
      .then((response) => {
        setArticle(response.data.articles);
        console.log(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.country, props.category, props.pageSize]);

  return (
    <div style={mystyle}>
      <h1 className="text-center mt-3 mb-2">
        Welcome to <span className="badge bg-danger">{props.title}</span>
      </h1>

      <h3
        className="text-center container sub-head"
        style={{
          color: "grey",
        }}
      >
        "Discover, Engage, Empower: Your News, Your World."
      </h3>
      <div className="row  cardbox">
        {article.map((element) => {
          return (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title ? element.title : ""}
                description={element.description ? element.description : ""}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
                source={element.source.name}
              />
            </div>
          );
        })}
      </div>
      <button className="btn btn-dark" onClick={togglestyle}>{btntext}</button>
    </div>
  );
}

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
