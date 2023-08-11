<template>
  <div>
        <h2>Sign Up</h2>
        <div v-if="error" class="error">{{ error }}</div>
        <form @submit.prevent="SignUp">
            <input type="text" placeholder="display name" v-model="displayName">
            <input type="email" placeholder="email" v-model="email">
            <input type="password" placeholder="password" v-model="password">
           
            <button>Sign Up</button>

        </form>

  </div>
</template>

<script>
import { ref } from 'vue';
import useSingUp from '../composable/UseSignUp';

export default {
    setup(props,context) {
        let displayName = ref("");
        let email = ref("");
        let password = ref("");
        
        let {error,creatAccount} = useSingUp();
        let SignUp = async ()=>{
           let res =  await creatAccount(displayName.value,email.value,password.value);
           if(res){
            context.emit("BackToLogin");
           }        
        };


        return{
            displayName,
            email,
            password,
            SignUp,
            error
        }
    }
}
</script>

<style>

</style>