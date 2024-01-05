import React from "react"
import { GoogleAuthProvider,signInWithPopup,getAuth } from "firebase/auth";
import{ auth } from "..//firebase";
import thunk from "redux-thunk";


const login = () => {

    const signInGoogleFunc = () => {
        const provider = new GoogleAuthProvider(); 
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                console.log(result, "result");
            })
    }
    return(
        <div className="h-screen bg-gray-100 flex items-center justify-center gap-12">
            <div className="w-1/3 h-2/3 bg-pink-200 rounded-lg flex flex-col items-center justify-center">
                <div className="font-bold text-3xl">CHAT LOGIN PAGE</div>
                <div onClick={signInGoogleFunc} className="mt-5 border px-4 py-2 rounded-lg bg-green-400 text-white corsor-pointer hover:opacity-90">SIGN IN WITH GOOGLE</div>
            </div>
        </div>
    )
}
export default login