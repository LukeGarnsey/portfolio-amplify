import { useRef, useState } from "react";

export default function Contact(){
  const sentRef = useRef(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const handleChange = (e) =>{
    const { name, value} = e.target;
    setFormData({ ...formData, [name]: value});
  };
  // const sent ={
  //   color:'green'
  // };
  // const fail = {
  //   color:'red'
  // };
  const handleSubmit = async (e) =>{
    e.preventDefault();
    if(sentRef.current)
      return;
    sentRef.current = true;
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
        // console.log('Email Sent');
        // sentRef.current.textContent = 'Email Sent';
        // Object.assign(sentRef.current.style,sent);
        setFormData({name:'', email:'', message:''});
        sentRef.current = false;
      }else{
        setFormData({name:'', email:'', message:''});
        sentRef.current = false;
        // sentRef.current.textContent = 'Failed to send Email';
        // sentRef.current.style = fail;
        // console.log(response.message + ' Failed to send email');
      }
    }catch(error){
      // console.error('Error:', error);
      // sentRef.current.textContent = 'Failed to send Email';
      // sentRef.current.style = fail;
      sentRef.current = false;
    }
  }

  return (
    <div className="bg-slate-800/50 p-4 rounded">
      <h3 className="font-semibold text-lg">Contact Me</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group py-1 flex flex-wrap">
          <label htmlFor="name" className="p-1 w-full font-bold">Name:</label>
          <input style={styles.max} className="form-control w-full p-2" type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
        </div>
        <div className="form-group py-1 flex flex-wrap">
          <label htmlFor="email" className="p-1 w-full font-bold">Email address:</label>
          <input style={styles.max}  className="form-control w-full p-2" type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
        </div>
        <div className="form-group py-1 flex flex-wrap">
          <label htmlFor="message" className="p-1 w-full font-bold">Message:</label>
          <textarea style={styles.max}  className="form-control w-full p-2" name="message" id="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows="4" required />
        </div>
        <button type="submit" className="my-3 bg-slate-500/50 p-2 text-teal-300 rounded">Send Email</button>
        
      </form>
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