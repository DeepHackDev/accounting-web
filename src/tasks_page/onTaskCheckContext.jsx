import { getTaskState } from './getTaskState';

const onTaskCheckContext = (tasks, taskChecks, setTasks, setTaskChecks) => idx => e => {
  //e.preventDefault();

  const task = tasks[idx];
  const newExecutionDates = getTaskState(task)==='DONE' ?
    task.executionDates.slice(0, task.executionDates.length-1) :
    [...task.executionDates, dayjs().format('YYYY-MM-DD')];

  const newTask = { ...task, executionDates: newExecutionDates };

  const newTaskCheck = getTaskState(newTask)==='DONE';

  setTaskChecks([...taskChecks.slice(0,idx), newTaskCheck, ...taskChecks.slice(idx+1)]);
  setTasks([...tasks.slice(0, idx), newTask, ...tasks.slice(idx+1)]);
}

export { onTaskCheckContext };
