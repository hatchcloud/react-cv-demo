import './contact.css'

const Contact = () => {
  return (
    <section className='container pt-1 mt-3 pb-3 grid-contact'>
        <div className='flex flex-column'>
            <h2 className='h-xl mb-2'>Contact</h2>
            <p>I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
        </div>
        <form action="" className='flex flex-column aling-end form-contact'>
            <input 
                type="text" 
                placeholder="Name"
            />
            <input 
                type="email" 
                placeholder="Email"
            />
            <textarea 
                placeholder="Message"
            />
            <a className='btn-principal'>Send Message</a>
        </form>
    </section>
  )
}

export default Contact
