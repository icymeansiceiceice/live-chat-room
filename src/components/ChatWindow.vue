<template>
  <div class="chat-window">
     <div class="messages" ref="messageBox">
        <div class="single" v-for="(message) in fromatted" :key="message.id">
                <span class="created-at">{{ message.created_at }}</span>
                <span class="name">{{ message.name }}</span>
                <span class="message">{{ message.message }}</span>

        </div>
     </div>
  </div>
</template>

<script>
import { computed, ref, onUpdated } from 'vue';
import { db } from '../firebase/config';
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { formatDistanceToNow } from 'date-fns';

export default {

    setup(props) {

        let messages = ref([]);
        let messageBox = ref(null);

        onUpdated(() => {
          messageBox.value.scrollTop = messageBox.value.scrollHeight;
        });

        let fromatted = computed(()=>{
          return messages.value.map((message)=>{
              let formattedDate = formatDistanceToNow(message.created_at.toDate());
                return {...message,created_at:formattedDate};
          });
        });

       const q = query(collection(db,"messages"),orderBy("created_at"));
       const snap = onSnapshot(q,(snapshot)=>{
        let result = [];
        snapshot.forEach((doc)=>{
            let document = {...doc.data(),id:doc.id};
            if(doc.data().created_at){
              result.push(document);
            }
            
        });
            messages.value = result;
       });

       return{
        messages,
        fromatted,
        messageBox
       }
    }

}
</script>

<style>
.chat-window {
        background: #fafafa;
        padding: 30px 20px;
      }
      .single {
        margin: 18px 0;
      }
      .created-at {
        display: block;
        color: #999;
        font-size: 12px;
        margin-bottom: 4px;
      }
      .name {
        font-weight: bold;
        margin-right: 6px;
      }
      .messages {
        max-height: 400px;
        overflow: auto;
      }
</style>