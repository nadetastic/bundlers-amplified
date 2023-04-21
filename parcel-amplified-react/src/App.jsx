import { Amplify, Auth } from 'aws-amplify';

Amplify.configure({
    Auth: {
        identityPoolId: 'us-east-1:70efeb97-3df8-4ecc-b1ec-e9cbcdeea891',
        region: 'us-east-1',
        userPoolId: `us-east-1_OgI9b3GOP`,
        userPoolWebClientId: '1g3rltbnh4f1pe457d2sfeff8s',
    }
})

const App = () => {

    const signIn = async () => {
        try {
            const user = await Auth.signIn('dkkiuna11@gmail.com', 'Abcd1234')
            console.log('user:::', user)
        } catch (error) {
            console.log('error signing in', error)
        }
    }

    return ( 
        <div>
            <h1>Parcel Amplified React</h1>
            <button onClick={signIn}>Sign In</button>
        </div>
     );
}
 
export default App;