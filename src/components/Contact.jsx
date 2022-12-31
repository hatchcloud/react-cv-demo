import './contact.css'
import { useState } from 'react'

const Contact = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    let htmlEmail   = document.getElementById('email');
    let htmlName    = document.getElementById('name');
    let htmlMessage = document.getElementById('message');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if([name, message, email].includes('')){
          setError(true);
          return;
        }      
      }
  return (
    <section className='container pt-1 mt-3 pb-3 grid-contact'>
        <div className='flex flex-column form-text'>
            <h2 className='h-xl '>Contact</h2>
            <p>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-column aling-end form-contact'>
            <input 
                id='name'
                type="text" 
                placeholder="Name"
                className='w-100'
                value={name}
                onChange= {(e)=>setName(e.target.value)}
            />
            <input 
                id='email'
                type="email" 
                placeholder="Email"
                className='w-100'
                value={email}
                onChange= {(e)=>setEmail(e.target.value)}
            />
            <textarea 
                id='message'
                placeholder="Message"
                className='w-100'
                value={message}
                onChange= {(e)=>setMessage(e.target.value)}
            />

            <input
                id="agregar"
                type="submit" 
                value="Send Message"
                className='btn-principal'
            >
            </input>
        </form>
    </section>
  )
}

export default Contact
