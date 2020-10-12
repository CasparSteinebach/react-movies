import React from "react";
import GridItem from "./GridItem";

import "./GridList.css"

const GridList = (props) => {
  /*console.log(props.movieList);*/
  let movieList = props.movieList.map(movie =>
    {return <GridItem id={movie.title} image={movie.img} movie={movie.movie} />
  });

  return(
    <ul class="gridList">
      {movieList}
    </ul>
  );
}

export default GridList;
