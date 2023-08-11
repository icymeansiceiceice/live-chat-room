<template>
  <div>
    <form >
        <textarea placeholder="Text message and hit Enter to send....." v-model="message" @keypress.enter="enterSubmit"></textarea>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import GetUser from '../composable/GetUser';
import { timestamp } from '../firebase/config';
import UseCollection from '../composable/UseCollection';

export default {
        setup(props) {
            let message = ref("");
            let {user} = GetUser();
            let {error,addDocument} = UseCollection("messages");

            let enterSubmit = async ()=>{
                let chat = {
                    message : message.value,
                    name : user.value.displayName,
                    created_at : timestamp
                }
                await addDocument(chat);
                console.log(error.value);
                message.value = "";

            }

            return{
                message,
                enterSubmit,
                user
            }
        }
}
</script>

<style>
  form {
        margin: 10px;
      }
      textarea {
        width: 100%;
        max-width: 100%;
        margin-bottom: 6px;
        padding: 10px;
        box-sizing: border-box;
        border: 0;
        border-radius: 20px;
        font-family: inherit;
        outline: none;
      }
</style>