import React, {useContext, useEffect, useState} from 'react';
import {LCRContainer} from "./Components/LCRContainer";
import {Context} from "./index";
import {LoginPage} from "./Components/LoginPage";

function App() {
    const {store} = useContext(Context)
    const [auth, setAuth] = useState<boolean>(store.isAuth);
    useEffect(() => {
        async function ping() {
            if (await store.check_auth()) {
                setAuth(true);
                console.log("ping")
            }
        }
        ping();
    }, [store,auth])

    if (store.isAuth) {
        return (<><LCRContainer></LCRContainer></>);
    } else {
        return <LoginPage></LoginPage>
    }
}

export default App;
