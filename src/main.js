import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

//
import HomePage from './HomePage.vue'
import SearchPage from './SearchPage.vue'
import ProfilePage from './ProfilPage.vue'

const routes = [
	{
		path: '/',
		component: HomePage,
		name:"HomePage"
	},
	{
		path: '/SearchPage',
		component: SearchPage,
		name:"SearchPage"
	},
	{
		path: '/:id',
		component: ProfilePage,
		name: 'ProfilePage',

		// props:true
	},
	// {
	// 	path: '*', redirect:'/',
	// }
]


const router = createRouter({
    history:createWebHistory(),
    routes
})

const app = createApp(App) 
app.use(router)
app.mount('#app')

