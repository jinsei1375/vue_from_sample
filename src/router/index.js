// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Form from '../Form.vue';
import Confirm from '../Confirm.vue';
import Completed from '../Completed.vue';
import Home from '../Home.vue';
import Count from '../Count.vue';

const routes = [
	{ path: '/', name: 'Home', component: Home },
	{ path: '/form', name: 'Form', component: Form },
	{
		path: '/form/confirm',
		name: 'Confirm',
		component: Confirm,
	},
	{
		path: '/form/completed',
		name: 'Count',
		component: Completed,
	},
	{
		path: '/count',
		name: 'Count',
		component: Count,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
