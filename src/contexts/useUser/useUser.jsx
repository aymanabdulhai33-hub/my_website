import { useContext } from "react";
import { UserProvider } from "./useUserContext";


const useUser = () => useContext(UserProvider)

export default useUser