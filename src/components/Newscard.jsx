import React from "react";
import "./newscard.css";

export default function Newscard({newsItem}) {
    const fulldate = new Date(newsItem.publishedAt); // Sat  Jan 09 2021  17:45:30  GMT+0530
    var date = fulldate.toString().split(" "); // ["Sat", "Jan", "09", "2021", "17:45:30", "GMT+0530"]
    const hour = parseInt(date[4].substring(0, 2)); //
    const time = hour > 12 ? true : false;

    console.log(newsItem);
  return (
    
      <div className="complete">
        <div className="left">
          <img className="newsImage"
            style={{ height: "250px", width: "250px" , borderRadius:"5px" }}
            src={newsItem.urlToImage?newsItem.urlToImage:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png'
            }
            alt={newsItem.title}
          />
        </div>
        <div className="right">
          <h2>{newsItem.title}</h2>
          <span style={{fontSize:"18px"}}><b>Shorts</b> by {newsItem.author}                 {time
                ? `${hour - 12}:${date[4].substring(3, 5)} pm`
                : `${hour}:${date[4].substring(3, 5)} am`}{" "}
              on {date[2]} {date[1]} {date[3]}, {date[0]}
</span>
          <p style={{fontFamily:"sans-serif"}}>
            {newsItem.description}
          </p>
          <a style={{textDecoration:"none",color:"black"}} href={newsItem.url}>read more at {newsItem.source.name}</a>
        </div>
      </div>
      
    
  );
}
