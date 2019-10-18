import React from 'react';
import './App.css';
import {CheckboxTitle} from './components';
import {CardContainer} from './containers';

/*
  CheckboxTitle : 화면 상단 "스크랩한 것만 보기" Component
  CardContainer : 화면 하단 Card List
*/
function App() {
  return (
    <div className="PC-__">
      <CheckboxTitle/>
      <CardContainer/>
    </div>
  );
}

export default App;
