import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
export const About = ()=>{
    return(
<div>
    <h2>helljcdk</h2>
    {/* <div>{<UserContext.Consumer> {(data) =>console.log(data)}</UserContext.Consumer>}</div> */}
    <User/>
    <UserClass name = {"mahi"}/>
</div>

    );
}