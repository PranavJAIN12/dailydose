/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './Style.css'

export default function NewsItem(props) {
  return (
    <div className='container'>
      <div className="card" style={{width: "18rem",marginTop: "4em"}}>
  <img src={props.imageUrl} className="card-img-top" alt="image not available"/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.description}</p>
    <p className='card-text'>Published at: {props.date}</p>
    <a href={props.newsUrl} target='_blank' className="btn btn-primary" rel="noreferrer">Read More</a>
  </div>
</div>
    </div>
  )
}
