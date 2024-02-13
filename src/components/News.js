import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import emptynews from "./emptynews.webp";
import LoadingBar from 'react-top-loading-bar'

export default function News(props) {
  const [article, setArticle] = useState([]);
  const [page, setpage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const[loading, setloading] = useState(false)
  const[progress, setProgress] = useState(0)

  useEffect(() => {
    setloading(true)
    setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=102a2d9a536447b0bf0ff8cdc5f78128&page={page}&pageSize=${props.pageSize}`;

    
    axios
    .get(url)
    .then((response) => {
        setProgress(50)
        setArticle(response.data.articles);
        console.log(response.data.articles);
        setProgress(100)
      })
      .catch((error) => {
        console.log(error);
        setProgress(100)
      })
      .finally(() => {
        setloading(false); // Set loading to false after the request is completed
      });
  }, [props.country, props.category, props.pageSize, page]);

  const handlenextpage = () => {
    console.log("next page");
    setpage(page + 1);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=102a2d9a536447b0bf0ff8cdc5f78128&page=${
      page + 1
    }&pageSize=${props.pageSize}`;

    axios
      .get(url)
      .then((response) => {
        setProgress(0)
        setArticle(response.data.articles);
        console.log(response.data.articles);
        setProgress(100)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleprevpage = () => {
    console.log("previous page");
    if(page>1){
      setpage(page-1);
      let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=102a2d9a536447b0bf0ff8cdc5f78128&page=${
      page - 1
    }&pageSize=${props.pageSize}`;

    axios
      .get(url)
      .then((response) => {
        setProgress(0)
        setArticle(response.data.articles);
        console.log(response.data.articles);
        setProgress(100)
      })
      .catch((error) => {
        console.log(error);
      });
    }
  };

  return (
    <div>
   <div>
      <LoadingBar
        color='#f11946'
        progress={progress}
        transitionTime={200}
        loaderSpeed={300}
        onLoaderFinished={() => setProgress(0)}
      />
      
    </div>
      <h1
        className="text-center  mb-2"
        style={{ color: props.mode === "dark" ? "white" : "black" , marginTop: '70px' }}
      >
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
      <div
        className="row cardbox"
        style={{ backgroundColor: props.mode === "dark" ? "#171717" : "white" }}
      >
        {article.map((element) => {
          return (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title ? element.title : ""}
                description={element.description ? element.description : ""}
                imageUrl={element.urlToImage ? element.urlToImage : emptynews}
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
                source={element.source.name}
                mode={props.mode}
              />
            </div>
          );
        })}
      </div>
      <div class="d-flex justify-content-between m-3 " style={{
        marginLeft: '20px',
        marginRight: '20px',
        marginBottom: '20px'
      }}>
        <button
          className="btn btn-info"
          disabled={page === 1}
          onClick={handleprevpage}
        >
          <b>Previous Page</b>
        </button>
        <button className="btn btn-info" onClick={handlenextpage}>
          <b>Next Page</b>
        </button>
      </div>
    </div>
  );
}

News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
