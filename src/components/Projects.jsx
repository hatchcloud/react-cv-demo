import Entrance from './Entrance'
import './projects.css'

const Projects = ({projects}) => {
  return (
    <section className='container'>
        <div className='flex flex-between align-center mt-4 mb-3'>
            <h2 className='h-xl'>Projects</h2>
            <a className='btn-principal'>Contact me</a>
        </div>
        <div className='grid-projects'>
            {projects.map( project=>(
                <Entrance 
                    project = {project}
                />
            ))}
        </div>
    </section>
  )
}

export default Projects
