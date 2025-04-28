import NavigationContext from "../context/navigation";
import { useContext } from "react";

function useNavigation() {
    return useContext(NavigationContext)
}

export default useNavigation

//this is a searchable note for a placeholder for navigation