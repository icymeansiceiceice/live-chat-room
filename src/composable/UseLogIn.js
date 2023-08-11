import { ref } from "vue";
import {auth} from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

let error = ref("");

let SignIn = async (email,password)=>{
    try {
        let res = await signInWithEmailAndPassword(auth,email,password);
        if(!res){
            throw new Error('cant login account');
        }
        return res;
    } catch (err) {
        if(err.code != ""){
            error.value = 'User not found';
        }
    }
};

let useLogIn = ()=>{
    return {error,SignIn};
};

export default useLogIn;