import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm,setIsSignInForm] = useState(true);
  const [errorMessage,seterrorMessage] = useState(null);


  const email = useRef(null);
  const password = useRef(null);

  const handleButtonCLick = () =>{
    // validate the form
    
   const message =  checkValidateData(email.current.value,password.current.value);
   console.log(message);
   seterrorMessage(message);
 
   if (message) return;
   
   //sign up sign in logic
   if (!isSignInForm){
    // sign up logic 
     
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      seterrorMessage(errorCode + "-" + errorMessage);
    });

   }
   else {
    // sign in logic 
  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode +"-"+ errorMessage);
  });
   }

  }

  const toggleSignInform =() =>{
  setIsSignInForm(!isSignInForm);
  }
  return (
    <div className="">
      <Header/>
      <div className="absolute">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg" alt="bg-image"/>
      </div>
      <form onSubmit={(e)=>(e.preventDefault())} className="w-3/12 absolute p-12 bg-black opacity-80 mx-auto my-36  right-0 left-0 text-white rounded-lg">
      <h1 className="font-bold text-3xl py-2">{isSignInForm ?"Sign In": "Sign Up"}</h1>
      {!isSignInForm && (<input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700" />
)}

       <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700" />
        
       <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700" />
       <p className="text-red-600 font-bold"> {errorMessage}</p>
       <button className="p-4 my-6 bg-red-700 w-full" onClick={handleButtonCLick}>{isSignInForm ?"Sign In": "Sign Up"}</button>
       <p className="cursor-pointer py-4" onClick={toggleSignInform}>{isSignInForm?"New to Netflix ? Sign Up Now":"Already registered ? Sign In Now"} </p>
      </form>
       
    </div>

  )
}

export default Login;