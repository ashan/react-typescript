import * as React from "react";
import { Task } from "../models/task";
import TaskListItem from "./TaskListItem";

interface ITasksListProps {
  tasks: Task[];
  onDelete: (task: Task) => void;
}

const TasksList: React.FunctionComponent<ITasksListProps> = ({
  tasks,
  onDelete
}) => {
  return (
    <ul>
      {tasks.map(task => (
        <TaskListItem task={task} onDelete={onDelete} key={task.id} />
      ))}
    </ul>
  );
};

export default TasksList;
