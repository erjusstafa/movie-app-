import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { IMovies, IResults } from "../../interface";
import styles from "./styles.module.css";

function Movies({ movies, val, loading }: IMovies) {
  const [loadMore, setLoadMore] = useState<number>(30);

  const handleLoadMore = () => {
    setLoadMore(loadMore + 30);
  };

  return (
    <div className={`${styles.kot} flex flex-wrap justify-center`}>
      {Object.values(movies || [])
        .splice(0, loadMore)
        .filter((item: IResults) => {
          let filterTitle = item.title
            .toLowerCase()
            .includes(val.toLowerCase());
          let filterYear = item.description.slice(1, -1).includes(val);

          return filterTitle || filterYear;
        })
        .map((item: IResults, index: number) => (
          <Link
            to={`/item/${item.id}`}
            key={index}
            className="2xl:w-80 xl:w-80 xl:md-80 w-96	h-64 drop-shadow-2xl mx-2 my-2  rounded-lg border-2 bg-[#36383c] hover:scale-[1.05] ease-in-out duration-200 	"
          >
            <Fragment>
              <div>
                <img
                  className="w-full h-48 rounded-lg object-cover"
                  src={item?.image}
                  alt={item?.title}
                />
              </div>
              <div className="flex justify-center w-full text-white">
                <span className="mx-1 mt-4">
                  {item?.title.length > 14
                    ? item?.title.substring(0, 14) + "...."
                    : item?.title}
                </span>
                <span className="mx-1 mt-4">-</span>
                <span className="mx-1 mt-4">
                  {item?.description.slice(1, -1)}
                </span>
              </div>
            </Fragment>
          </Link>
        ))}

      {/*  {
        <div className="w-full my-5 mx-5 ">
          {loadMore < movies.length ? (
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
  );
}

export default Movies;
