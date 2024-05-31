import React from 'react'
import "./Contact.css"
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'


const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "251cc16a-7eb6-4c1d-9d4d-534e08c60a47");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  
  return (
    <div className="contact">
      <div className="contact-col mt-5">
        <h3>Send Us a Message <img src={msg_icon} alt="" /></h3>
        <p className={` max-w-[500px] `}>Feel Free to Reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
            <li><img src={mail_icon} alt="" />hamzaaftab992@gmail.com</li>
            <li><img src={phone_icon} alt="" />+1 123-456-7890</li>
            <li><img src={location_icon} alt="" />77 Masssachusetts Ave, Cambridge <br />MA 02139, United States</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit} >
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter Your Name Required" />
          <label>Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter your Mobile Number" />
          <label>Write your Message here</label>
          <textarea name="message" id="" rows="5" placeholder="Enter your Message required"></textarea>
          <button type="submit"><a href="#_" class="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-blue-600 rounded-md hover:bg-blue-400 sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}">
Submit
<svg class="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</a></button>
        </form>
       <span>{result}</span> 
      </div>
    </div>
  )
}

export default Contact
