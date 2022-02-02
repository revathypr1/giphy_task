import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
import { computeHeadingLevel, render } from "@testing-library/react";
import { Link, useHistory } from "react-router-dom";



const Giphy = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const history = useHistory()

  // const [IsLoading, setIsLoading] = useState(true);
  const [IsError, setIsError] = useState(false);
  console.log("giphy loading");
  useEffect(() => {
    const fetchData = async () => {
      setIsError(true);
      // setIsLoading(false);

      try {
        const results = await axios("https://api.giphy.com/v1/gifs/trending", {
          params: {
            api_key: "9jfZlT5G25uLdVl95lYJ3Zr5hZxQcuXc",
            limit:100,
          },
        });
        console.log(results);
        setData(results.data.data);
      } catch (err) {
        setIsError(true);
        setTimeout(() => setIsError(false), 4000);
      }
     
    };
    fetchData();
  
  }, []);

  const renderGifs = () => {
    return data.map((el) => (
      <div key={el.id} className="gif">
        <img src={el.images.original?.url} />
      </div>
    ));
  };
  const renderError = () => {
    if (IsError) {
      return (
        <div
          classname="alert.alert-danger.alert-dismissible fade show "
          role="alert"
        >
          <h3 className="error">
            unable to get gifs,please wait for few minutes
          </h3>
        </div>
      );
    }
  };
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsError(false);
    // setIsLoading(false);
    try {
      const results = await axios("https://api.giphy.com/v1/gifs/search", {
        params: {
          api_key: "9jfZlT5G25uLdVl95lYJ3Zr5hZxQcuXc",
          q: search,
          limit: 100,
        },
      });
      setData(results.data.data);
    } catch (err) {
      setIsError(true);
      setTimeout(()=> setIsError(false),4000);
    }
    // setIsLoading(false);
  };

  const logOut = (e) =>{
    e.preventDefault();
    localStorage.clear();
    history.push("/")
  }

  return (
    <>
      <div className="m-2">
        {renderError()}
        <form className="form-inline justify-content-center m-2">
          <input
            value={search}
            onChange={handleSearchChange}
            type="text"
            placeholder="search"
            className="form-control"
          />
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary mx-2"
          >
            Go
          </button>
        {/* </form> */}
        <button
          onClick={logOut}
            className="btn btn-primary mx-2 "
            className="logout"
          >
            Logout
            </button>
          </form>
        <div className="container gifs">
          {renderGifs()}
        </div>
      </div>
    </>
  );
};
export default Giphy;
