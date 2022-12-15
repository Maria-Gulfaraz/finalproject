import React from 'react'
// import { DateRange } from 'react-date-range';
import {useState} from 'react'
import axios from 'axios'
const About = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit =async (e:any) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, phone,members,pacakges} = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      members :members.value,
      // Datepicker:Datepicker.value,
      packages: pacakges.value,
    }
    console.log(conFom)
   await axios.post("http://localhost:5000/booking/post",conFom)
  let dataResponce:any= await axios.get("http://localhost:5000/booking/getAll")
  console.log(dataResponce.data)
  }
  // // const [date, setDate] = useState([
  // //   {
  // //     startDate: new Date(),
  // //     endDate: null,
  // //     key: 'selection'
  // //   }
  // ]);
  return (
    <>

    <div className="container mt-5">
      <div className='contactForm'>
      <form onSubmit={onSubmit}>
      <h2 className="mb-3"> <b>Book This Tour</b></h2>
        <div className="mb-3">
          <input className="form-control inputbc" type="text" placeholder='Your Full Name' id="name" required />
        </div>
        <div className="mb-3">
          <input className="form-control inputbc" type="email" placeholder='Your Email' id="email" required />
        </div>
        <div className="mb-3">
          <input className="form-control inputbc" type="text" placeholder='Your Phone Number' id="phone" required />
        </div>
        <div className="mb-3">
          <input className="form-control inputbc" type="text" placeholder=' Your Package' id="packages" required />
        </div>
        {/* <div className="mb-3">
          <textarea className="form-control inputbc"    placeholder=' Your Phone Number' id="phone" required />
        // </div> */}
        {/* // <div className="mb-3">
        //   <textarea className="form-control inputbc"  placeholder='Ticket Type' id="tickettype" required />
        // </div> */}
        <div className="mb-3">
          <input className="form-control inputbc" type="number" placeholder='Members' id="members" required />
        </div>
        <div className="mb-3">
          {/* <textarea className="form-control inputbc" placeholder='mm/dd/yyyy' id="Datepicker" required /> */}
          {/* <DateRange
  editableDateInputs={true}
  onChange={(item:any)=> setDate([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={date}
/> */}
        </div>
        {/* <div className="mb-3">
          <textarea className="form-control inputbc" placeholder='Message' id="message" required />
        </div> */}
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