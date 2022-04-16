import { NextUIProvider } from '@nextui-org/react'
import { useEffect, useReducer } from 'react'
import { AuthContext } from './components/auth/authContext'
import { authReducer } from './components/auth/authReducer'
import { customTheme } from './components/ui/customTheme'
import { AppRouter } from './routers/AppRouter'

const init = () => {
    return JSON.parse( localStorage.getItem( 'user' ) ) || { logged: false }
}

export const HeroesApp = () => {

    const [ user, dispatch ] = useReducer( authReducer, {}, init )

    useEffect(() => {
        if ( !user ) return
        localStorage.setItem( 'user', JSON.stringify( user ) )
    }, [ user ])
    

    return (
        <AuthContext.Provider value={{
            user,
            dispatch
        }}>
            <NextUIProvider theme={ customTheme }>
                <AppRouter />
            </NextUIProvider>
        </AuthContext.Provider>
    )
}
