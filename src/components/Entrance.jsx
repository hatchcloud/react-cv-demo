


const Entrance = ({project}) => {
  let classImg =  `img-project ${project.img}`
  return (
    <div className='project'>
        <div className="overlay">
        </div>
        <div className= {classImg}></div>
        
        <h3 className="h-m pt-1">{project.title}</h3>
        <p className="mt-s"> {project.languages} </p>
    </div>
  )
}

export default Entrance
