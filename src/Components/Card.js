import React from "react";
import  ReactDOM  from "react";

export default function Card(props){
    return(
        <div className="card--container">
            <img src={props.item.imageUrl}/>
            <div className="card-content">
                <p>{props.item.location}</p>
                <h1>{props.item.title}</h1>
                <p className="card--date">{props.item.startDate}-{props.item.endDate}</p>
                <p className="card--des">{props.item.description}</p>
            </div>
        </div>
    )
}