


const Entrance = ({project}) => {
  let classImg =  `img-project ${project.img}`
  return (
    <div className='project'>
        <div className="overlay">
          <a className='btn-principal'>VIEW PROJECT</a>
          <a className='btn-principal mt-2'>VIEW CODE</a>
        </div>
        <div className= {classImg}></div>
        
        <h3 className="h-m pt-1">{project.title}</h3>
        <p className="mt-s"> {project.languages} </p>
        <div className="mt-s btn-hide">
          <a className='btn-principal'>VIEW PROJECT</a>
          <a className='btn-principal ml-1'>VIEW CODE</a>
        </div>
    </div>
  )
}

export default Entrance
