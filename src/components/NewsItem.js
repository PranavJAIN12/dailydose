/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './Style.css';

export default function NewsItem(props) {
  return (
    <div className='container d-flex justify-content-center align-items-center'>
      <div className="card" style={{ width: "23rem", height: "auto" , marginTop: "4em", backgroundColor: props.mode==='dark' ? '#333' : 'inherit', color: props.mode==='dark' ? 'white' : 'black' }}>
        <img src={props.imageUrl} className="card-img-top" alt="image not available" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          <p className='card-text'>Published at: {props.date}</p>
          <span class="badge text-bg-danger" style={{
            display: 'flex', justifyContent: 'flex-end', right:'-10px', top: '0', position: 'absolute'
          }}>{props.sourceName}</span>   
                 <a href={props.newsUrl} target='_blank' className={`btn btn-${props.mode==='dark'? 'dark': 'primary'}`} rel="noreferrer">Read More</a>
        </div>
      </div>
    </div>
  );
}
