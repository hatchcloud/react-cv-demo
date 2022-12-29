import Entrance from './Entrance'
import './projects.css'

const Projects = () => {
  return (
    <section className='container'>
        <div className='flex flex-between align-center mt-4 mb-3'>
            <h2 className='h-xl'>Projects</h2>
            <a className='btn-principal'>Contact me</a>
        </div>
        <div className='grid-projects'>
            <Entrance />
            <Entrance />
            <Entrance />
            <Entrance />
            <Entrance />
            <Entrance />
        </div>
    </section>
  )
}

export default Projects
