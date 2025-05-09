// import { useState } from 'react';
// import { getDatabase, ref, set } from "firebase/database";
// import { app } from "./firebase";
// import './App.css';

// const db = getDatabase(app);

// function App() {
//   const putData = () => {
//     try {
//       set(ref(db, 'users/john'), {
//         userName: 'John Doe',
//         age: 18,
//         isAdmin: true
//       });
//       console.log("Data successfully written!");
//     } catch (e) {
//       console.error("Error writing data: ", e);
//     }
//   };

//   return (
//     <>
//       <h1>hello</h1>
//       <button onClick={putData}>Save Data</button>
//     </>
//   );
// }

// export default App;



/*  ------------ firebase signup via email and  */

// import { useState } from 'react';
// import { app } from "./firebase";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import './App.css';

// function App() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSignUp = async () => {
//     try {
//       const auth = getAuth(app);
//       await createUserWithEmailAndPassword(auth, email, password);
//       console.log("User created successfully!");
//     } catch (error) {
//       console.error("Error creating user:", error);
//     }
//   };

//   return (
//     <>
//       <h1>Sign Up</h1>
//       <input 
//         type="email" 
//         value={email} 
//         onChange={(e) => setEmail(e.target.value)} 
//         placeholder="Email"
//       />
//       <input 
//         type="password" 
//         value={password} 
//         onChange={(e) => setPassword(e.target.value)} 
//         placeholder="Password"
//       />
//       <button onClick={handleSignUp}>Sign Up</button>
//     </>
//   );
// }

// export default App;

/* ------ signup via google */
import { useState } from 'react';
import { auth, provider } from "./firebase";
import { signInWithPopup } from "firebase/auth";
import './App.css';

function App() {
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Google sign-in successful:", user);
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  return (
    <>
      <h1>Sign In</h1>
      <button onClick={handleGoogleSignIn}>Sign in with Google</button>
    </>
  );
}

export default App;