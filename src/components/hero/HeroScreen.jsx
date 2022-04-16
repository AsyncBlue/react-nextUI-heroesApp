import { useParams, Navigate, useNavigate } from "react-router-dom"
import { getHeroById } from "../../selectors/getHeroById"
import { Row, Text, Col, Image, Button } from "@nextui-org/react";
import { useMemo } from "react";


export const HeroScreen = () => {

    const { heroeID } = useParams()

    const navigate = useNavigate()

    const hero = useMemo( () => getHeroById( heroeID ), [ heroeID ] )

    //const hero = getHeroById( heroeID )

    if ( !hero ) return <Navigate to='/' />

    const { id, superhero, alter_ego, publisher, first_appearance, characters } = hero

    const imagePath = `/assets/${id}.jpg`

    const handleReturn = () => navigate( -1 )

    return (
        
        <Row gap={4} css={{ marginTop: '20px' }}>
            <Col span={4}>

                <Image
                    src={ imagePath }
                    alt={ superhero }
                    className="animate__animated animate__fadeInLeft"
                />

            </Col>

            <Col span={8} className="animate__animated animate__fadeInRight">

                <Text 
                    h1
                    css={{
                            textGradient: "45deg, $blue500 -20%, $pink500 50%",
                        }}
                    weight="bold"> 

                    { superhero }

                </Text>

                <ul>

                    <li> <Text blockquote color="primary" weight="bold" size={20}> Alter ego:  { alter_ego } </Text></li> 
                    <li> <Text blockquote color="primary" weight="bold" size={20}> Publisher:  { publisher } </Text></li> 
                    <li> <Text blockquote color="primary" weight="bold" size={20}> First Appearence:  { first_appearance } </Text></li> 

                </ul>

                <Text h3 color='secondary' weight='bold'> Characters </Text>
                <Text span blockquote color='secondary' weight='bold'> { characters } </Text>

                <Button css={{ marginTop: '20px' }} color='gradient' size='xl' onClick={ handleReturn }>
                    Regresar
                </Button>


            </Col>
        </Row>
        
    )
}
