import { AuthContext } from "@/context/AuthContext"
import { useContext } from "react"

export const useAuth = ()=>{
    const context = useContext(AuthContext)

    if(!context) throw new Error("Hook should be inside provider environment")
    
        return context
}