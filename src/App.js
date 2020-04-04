import React, { useState } from 'react';
import Filter from './components/Filter';
import MainSection from './components/MainSection';
import './styles.scss'

const App = () => {
  const [filterCategory, setFilterCategory] = useState([]);

  return (
    <div className="app-container">
      <Filter
        checkedOptions={filterCategory}
        onChangeOptions={(e) => setFilterCategory(e)}
      />
      <MainSection
        filterCategory={filterCategory}
      />
    </div>
  )
}

export default App;