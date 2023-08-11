<template>
    <div>
          <h2>Log In</h2>
            <div class="error" v-if="error">{{ error }}</div>
          <form @submit.prevent="Login">
              <input type="email" placeholder="email" v-model="email">
              <input type="password" placeholder="password" v-model="password">
              <button>Log In</button>
  
          </form>
  
    </div>
  </template>
  
  <script>
import { ref } from 'vue';
import useLogIn from '../composable/UseLogIn'
  
  export default {
      setup(props,context) {
          let email = ref("");
          let password = ref("");
         
          let {error,SignIn} = useLogIn();
          let Login = async ()=>{
            let res = await SignIn(email.value,password.value);
            if(res){
                context.emit("enterChatroom");
            } 
          };
  
  
          return{
              email,
              password,
              Login,
              error
          }
      }
  }
  </script>
  
  <style>
  
  </style>