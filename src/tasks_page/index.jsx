import { useState, useEffect } from 'react';
import dayjs from 'dayjs';

import { getTaskState } from './getTaskState';
import { getPostponeAvailable } from './getPostponeAvailable';
import { onTaskCheckContext } from './onTaskCheckContext';
import { onTaskSelectContext } from './onTaskSelectContext';
import { initiateContext } from './initiateContext';
import './css';

const Tasks = () => {
  const [initiated, setInitiated] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [taskChecks, setTaskChecks] = useState([]);

  const initiate = initiateContext(setTasks, setTaskChecks, setInitiated);
  useEffect(() => { if (!initiated) initiate(); }, [initiated]);

  const onTaskCheck = onTaskCheckContext(tasks, taskChecks, setTasks, setTaskChecks);
  const onTaskSelect = onTaskSelectContext(tasks, setTasks);

  return (
    <div className='tareas-page'>
      <div className='tareas-page-title'>
        <span className='tareas-page-title'>Tareas</span>
      </div>
      <ul className='task-list'>
        {
          tasks.map((task, idx) =>
            <li key={idx} className={'task '+getTaskState(task)}>
              <div className='task-header'>
                <div className='task-title'>
                  <span className='task-title'>{task.title}</span>
                  <span className='task-subtitle'>{task.description}</span>
                </div>
                <div className='task-edit'>
                  <select className='task-edit' onChange={onTaskSelect(idx)} value='Edit'>
                    <option>Edit</option>
                    <option>Archive</option>
                    <option>Delete</option>
                    { getPostponeAvailable(task) && <option>Postpone</option> }
                  </select>
                </div>
              </div>
              <div className='task-properties'>
                <div className='task-property'>
                  <span className='task-property-title'>PERIOD:&nbsp;</span>
                  <span className='task-property-value'>
                    {task.period.amount.toString()+' '+task.period.type}
                  </span>
                </div>
                <div className='task-property'>
                  <span className='task-property-title'>LAST EXECUTION:&nbsp;</span>
                  <span className='task-property-value'>
                    { (task.executionDates.length === 0 && 'NEVER') ||
                      task.executionDates[task.executionDates.length-1] }
                  </span>
                </div>
                <div className='task-property'>
                  <span className='task-property-title'>EXECUTION COUNT:&nbsp;</span>
                  <span className='task-property-value'>{task.executionDates.length}</span>
                </div>
                <div className='task-state'>
                  <div className='task-property state'>
                    <span className='task-property-title'>STATE:&nbsp;</span>
                    <span className='task-property-value'>{getTaskState(task)}</span>
                  </div>
                  <div className='task-state-checkbox'>
                    <input type='checkbox' className='task-state-checkbox'
                      checked={taskChecks[idx]} onChange={onTaskCheck(idx)} />
                  </div>
                </div>
              </div>
            </li>
          )
        }
      </ul>
    </div>
  );
};

export { Tasks };
