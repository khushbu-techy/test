
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyAMiLPkDTG7w-L5FLmF3gMGBW0oNx6s89w",
//   authDomain: "test-68119.firebaseapp.com",
//   projectId: "test-68119",
//   storageBucket: "test-68119.firebasestorage.app",
//   messagingSenderId: "124395946674",
//   appId: "1:124395946674:web:0662d13ae7ea3375ec3fab",
//   databaseURL: "https://test-68119-default-rtdb.firebaseio.com/"

// };


// const app = initializeApp(firebaseConfig);

// export {app}


// singup via google 
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  
    
          apiKey: "AIzaSyAMiLPkDTG7w-L5FLmF3gMGBW0oNx6s89w",
          authDomain: "test-68119.firebaseapp.com",
          projectId: "test-68119",
          storageBucket: "test-68119.firebasestorage.app",
          messagingSenderId: "124395946674",
          appId: "1:124395946674:web:0662d13ae7ea3375ec3fab",
          databaseURL: "https://test-68119-default-rtdb.firebaseio.com/"
        
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };