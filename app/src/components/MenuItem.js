import Card from 'react-bootstrap/Card';


function MenuItem() {
    return (
        //pass props
          <div className="d-flex flex-wrap mt-5 m-3 p-2">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Menu Item Name</Card.Title>
                <Card.Text>
                  Description of menu item</Card.Text>
                <Card.Text>$0.99</Card.Text>
              </Card.Body>
            </Card>
          </div>
    )
}

export default MenuItem