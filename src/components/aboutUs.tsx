import React from 'react'

function About() {
  return (
    <div>
      <section className="py-4 bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-auto"></div>
     <h4>About Us</h4>
          </div>
          <div className="col-md-8 my-auto">
            <h6 className="float-end"> Home/About Us</h6>
          </div>

        </div>

      </section>
      <section className="section bg-c-light  border-bottom">
        <div className="container"> 
        <h6> OUR COMPANY</h6>
        </div>
        <div className="underline">
<p>The reason for Pakistan being a tourist country is because of the multiple attractions in the country. The diverse culture, traditions, historical places, beautiful valleys are all factors behind Pakistan being an attractive tourist spot.</p>
        </div>

      </section>
    </div>
  )
}

export default About