import React, { useState } from 'react';
import TaskView from "../templates/taskView"

function ToDoMainView(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  console.log(props)

  var renderTask = function(taskList) {
        return taskList.map((task, key) => {
              return <TaskView key task = {task} />
        });
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      {renderTask(props.taskList)};
    </div>
  );
}

export default ToDoMainView;