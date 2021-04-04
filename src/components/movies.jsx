import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService';
class Movies extends Component {
    state = { 
        movies: getMovies()
    };
    handleDelete=(movie)=>{
        const movies=this.state.movies.filter(m=>m._id!==movie._id);
        this.setState({movies});
    };
    render() { 
        if(this.state.movies.length===0) return <h3>There are no movies in the database</h3>
        return ( 
            <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Name</th>
                <th scope="col">Stock Amount</th>
                <th scope="col">Rental Rate</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                {this.state.movies.map(movie=>(
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><button onClick={()=>this.handleDelete(movie)} className="btn btn-danger btn-sm">
                    Delete
                </button></td>
              </tr>))}
            </tbody>
          </table>
        );
    }
}
 
export default Movies;