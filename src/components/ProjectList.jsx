import PropTypes from 'prop-types';

export const ProjectList = ({ projects }) => {
  return (
    <div className='projectList'>
      {projects.map(({ img, category }, index) => {
       return (
         <img key={index} src={img} alt={category} />
       )
      })}
    </div>
    
  )
}

ProjectList.propTypes = {
  projects: PropTypes.array
}
