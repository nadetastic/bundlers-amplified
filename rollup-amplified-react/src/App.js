import React from 'react';
import { Auth } from 'aws-amplify';

function App() {

   const [user, setUser] = React.useState(null);

   const signIn = async () => {
      try {
         const res = await Auth.signIn(user.email, user.password);
         console.log(res);
      } catch (err) {
         console.log(err);
      }
   };

   return (
      <div>
          <h1>Rollup is amazing!</h1>
            <input type="text" placeholder="email" onChange={e => setUser({ ...user, email: e.target.value })} /><br />
            <input type="password" placeholder="password" onChange={e => setUser({ ...user, password: e.target.value })} /><br />
            <button onClick={signIn}>Sign In</button>
      </div>
      
   );
}

export default App;