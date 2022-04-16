import { useNavigate } from 'react-router-dom'
import { Button, Row, Text } from "@nextui-org/react";
import { useContext } from 'react';
import { AuthContext } from '../auth/authContext';
import { types } from '../types/types';

export const Navbar = () => {

    const { user, dispatch } = useContext(AuthContext)

    const navigate = useNavigate();

    const handleNavigate = ( url ) => navigate(url)

    const handleLogout = () => {

        dispatch({ type: types.logout })

        navigate('/login')

    }

    return (
        <Row justify='space-around'>
            <Button.Group size="xl" color='secondary'>
                <Button 
                    onClick={ () => handleNavigate('/marvel') }>
                    Marvel
                </Button>
                <Button
                    onClick={ () => handleNavigate('/dc') }>
                    DC
                </Button>
                <Button
                    onClick={ () => handleNavigate('/search') }>
                    Search
                </Button>
            </Button.Group>

            <Button
                css={{ marginTop: '5px', marginRight: '5px' }}
                auto
                size='xl'
                color='primary'
                onClick={ handleLogout }
                icon={<Text span weight='semibold' css={{color: 'White'}} >{ user.name }</Text>}>
                Logout
            </Button>
        </Row>
    )
}

