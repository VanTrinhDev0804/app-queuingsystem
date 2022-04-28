import { doc, setDoc } from "firebase/firestore";
import { db } from "./cofig";


export const writeDataFireStore = async (data : any,fieldName : string ,index : any) => {
    await setDoc(doc(db, fieldName, `${index}`), data);
}
   