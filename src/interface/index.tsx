//interface for FilterMovie Component
export interface ISection {
  val: string;
  setVal: any;
  placeholder: string;
}

//interface for Loading
export interface ILoading {
  title: string;
}

export interface IMovies {
  movies: IResults[];
  val: string;
  loading: boolean;
}

//Interface for API
export interface IApi {
  queryString: string;
  resultsgdgg: IResults[];
  errorMessage: null | any;
}

export interface IResults {
  id: string;
  image: string;
  title: string;
  description: string;
  runtimeStr: string;
  genres: string;
  genreList: IGenreList[];
  contentRating: string;
  imDbRating: string;
  imDbRatingVotes: string;
  metacriticRating: string;
  plot: string;
  starList: IStarList[];
}

export interface IStarList {
  id: string;
  name: string;
}

export interface IGenreList {
  key: string;
  value: string;
}
