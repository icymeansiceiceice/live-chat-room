<template>
   <nav v-if="user">
        <div>
            <p>{{ user.displayName }}</p>
            <p class="email">logged in as {{ user.email }}</p>
        </div>
        <button @click="LogOut">Log Out</button>
   </nav>
</template>

<script>
import { ref } from 'vue';
import {auth} from '../firebase/config';
import GetUser from '../composable/GetUser';

export default {
    


    setup(props) {


        let error = ref("");
        ;let {user} = GetUser();
   
        console.log('displauy',user.value.displayName);
        console.log('email',user.value.email);
        


        let LogOut = async ()=> {
          try {
            await auth.signOut();
            
          } catch (err) {
                error.value = err.message;
          }
        };


        return{
            LogOut,
            user
        }
    }
}
</script>

<style>

</style>