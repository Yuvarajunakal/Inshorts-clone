import { Container } from "@mui/material";
import React from "react";
import "./newscomponent.css";
import Newscard from "./Newscard";
// import zIndex from '@mui/material/styles/zIndex'

export default function NewComponent({
  newsResults,
  setLoadmore,
  loadmore,
  newsArray,
}) {
  return (
    <Container maxWidth="md" sx={{ marginTop: "90px" }}>
      <div className="content">
        <div className="dowMessege">
          <span style={{ color: "white" }}>
            For the best experience use inshorts app on your smartphone
          </span>
          <img
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
            alt="playStore"
            style={{ height: "41px" }}
          />
          <img
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
            alt="playStore"
            style={{ height: "41px" }}
          />
        </div>
      </div>
      {newsArray.map((newsItem) => (
        <Newscard newsItem={newsItem} key={newsItem.title} />
      ))}

      {loadmore <= newsResults && (
        <>
          <hr />
          <button
            className="loadmore"
            onClick={() => setLoadmore(loadmore + 20)}
          >
            Load more
          </button>
        </>
      )}
    </Container>
  );
}
