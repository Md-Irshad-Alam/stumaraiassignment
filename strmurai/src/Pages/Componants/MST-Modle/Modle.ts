import { types } from 'mobx-state-tree';

const Task = types
  .model('Task', {
    id: types.identifier,
    title: types.string,
    description: types.string,
    status: types.string,
  })
  .actions(self => ({
    updateTitle(newTitle: string) {
      self.title = newTitle;
    },
    updateDescription(newDescription: string) {
      self.description = newDescription;
    },
    updateStatus(newStatus: string) {
      self.status = newStatus;
    },
  }));

export default Task;
