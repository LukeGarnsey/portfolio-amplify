import { useRef, useState } from "react";

export default function Contact(){
  const sentRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleChange = (e) =>{
    const { name, value} = e.target;
    setFormData({ ...formData, [name]: value});
  };
  const sent ={
    color:'green'
  };
  const fail = {
    color:'red'
  };
  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      console.log(formData);
      const response = await fetch('https://7p2n3r0ce1.execute-api.us-east-1.amazonaws.com/prod/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
        mode: 'cors'
      });
      if(response.ok){
        console.log('Email Sent');
        sentRef.current.textContent = 'Email Sent';
        Object.assign(sentRef.current.style,sent);
        setFormData({name:'', email:'', message:''});
      }else{
        sentRef.current.textContent = 'Failed to send Email';
        sentRef.current.style = fail;
        console.log(response.message + ' Failed to send email');
      }
    }catch(error){
      console.error('Error:', error);
    }
  }

  return (
    <div>
      <h3>Contactefe</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group py-1">
          <label htmlFor="name" className="p-1">Name:</label>
          <input style={styles.max} className="form-control" type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
        </div>
        <div className="form-group py-1">
          <label htmlFor="email" className="p-1">Email address:</label>
          <input style={styles.max}  className="form-control" type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
        </div>
        <div className="form-group py-1">
          <label htmlFor="message" className="p-1">Message:</label>
          <textarea style={styles.max}  className="form-control" name="message" id="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows="4" required />
        </div>
        <button type="submit" className="my-3">Send Email</button>
        
      </form>
      <h4 ref={sentRef}></h4>
    </div>
  );
}

const styles = {
  max:{
    maxWidth:'500px',
  },
  sent:{
    color:'green'
  },
  fail:{
    color:'red'
  }
}