import React from "react";
import { v4 as uuid } from 'uuid';

function CategoryFilter({ categories, setCategoryList, categoryList}) {


  function handleCategory(event) {
    setCategoryList(event.target.textContent)
  }
  
  const categoryOptions = categories.map(category => {
    if (categoryList === category) {
    return (<button key={uuid()} className="selected" onClick={handleCategory}>{category}</button>)
    } else {
      return (<button key={uuid()} onClick={handleCategory}>{category}</button>)
    }
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryOptions}
    </div>
  );
}

export default CategoryFilter;
