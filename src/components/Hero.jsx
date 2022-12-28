import './hero.css'
const Hero = () => {
  return (
    <section id="sectionHero" className='sec-hero container'>
      <div className='hero-text'>
        <div className='portrait-mobile'></div>
        <h1 className='h-xl title-2 l-green'>Nice to meet you! I’m Adam Keyes.</h1>
        <h1 className='h-xl title-1 l-green'>Nice to <br />meet you! I’m Adam Keyes.</h1>
        <p>Based in the UK, I’m a front-end developer passionate about building accessible web apps that users love.</p>
        <a className='btn-principal'>Contact me</a>
      </div>
      <div className='flex flex-end w-100'>
        <div className='portrait'></div>
      </div>
    </section>
  )
}

export default Hero
