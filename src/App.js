import React from "react";
import SearchBar from "./SearchBar";
import GridList from "./GridList";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import "./App.css";
import movieList from "./movieList";

class App extends React.Component{

  state = {
    list: movieList
  }

  filterList = (searchTerm) =>{
    console.log(searchTerm);
    const newList = movieList.filter(movie => {
      if(movie.title.toLowerCase().split(' ').join('').indexOf(searchTerm.toLowerCase().split(' ').join('')) !== -1){
        return movie;
      }
    });
    this.setState({
      list: newList
    })
  }

  render(){
    return (
      <Router>
          <Switch>
              <Route exact path="/">
                  <main>
                      <SearchBar filterList={this.filterList} placeholder="Search for a movie title" />
                      <GridList movieList={this.state.list}/>
                      <Link to="/about"><h3>About this project</h3></Link>
                  </main>
              </Route>
              <Route exact path="/about">
              <h1>made by caspar</h1>
              </Route>
              <Redirect to="/"/>
          </Switch>
      </Router>
    );
  }

}

export default App;
