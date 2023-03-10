import Card from 'react-bootstrap/Card';


function MenuItem(props) {
console.log(props);
    return (
        //pass props
          
            <Card style={{ width: '18rem', margin: '10px', padding: '10px'}}>
              <Card.Body>
                <Card.Title>{props.food.title}</Card.Title>
                <Card.Text>{props.food.description}</Card.Text>
                <Card.Text>{props.food.price}</Card.Text>
              </Card.Body>
            </Card>
        
    )
}

export default MenuItem