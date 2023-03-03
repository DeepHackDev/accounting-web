import { onTaskPostponeContext } from './onTaskPostponeContext';

const onTaskSelectContext = (tasks, setTasks) => idx => e => {
  e.preventDefault();
  if (e.target.value==='Postpone') onTaskPostponeContext(tasks, setTasks)(idx);
}

export { onTaskSelectContext };
