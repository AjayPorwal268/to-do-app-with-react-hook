import React from 'react';
import '../style/App.css';
import ToDaMainView from './components/to.mainView'

const MockTaskList = [
    {
        name : "Ready for Office",
        description : "Ready for Office",
        completed: false,
        createdBy: "Ajay Porwal"
    },
    {
        name : "Catch bus for office",
        description : "Catch bus for office",
        completed: false,
        createdBy: "Ajay Porwal"
    }
  ]
console.log(MockTaskList);

function ToDoComponent() {
  return (
    <div>
      <ToDaMainView taskList= {MockTaskList}/>
    </div>
  );
}

export default ToDoComponent;