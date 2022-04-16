import { useNavigate } from 'react-router-dom'
import { Card, Col, Text, Row, Button } from "@nextui-org/react";

export const HeroCard = ( { 
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters 
} ) => {

    const navigate = useNavigate()

    const handleNavigate = () => navigate(`/hero/${id}`)

    const imagePath = `./assets/${id}.jpg`

    return (
        
        <Card cover hoverable clickable onClick={ handleNavigate }>
            <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                    <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                        { alter_ego	 }
                    </Text>
                    <Text h4 color="white">
                        { superhero	 }
                    </Text>
                </Col>
            </Card.Header>
            <Card.Body>
                <Card.Image
                    src={ imagePath }
                    height={400}
                    width="100%"
                    alt={ superhero }
                />
            </Card.Body>
            <Card.Footer
                blur
                css={{
                    position: "absolute",
                    bgBlur: "#ffffff",
                    borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
                    bottom: 0,
                    zIndex: 1,
                }}>
                <Row>
                    <Col>
                    <Text color="#000" size={12}>
                        { publisher }
                    </Text>
                    <Text color="#000" size={12}>
                        { first_appearance }
                    </Text>
                    </Col>
                    <Col>
                    <Row justify="flex-end">
                        <Button flat auto rounded color="secondary" onClick={ handleNavigate }>
                            <Text
                                css={{ color: "inherit" }}
                                size={12}
                                weight="bold"
                                transform="uppercase"
                            >
                            Ver mas...
                        </Text>
                        </Button>
                    </Row>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
        
    )
}
