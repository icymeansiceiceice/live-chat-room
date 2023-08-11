import { ref } from 'vue';
import { createUserWithEmailAndPassword, updateProfile  } from "firebase/auth";
import {auth} from '../firebase/config';

    let error = ref("");

    let creatAccount = async (displayName,email,password)=>{
         try {
                let res = await createUserWithEmailAndPassword(auth,email,password);
                if(!res){
                    throw new Error('could not create new user')
                }
                
                updateProfile(auth.currentUser,{
                    displayName : displayName
                });

                return res;
            } catch (err) {
               if(err.code === 'auth/email-already-in-use'){
                    error.value = 'Already in use';
               }
               if(err.code === 'auth/weak-password'){
                error.value = 'Password should be at least 6 characters';
               }
               
              
            }
    };
    let useSignUp = ()=>{
        return {error,creatAccount};
    };

export default useSignUp;