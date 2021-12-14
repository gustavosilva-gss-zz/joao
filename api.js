import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, child } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA-OaErWBBxSiMc5upvPtAMt2twJccd2uE",
  authDomain: "joao-91727.firebaseapp.com",
  storageBucket: "joao-91727.appspot.com",
  databaseURL: "https://joao-91727-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const dbref = ref(db);

async function fetchAlunos() {
    const alunos = await get(child(dbref, "alunos"));

    if (!alunos.exists()) {
        console.log("deu errado");
        return;
    }

    return alunos.val();
}

export default {
    fetchAlunos: fetchAlunos
}