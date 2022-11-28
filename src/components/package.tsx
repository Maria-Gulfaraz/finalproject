
import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Packages = () => {
  const packages = [
    
    { id: 1, packagesName: "Victor Wayne" ,price:12000},
    { id: 2, packagesName: "swaat" ,price:15000},
    { id: 3, packagesName: "Lahore" ,price:14000},
    { id: 4, packagesName: "Peshawre" ,price:12000},
    { id: 5, packagesName: "Queta" ,price:10000},
    { id: 6, packagesName: "Kahuta" ,price:500000}
  ];
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}> 

      {packages.map((packages) => (
        
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>{packages.packagesName}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">BOOK NOW</Button>
        </Card.Body>
      </Card>
      ))}
 </div>
  );
};

  


export default Packages;