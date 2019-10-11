import * as React from "react";
import { TaskContext, ITaskContext } from "../providers/TaskProvider";

export const NewTaskForm: React.FunctionComponent = () => (
  <TaskContext.Consumer>
    {({ state, addTask, handleTaskChange }: ITaskContext) => (
      <React.Fragment>
        <p>I am inside the consumer {state.newTask.id}</p>
        <form onSubmit={addTask}>
          <input
            type="text"
            onChange={handleTaskChange}
            value={state.newTask.name}
          />
          <button type="submit">Add a task</button>
        </form>
      </React.Fragment>
    )}
  </TaskContext.Consumer>
);
