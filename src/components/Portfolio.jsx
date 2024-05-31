import { Toolbar } from './Toolbar.jsx'
import { ProjectList } from './ProjectList';
import { useState } from 'react';
import { data } from '../data/dataPortfolio.js';

export const Portfolio = () => {
  const filters=["All", "Websites", "Flayers", "Business Cards"];
  const [selected, setSelected] = useState("All");
  const onSelectFilter = (filter) => {
    setSelected(filter);
  };
  const getProjects = selected === "All" ? data: data.filter(({category}) => category === selected);
  

  return (
    <>
    <Toolbar  
      filters ={filters}
      selected = {selected}
      onSelectFilter={onSelectFilter}
      />
      <ProjectList projects={getProjects}/>

  </>
  )
}

