import PropTypes from 'prop-types';
import '../App.css'
export const Toolbar = ({ filters, selected, onSelectFilter }) => {
  return (
    <div>
      {filters.map((filter, index) => {
        return <button className={
          filter === selected ? "toolbarBtn active" : "toolbarBtn"}
          onClick={() => onSelectFilter(filter)}
          key={index}>{filter}</button>
      })}
    </div>
  )
}
Toolbar.propTypes = {
  filters: PropTypes.array,
  selected: PropTypes.string,
  onSelectFilter: PropTypes.func
}
