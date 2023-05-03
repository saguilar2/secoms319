import { useBetween } from "use-between";
import { useShareableState } from "./Global";
export function SignUp() {
    const { Login, User } = useBetween(useShareableState);
    return ( <div> <input
        type="text"
        class="form-control"
        id="password"
        value={Login}
        
      /></div> );
}