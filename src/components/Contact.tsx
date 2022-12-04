import React from 'react'
import './Contact.css'
const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e:any) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <>
    <div className="container mt-5">
      <div className='contactForm'>
      <form >
      <h2 className="mb-3"> <b>Contact Us</b></h2>
        <div className="mb-3">
          <input className="form-control inputbc" type="text" placeholder='Your Name' id="name" required />
        </div>
        <div className="mb-3">
          <input className="form-control inputbc" type="email" placeholder='Your email' id="email" required />
        </div>
        <div className="mb-3">
          <textarea className="form-control inputbc" placeholder='Message' id="message" required />
        </div>
        <button className="btn btn-danger" type="submit">
        Send
        </button>
      </form>
    </div>
    </div>
  
    {/* <div className='mainContainer'>
   <div className='container'>
   <div className=''>
    <img classsName='img' src='https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwY2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'/>
    </div>
<section className=" contactForm mb-4">

  
    <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? </p>

    <div className="row">

    
        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                <div className="row">
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="name" name="name" placeholder='Your name' className="form-control"/>
                            <label for="name" className=""></label>
                        </div>
                    </div>
        
                </div>
                <br></br>
                <div className='row'>
                
                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="email" placeholder='Your email' name="email" className="form-control"/>
                
                        </div>
                    </div>
                </div>
                
          <br></br>
                <div className="row">

        
                    <div className="col-md-12">

                        <div className="md-form">
                            <textarea type="text" id="message"  placeholder='Message' name="message" rows="2" className="form-control md-textarea"></textarea>
                            
                        </div>

                    </div>
                </div>


            </form>

            <div className="text-center text-md-left">
                <a className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div className="status"></div>
        </div>

    </div>
   

</section>
</div>
</div> */}
    </>
  )
}
export default Contact;