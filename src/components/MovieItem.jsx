// importing the Card component from React Bootstrap
import Card from 'react-bootstrap/Card';

 // defining the MovieItem component and receiving movie data through props.
export default function MovieItem(props) {
    return (
        <div>
            {/*<h3>{props.mymovie.Title}</h3>
            <p>{props.mymovie.Year}</p>
            <img src={props.mymovie.Poster}></img>*/}
            
            {/* creating a Bootstrap Card with a fixed width and height. */}
            <Card style={{ width: '400px', height: '700px' }}>
                {/* displating the movie poster using the Poster URL from the movie data. */}
                <Card.Img src={props.mymovie.Poster} />

                {/* the main content of the card. */}
                <Card.Body>
                    {/* displaying the movie title in the card title */}
                    <Card.Title>{props.mymovie.Title}</Card.Title>
                    {/* displaying the movie's release year within the card text */}
                    <Card.Text>
                        {props.mymovie.Year}
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    );
}
