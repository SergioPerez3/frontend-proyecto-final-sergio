import { redirect } from "react-router-dom";

function authLoader() {
    const user  = JSON.parse(localStorage.getItem("user"))

    if(!user){
        return redirect("/login")
    }

}

export default authLoader;
