
import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Packages = () => {
  const packages = [
    
    { id: 1, packagesName: "TURBAT" ,price:12000},
    { id: 2, packagesName: "SWAAT" ,price:15000},
    { id: 3, packagesName: "NARAN" ,price:14000},
    { id: 4, packagesName: "MURREE" ,price:12000},
    { id: 5, packagesName: "GILGIT" ,price:10000},
    { id: 6, packagesName: "KASHMIR" ,price:500000}
  ];
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}> 

      {packages.map((packages) => (
        
        <Card style={{ width: '18rem',  margin:'20px', }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>{packages.packagesName}</Card.Title>
          <Card.Text>
          “Remember that happiness is a way of travel, not a destination.”
          </Card.Text>
          <Button variant="primary">BOOK NOW</Button>
        </Card.Body>
      </Card>
      ))}
 </div>
  );
};

  


export default Packages;