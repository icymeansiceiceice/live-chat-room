<template>
  <div class="welcome container">
      
    <div v-if="showLoginForm"> 
      <Login @enterChatroom = "enterChatroom"></Login>
      <p>Not a member?<span @click="showLoginForm=!showLoginForm">create account</span></p>
    </div>
    <div v-else>
      <SignUp @BackToLogin = "BackToLogin"></SignUp>
      <p>Already member?<span @click="showLoginForm=!showLoginForm">Login Account?</span></p>
    </div>
    

  </div>
</template>

<script>
import SignUp from '../components/SignUp.vue';
import Login from '../components/Login.vue';
import { ref } from 'vue';
import { useRouter} from 'vue-router';


export default {
  components:{
    SignUp : SignUp,
    Login : Login
  },
  setup(props) {
      
        let showLoginForm = ref(true);
        let route = useRouter();

        let enterChatroom = ()=>{
          route.push("/chatroom");
        };

        let BackToLogin = ()=>{
          route.push("/chatroom");
          // route.push("/");
          // showLoginForm.value = true;
        } 


        return{
          showLoginForm,
          enterChatroom,
          BackToLogin
        };

  }

}
</script>

<style>
    .welcome {
        text-align: center;
        padding: 20px 0;
      }
  /* form styles */
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  /* .welcome label {
    display: block;
    margin: 20px 0 10px;
  } */
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #b3b3b3;
    margin: 10px auto;
  }
  .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .welcome button {
    margin: 20px auto;
  }
</style>