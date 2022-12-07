import React from 'react'
import "./Footer.css"

import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
 
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3'  style={{fontFamily: 'serif' }}/>
                Travel Agency
              </h6>
              <p style={{fontFamily: 'serif'}}>
              TravelAgency your Vacations Partner in Pakistan with the best tour packages in 2022.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4' style={{fontFamily: 'serif'}}>Quick Links</h6>
              <p>
                <a href='/destination' className='text-reset' style={{fontFamily: 'serif'}}>
                Destination
                </a>
              </p>
              <p>
                <a href='/packages' className='text-reset' style={{fontFamily: 'serif'}}>
                Packages
                </a>
              </p>
              <p>
                <a href='/contact' className='text-reset' style={{fontFamily: 'serif'}}>
                Contact Us
                </a>
              </p>
              <p>
                <a href='/aboutUs' className='text-reset' style={{fontFamily: 'serif'}}>
            About Us
                </a>
              </p>
            </MDBCol>


            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
             <MDBIcon color='secondary' icon='home' className='me-2' style={{fontFamily: 'serif'}} />
             Islambad, Blue Area Pakistan
              </p>
              <p>
            <MDBIcon color='secondary' icon='envelope' className='me-3' style={{fontFamily: 'serif'}} />
            mariabib53@gmail.com
              </p>
              <p>
              <MDBIcon color='secondary' icon='phone' className='me-3' style={{fontFamily: 'serif'}} /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon  icon='print' className='me-3' style={{fontFamily: 'serif'}} /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'greenyellow' ,fontFamily: 'serif' }}>
        ALL COPYRIGHTS RESERVED TO TRAVEL AGENCY © 2022
       
      </div>
    </MDBFooter>
  );
}
