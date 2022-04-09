import React, { Fragment, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useReduxSelector } from "../../redux/hooks";
import Loading from "../Loading";
import styles from "./styles.module.css";
function PageDetails() {
  const { id } = useParams();
  const [itemMovie, setItemMovie] = useState<any>({});
  const navigate = useNavigate();
  const { loading } = useReduxSelector((state) => state.movies);

  const fetchItem = async () => {
    const data = await fetch(
      `https://imdb-api.com/en/API/Title/k_18g342fx/${id}`
    );
    const getData = await data.json();
    setItemMovie(getData);
  };

  const [loadMore, setLoadMore] = useState<number>(30);

  const handleLoadMore = () => {
    setLoadMore(loadMore + 30);
  };
  const handleBackToHome = () => {
    navigate("/");
  };
  useEffect(() => {
    fetchItem();
  }, [id]);

  const {
    image,
    title,
    directors,
    genres,
    imDbRating,
    type,
    releaseDate,
    plot,
  } = itemMovie;
  return (
    <Fragment>
      {loading ? (
        <Loading title="Loading..." />
      ) : (
        <div className={`${styles.Container} `}>
          <div className={` w-10/12 mx-auto  my-5	flex flex-column`}>
            <button
              className={`${styles.buttonBack} flex w-48 flex justify-start px-5 py-1 text-black text-size-[10px] border-2 bg-transparent rounded-full `}
              onClick={handleBackToHome}
            >
              Back to HomePage
            </button>
          </div>
          <div className="w-10/12 mx-auto my-5 h-full	flex flex-wrap content-center items-center	self-center	">
            <div className="w-full flex flex-wrap justify-between mx-auto">
              <div>
                <img
                  className={`${styles.imgItem} flex w-80 h-full mx-auto object-cover`}
                  src={image}
                  alt=""
                />
              </div>
              <div className="text-right leading-10 relative top-[30px]">
                <span className={`flex flex-row  justify-end`}>
                  {title}
                  <p className="font-bold	 text-[#33a8de]">: Name</p>
                </span>
                <span className="flex flex-row  justify-end	">
                  {" "}
                  {directors}{" "}
                  <p className="font-bold	 text-[#33a8de]">
                    {" "}
                    &nbsp;&nbsp;:Directors
                  </p>
                </span>
                <span className="flex flex-row  justify-end	">
                  {" "}
                  {genres}{" "}
                  <p className="font-bold	 text-[#33a8de]">
                    {" "}
                    &nbsp;&nbsp;:Genres
                  </p>
                </span>
                <span className="flex flex-row  justify-end	">
                  {releaseDate}{" "}
                  <p className="font-bold	 text-[#33a8de]">
                    {" "}
                    &nbsp;&nbsp;:Release Date{" "}
                  </p>
                </span>
                <span className="flex flex-row  justify-end	">
                  {" "}
                  {type}{" "}
                  <p className="font-bold	 text-[#33a8de]">
                    {" "}
                    &nbsp;&nbsp;: Type{" "}
                  </p>
                </span>

                <span className="flex flex-row  justify-end	">
                  {" "}
                  {imDbRating}{" "}
                  <p className="font-bold	 text-[#33a8de]">
                    {" "}
                    &nbsp;&nbsp;: Ratings{" "}
                  </p>
                </span>

                <span
                  className={`${styles.lastSpan} w-[500px] flex flex-row  justify-end leading-1`}
                >
                  {" "}
                  {
                    /* plot.length > 10
                    ? plot.substring(0, 10) + "..."
                    :  */ plot
                  }{" "}
                </span>
                {/*  {
                  <div className="w-full my-5 mx-5 ">
                    {loadMore < plot.length ? (
                      <button
                        className=" flex justify-center w-32 text-white mx-auto py-3 px-1 bg-sky-600 rounded-full  hover:bg-sky-700"
                        onClick={handleLoadMore}
                      >
                        {" "}
                        more
                      </button>
                    ) : (
                      <button onClick={() => setLoadMore(30)}>less</button>
                    )}
                  </div>
                } */}
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}

export default PageDetails;
