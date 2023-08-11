import { ref } from 'vue';
import { onAuthStateChanged } from "firebase/auth";
import {auth} from '../firebase/config';


let user = ref(auth.currentUser);

onAuthStateChanged(auth,(info)=>{
    user.value = info;
});

let GetUser =  ()=>{
    return {user};
};

export default GetUser;