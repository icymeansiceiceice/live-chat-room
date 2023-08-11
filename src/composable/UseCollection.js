import { addDoc,collection } from "firebase/firestore";
import { ref } from "vue";
import {db} from '../firebase/config';


let UseCollection = (docName) => {

    let error = ref("");
    let addDocument = async (docu)=>{

        try {  

            await addDoc(collection(db,docName),docu);

        } catch (err) {
            error.value = err;
        }
    }
    return{error,addDocument};
};

export default UseCollection;