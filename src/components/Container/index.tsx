import React, { ReactElement, useEffect, useState } from "react";
import { fetchMovieApi } from "../../redux/features/movieSlice";
import { useReduxDispatch, useReduxSelector } from "../../redux/hooks";
import FilterMovie from "../FilterMovie";
import Loading from "../Loading";
import Movies from "../Movies";
import styles from "./styles.module.css";

function Container(): ReactElement {
  const dispatch = useReduxDispatch();
  const { data, loading } = useReduxSelector((state) => state.movies);

  const [val, setVal] = useState<string>("");

  useEffect(() => {
    dispatch(fetchMovieApi());
  }, [dispatch]);

  return (
    <div className={`${styles.Container} w-10/12 mx-auto py-[20px]`}>
      <FilterMovie
        val={val}
        setVal={setVal}
        placeholder="Search..."
      />
      {loading ? (
        <Loading title="Loading..." />
      ) : (
        <Movies movies={data?.results} val={val} loading ={loading} />
      )}
    </div>
  );
}

export default Container;
