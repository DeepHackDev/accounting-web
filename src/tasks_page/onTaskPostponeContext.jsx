const onTaskPostponeContext = (tasks, setTasks) => idx => {
  const newTask = { ...tasks[idx], postponedDate: dayjs().format('YYYY-MM-DD') };
  setTasks([...tasks.slice(0, idx), newTask, ...tasks.slice(idx+1)]);
}

export { onTaskPostponeContext };
