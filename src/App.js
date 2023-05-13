// import logo from './logo.svg';
import { useEffect, useState } from "react";
// import './App.css';
import Uvnavbar from "./components/Uvnavbar";
import NewComponent from "./components/NewComponent";
// import Categories from './data/Category';
import ApiKey from "./data/Config";
import axios from "axios";
import Footer from "./components/Footer";

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadmore, setLoadmore] = useState(20);

  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${ApiKey}&category=${category}&pageSize=${loadmore}`
      );
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    newsApi(); // eslint-disable-next-line
  }, [category, loadmore, newsResults]);

  return (
    <div className="App">
      <Uvnavbar setCategory={setCategory} />
      {newsResults && (
        <NewComponent
          setLoadmore={setLoadmore}
          newsArray={newsArray}
          newsResults={newsResults}
          loadmore={loadmore}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
