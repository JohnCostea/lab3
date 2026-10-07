
import Card from 'react-bootstrap/Card';

export default function MovieItem(props) {
    return (
        <div>
            {/*<h3>{props.mymovie.Title}</h3>
            <p>{props.mymovie.Year}</p>
            <img src={props.mymovie.Poster}></img>*/}

            <Card style={{ width: '400px', height: '700px' }}>
                <Card.Img src={props.mymovie.Poster} />
                <Card.Body>
                    <Card.Title>{props.mymovie.Title}</Card.Title>
                    <Card.Text>
                        {props.mymovie.Year}
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    );
}