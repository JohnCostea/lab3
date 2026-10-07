// importing the MovieItem component so we can use it here
import MovieItem from "./MovieItem";

// defining the Movies component and receieve data through props.
export default function Movies (props){
    // loop through each movie in movies array
    
    return props.movies.map(
        (movie) =>{
                return <MovieItem mymovie={movie} key={movie.imdbID}></MovieItem>
            // dispaing a MovieItem for each movie , passes the movie data using the "mymovie" prop.
            // using imdbID as a unique key for React
        }
    );
}
