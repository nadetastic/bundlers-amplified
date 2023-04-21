import React from "react";
import { Auth  } from "aws-amplify";

const App = () => {

    const [user, setUser] = React.useState(null);

    const signIn = async () => {
        try {6
            console.log('trying to sign in...')
            const res = await Auth.signIn(user.email, user.password);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <input type="email" onChange={e => setUser({ ...user, email: e.target.value })} /><br />
            <input type="password" onChange={e => setUser({ ...user, password: e.target.value })} /><br />
            <button onClick={signIn}>Sign In</button>
            <hr />
            { JSON.stringify(user,null,2)}

        </div>

            
    )};

export default App;