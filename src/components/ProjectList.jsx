import PropTypes from 'prop-types';

export const ProjectList = ({ projects }) => {
  return (
    <div>
      {projects.map(({ img, category }) => {
        <img src={img} alt={category} />
      })}
    </div>
    
  )
}

ProjectList.propTypes = {
  projects: PropTypes.array
}
