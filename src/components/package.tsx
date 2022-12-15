import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Packages = () => {
  const packages = [
    
    { id: 1, packagesName: "TURBAT", image:require('../components/images/bat.jpg'), description:"Mountains of Bolan Pass. The Bolān Pass is a mountain pass through the Toba Kakar Range of Balochistan province in western Pakistan.Turbat canyon and steppe grasslands behind, Kazakhstan Stock Photo. ", price:12000},
    { id: 2, packagesName: "NARAN",image:require('../components/images/naran.jpg'), description:"Naran offers you sublime beauty, flowing river of Kunhar, snow-capped mountain and a various bunch of crystal water lakes such as Lake Saiful Malook,and Payala Lake beautiful lakes,eye-catching greenish hill stations this valley "  ,price:15000},
    { id: 3, packagesName: "KASHMIR" ,image:require('../components/images/kashmir.jpg'), description:"A valley between the Great Himalayan range and the Pir Panjal mountain range, Kashmir is a place of beautiful simplicity and pristine natural beauty. An inspiration for so much art, music and poetry, Kashmir is paradise", price:14000},
    { id: 4, packagesName: "GILGIT" ,image:require('../components/images/gill.jpg'), description:"Allah has bestowed such natural beauty in Pakistan. Pakistan is known as the “Country of Golden Sparrows”. If you want to see the piece of heaven on earth, you must visit Gilgit Baltistan is a component of Kashmir’s larger territor", price:12000},
    { id: 5, packagesName: "MURREE" , image:require('../components/images/murree.jpg'),description:"Murree has beautiful sceneries and attractive greenery atmosphere. Mountains covered with snow, valleys with fog, forests with heavy green trees and the weather, all these things make Murree an ideal place for tourists to visit. ", price:10000},
    { id: 6, packagesName: "SWAAT" , image:require('../components/images/swaat.jpg'),description:"Swat Valley (Swat) is known as the 'Switzerland' of Pakistan because of its snow-capped mountains and beautiful scenery.Takht-i-Bahi, Saidu Sharif, White Palace,  Mingora, and Buddha Stupas are some of the main attraction in Swat." ,price:500000}
  ];
  return (
    <>
    {/* <div className="card-group mt-5 ms-5 me-5 "> */}
    <div className="row row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 
                    row-cols-xl-3 justify-content-center mt-5 ms-5 me-5 ">
      {packages.map((packages) => (
  
  <div className="col-sm-6 ">
  <div className="card mt-3">
    <div className="card-body">
    <img src={packages.image}     className="card-img-top" 
     alt="..."/>
      <h5 className="card-title pt-4"  style={{fontFamily: 'serif'}}>{packages.packagesName}</h5>
      <p className="card-text"  style={{fontFamily: 'serif'}}>{packages.description}</p>
      <a href="/aboutUs" className="btn btn-primary"  style={{fontFamily: 'serif'}}>Book Now</a>
    </div>
  </div>
</div>
 
       ))} 
       </div>
    </>
  );
};

  


export default Packages;