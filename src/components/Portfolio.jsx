import { Toolbar } from './Toolbar.jsx'
//import { ProjectList } from './ProjectList';
//import { dataPortfolio } from './data/dataPortfolio';
import { useState } from 'react';

export const Portfolio = () => {
  const filters=["All", "Websites", "Flayers", "Business Cards"];
  const [selected, setSelected] = useState("All");
  const onSelectFilter = (filter) => {
    setSelected(filter);
  };


  return (
    <>
    <Toolbar  
      filters ={filters}
      selected = {selected}
      onSelectFilter={onSelectFilter}
      />
  </>
  )
}

