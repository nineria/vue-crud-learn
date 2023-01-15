import CreateComponent from '@/components/CreateComponent.vue';
import EditComponent from '@/components/EditComponent.vue';
import ListComponent from '@/components/ListComponent.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: CreateComponent,
  },
  {
    path: '/view',
    name: 'view',
    component: ListComponent,
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: EditComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
