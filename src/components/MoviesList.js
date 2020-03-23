import React,{Component} from 'react'
import {Link} from 'react-router-dom'
 const MoviesList=({movies})=>{
// const {movies}=props 
const renderMovies= Object.keys(movies).map(movieId=>{
   return <li><Link key={movieId} to={`/movies/${movieId}`}>{movies[movieId].title}
        </Link></li> 
})
    

   return(
        <div>
            {renderMovies}

        </div>
    )
}
export default MoviesList