import * as React from "react";
import { Task } from "../models/task";

interface ITaskListItemProps {
  task: Task;
  onDelete: (task: Task) => void;
}

const TaskListItem: React.FunctionComponent<ITaskListItemProps> = ({
  task,
  onDelete
}) => {
  const onClick = () => {
    onDelete(task);
  };

  return (
    <li >
      {task.name} <button onClick={onClick}>X</button>
    </li>
  );
};

export default TaskListItem;
