import { useSelector } from "react-redux";
import Signing from "../components/Signingin";


const Authentication = ()=>{
    const email = useSelector(state=>state.authSlice.email)
    return(
        <Signing email = {email}/>
        
    )

}
export default Authentication;