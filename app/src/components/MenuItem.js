import React, { useState } from "react";
import Card from 'react-bootstrap/Card';


function MenuItem() {
    return (
        //pass props
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Menu Item Name</Card.Title>
                <Card.Text>
                  Description of menu item
                </Card.Text>
                <Card.Text>
                  Price of Menu Item
                </Card.Text>
              </Card.Body>
            </Card>
    )
}

export default MenuItem