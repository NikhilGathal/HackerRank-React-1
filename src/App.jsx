import React, { useState } from "react";
import "./App.css";
import Articles from "./Articles";
import {articles} from "./Art.js";

const title = "React Sorting articles";

function App() {
  const [data, setdata] = useState(articles);

  const sortByUpvotes = () => {
    const copy = [...data];
    const sorted = copy.sort((a, b) => b.upvotes - a.upvotes);
    setdata(sorted);
  };

  const sortByDates = () => {
    const copy = [...data];
    const sorted = copy.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
    setdata(sorted);
  };

  return (
   <>
   {/* <h1>Sorting Articles</h1> */}
  
   <div className="app">
      <h1 className="title">{title}</h1>

      <div className="nav">
        <label className="sort-label">Sort By</label>
        <button
          data-testid="most-upvoted-link"
          className="btn"
          onClick={sortByUpvotes}
        >
          Most Upvoted
        </button>
        <button
          data-testid="most-recent-link"
          className="btn"
          onClick={sortByDates}
        >
          Most Recent
        </button>
      </div>

      <Articles articles={data} />
    </div>
 
   </>
  );
}

export default App;
