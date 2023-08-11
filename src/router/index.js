import { createRouter, createWebHistory } from 'vue-router'
import welcome from '../views/WelcomeView.vue'
import chatroom from '../views/ChatRoomView.vue'
import {auth} from '../firebase/config';



const routes = [
  {
    path: '/',
    name : 'welcome',
    component : welcome, 
    beforeEnter: (to, from, next) => {
      let user = auth.currentUser;
      if(!user){
        next();
      }else{
        next({name:'chatroom'});
      }
    }
  },
  {
    path: '/chatroom',
    name : 'chatroom',
    component : chatroom,
    beforeEnter: (to, from, next) => {
        let user = auth.currentUser;
        if(user){
          next();
        }else{
          next({name:"welcome"});
        }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
