import { createRouter, createWebHashHistory } from 'vue-router';

import NotesView from '../Views/NotesView.vue';
import StatsView from '../Views/StatsView.vue';
import EditNoteView from '../Views/EditNoteView.vue';

const routes = [
  {
    path: '/',
    component: NotesView,
    name: 'notes'
  },
  {
    path: '/edit-note/:id',
    component: EditNoteView,
    name: 'editNote'
  },
  {
    path: '/stats',
    component: StatsView,
    name: 'stats'
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
