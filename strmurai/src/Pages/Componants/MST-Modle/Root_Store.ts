

import { types } from 'mobx-state-tree';
import Task from './Modle';

  const RootStore = types
  .model('RootStore', {
    tasks: types.array(Task),
  })
  .actions(self => ({
    addTask(task: typeof Task.Type) {
      self.tasks.push(task);
    },
  }));
  

export default RootStore;
