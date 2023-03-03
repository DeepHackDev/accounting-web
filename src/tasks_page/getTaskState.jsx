import dayjs from 'dayjs';

const getTaskState = task => {
  if (task.postponedDate) {
    const normalizedPostponedDate =
      dayjs(task.postponedDate).startOf(task.period.type).format('YYYY-MM-DD');
    const postponedDatediff = dayjs().diff(normalizedPostponedDate, task.period.type);
    if (postponedDatediff <= task.period.amount) return 'POSTPONED';
  }

  if (task.executionDates.length>0) {
    const lastExecutionDate = task.executionDates[task.executionDates.length-1];
    const normalizedLastExecution =
      dayjs(lastExecutionDate).startOf(task.period.type).format('YYYY-MM-DD');
    const datediff = dayjs().diff(normalizedLastExecution, task.period.type);
    if (datediff < task.period.amount) return 'DONE';
    if (datediff === task.period.amount) return 'TODO';
  }

  const normalizedCreatedAtDate =
    dayjs(task.createdAt).startOf(task.period.type).format('YYYY-MM-DD');
  const createdAtDatediff = dayjs().diff(normalizedCreatedAtDate, task.period.type);
  if (createdAtDatediff <= task.period.amount) return 'INITIAL-TODO';

  /*if (datediff > task.period.amount)*/ return 'OVERDUE';
}

export { getTaskState };
