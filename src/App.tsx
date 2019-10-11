import * as React from "react";
import { NewTaskForm } from "./components/NewTaskFrom";
import TasksList from "./components/TaskList";

import TaskProvider, { TaskContext } from "./providers/TaskProvider";

export default class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <TaskProvider>
          <NewTaskForm />
          <hr />
          <TaskContext.Consumer>
            {({ state, deleteTask }) => (
              <TasksList tasks={state.tasks} onDelete={deleteTask}></TasksList>
            )}
          </TaskContext.Consumer>
        </TaskProvider>
      </React.Fragment>
    );
  }
}
