import { Task } from "../models/task";
import React from "react";

export interface ITaskState {
  newTask: Task;
  tasks: Task[];
}

export interface ITaskContext {
  state: ITaskState;
  addTask: (event: React.FormEvent<HTMLFormElement>) => void;
  handleTaskChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  deleteTask: (taskToDelete: Task) => void;
}

// create a context
export const TaskContext = React.createContext<ITaskContext>(
  {} as ITaskContext
);

// create the provider component
export default class TaskProvider extends React.Component<{}, ITaskState>
  implements ITaskContext {
  state: ITaskState = {
    newTask: { id: 1, name: "" },
    tasks: []
  };

  render() {
    return (
      <TaskContext.Provider
        value={
          {
            state: this.state,
            addTask: this.addTask,
            handleTaskChange: this.handleTaskChange,
            deleteTask: this.deleteTask
          } as ITaskContext
        }
      >
        {this.props.children}
      </TaskContext.Provider>
    );
  }

  addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setState(previousState => ({
      newTask: {
        id: previousState.newTask.id + 1,
        name: ""
      },
      tasks: [...previousState.tasks, previousState.newTask]
    }));
  };

  handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newTask: {
        ...this.state.newTask,
        name: event.target.value
      }
    });
  };

  deleteTask = (taskToDelete: Task) => {
    this.setState(previousState => ({
      tasks: [
        ...previousState.tasks.filter(task => task.id !== taskToDelete.id)
      ]
    }));
  };
}
