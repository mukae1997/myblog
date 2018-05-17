import index from './components/index.vue'
import ProcessingPage from './components/ProcessingPage.vue'
import ThreejsPage from './components/ThreejsPage.vue'
import AboutPage from './components/AboutPage.vue' 
import FrontEndExp from './components/FrontEndExp.vue' 

export default {
    routes: [
        {
            path: '/',
            component: index
        },
        {
            path: '/processing',
            component: ProcessingPage
        },
        {
            path: '/threejs',
            component: ThreejsPage
        },
        {
            path: '/frontendexp',
            component: FrontEndExp
        },
        {
            path: '/about',
            component: AboutPage
        }
    ]
}