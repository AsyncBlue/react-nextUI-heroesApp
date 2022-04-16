import { Button, Row, Col, Divider } from "@nextui-org/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext";
import { types } from "../types/types";

export const LoginScreen = () => {

    const navigate = useNavigate()

    const { dispatch } = useContext(AuthContext)

    const handleLogin = () => {
        
        const action = {
            type: types.login,
            payload: { name: 'Pedro' }
        }

        dispatch( action )

        const lastPath = localStorage.getItem( 'lastPath' ) || '/marvel'

        navigate( lastPath, {
            replace:true
        })

    }

    return (
        <Row justify='center'>
            <Col span={2}>
                <h1> LoginScreen </h1>
                <Divider color='secondary' />
                <Button 
                        size='xl' 
                        color="gradient"
                        onClick={ handleLogin }
                        css={{ marginTop: '10px' }}>
                    Login
                </Button>
            </Col>
        </Row>
    )
}