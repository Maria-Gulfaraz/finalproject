import React from 'react'
import './aboutus.css'
const About = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e:any) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, phone,message,tickettype,members,Datepicker} = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      ticketype:tickettype.value,
      members :members.value,
      Datepicker:Datepicker.vaue,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <>
    <div className="container mt-5">
      <div className='contactForm'>
      <form >
      <h2 className="mb-3"> <b>Book This Tour</b></h2>
        <div className="mb-3">
          <input className="form-control inputbc" type="text" placeholder='Your Full Name' id="name" required />
        </div>
        <div className="mb-3">
          <input className="form-control inputbc" type="email" placeholder='Your Email' id="email" required />
        </div>
        <div className="mb-3">
          <textarea className="form-control inputbc"    placeholder=' Your Phone Number' id="phone" required />
        </div>
        <div className="mb-3">
          <textarea className="form-control inputbc"  placeholder='Ticket Type' id="tickettype" required />
        </div>
        <div className="mb-3">
          <textarea className="form-control inputbc" placeholder='Members' id="members" required />
        </div>
        <div className="mb-3">
          <textarea className="form-control inputbc" placeholder='mm/dd/yyyy' id="Datepicker" required />
    
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
  
    </>
  )
}
export default About;