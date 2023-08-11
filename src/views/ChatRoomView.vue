<template>
    <div class="container">
        <NavBar></NavBar>
        <ChatWindow></ChatWindow>
        <NewChatRoom></NewChatRoom>
    </div>
</template>

<script>
import { watch } from 'vue';
import NavBar from '../components/NavBar.vue';
import GetUser from '../composable/GetUser';
import { useRouter } from 'vue-router';
import NewChatRoom from '../components/NewChatRoom.vue';
import ChatWindow from '../components/ChatWindow.vue'

export default {
    components:{
        NavBar:NavBar,
        NewChatRoom:NewChatRoom,
        ChatWindow:ChatWindow
    },
    setup(props) {

      let {user} = GetUser();
      let router = useRouter();

      watch(user,()=>{
        if(!user.value){
          router.push("/");
        }
      })
    
  }
    }

</script>

<style>
         nav {
        padding: 20px;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      nav p {
        margin: 2px auto;
        font-size: 16px;
        color: #444;
      }
      nav p.email {
        font-size: 14px;
        color: #999;
      }
</style>