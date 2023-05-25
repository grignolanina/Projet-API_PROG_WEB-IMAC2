import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

//
import HomePage from './pages/HomePage.vue'
import SearchPage from './pages/SearchPage.vue'
import ProfilePage from './pages/ProfilPage.vue'

const routes = [
	{
		path: '/',
		component: HomePage,
		name: "HomePage"
	},
	{
		path: '/SearchPage',
		component: SearchPage,
		name: "SearchPage"
	},
	{
		path: '/:id',
		component: ProfilePage,
		name: 'ProfilePage',
	},

]


const router = createRouter({
	history: createWebHistory(),
	routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')

