import { getTaskState } from './getTaskState';

const initiateContext = (setTasks, setTaskChecks, setInitiated) => async () => {
  setInitiated(true);

  const remoteTasks = [
    {
      title: 'Programación Competitiva',
      description: 'Resolver 2 problemas de nivel 1300',
      period: { amount: 1, type: 'month' },
      executionDates: ['2023-01-01', '2023-01-01'],
      postponedDate: null,
      createdAt: '2022-12-01',
    },
    {
      title: 'Alemán',
      description: 'Leer 1 cuento corto',
      period: { amount: 1, type: 'month' },
      executionDates: ['2022-11-01', '2022-12-01'],
      postponedDate: null,
      createdAt: '2022-10-01',
    },
    {
      title: 'Física',
      description: 'Leer 1 capítulo de un libro de física avanzada',
      period: { amount: 2, type: 'month' },
      executionDates: ['2022-9-01', '2022-10-01'],
      postponedDate: '2022-11-01',
      createdAt: '2022-11-01',
    },
    {
      title: 'Matemáticas',
      description: 'Leer 1 capítulo de un libro de matemáticas avanzadas',
      period: { amount: 2, type: 'month' },
      executionDates: ['2022-9-01', '2022-10-01'],
      postponedDate: null,
      createdAt: '2022-8-01',
    },
    {
      title: 'AWS DeepHack',
      description: 'Verificar costos incurridos en organización',
      period: { amount: 2, type: 'month' },
      executionDates: [],
      postponedDate: null,
      createdAt: '2023-01-01',
    },
    {
      title: 'AWS UDD',
      description: 'Verificar costos incurridos en organización',
      period: { amount: 2, type: 'month' },
      executionDates: [],
      postponedDate: null,
      createdAt: '2022-01-01',
    },
  ];

  const remoteTaskChecks = [];
  for (let i=0; i<remoteTasks.length; ++i) {
    if (getTaskState(remoteTasks[i])=='DONE') { remoteTaskChecks.push(true); continue; }
    /*else*/ { remoteTaskChecks.push(false); continue; }
  }

  setTaskChecks(remoteTaskChecks);
  setTasks(remoteTasks);
};

export { initiateContext };
