import React, { useState } from 'react';
import Filter from './components/Filter';
import MainSection from './components/MainSection';
import './styles.scss'

const App = () => {
  const [category, setCategory] = useState([]);

  return (
    <div className="app-container">
      <Filter
        checkedOptions={category}
        onChangeOptions={(e) => setCategory(e)}
      />
      <MainSection
        category={category}
      />
    </div>
  )
}

export default App;