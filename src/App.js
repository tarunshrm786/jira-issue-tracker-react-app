import React from 'react';
import IssueList from './components/IssueList';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Jira Issues Tracker</h1>
      <IssueList />
    </div>
  );
}

export default App;
