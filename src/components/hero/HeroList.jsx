import { getHeroByPublisher } from "../../selectors/getHeroByPublisher"
import { HeroCard } from "./HeroCard"
import { Row, Col } from "@nextui-org/react";
import { useMemo } from "react";

export const HeroList = ( { publisher } ) => {

    //const heroes = getHeroByPublisher( publisher )
    const heroes = useMemo( () => getHeroByPublisher( publisher ), [ publisher ] )

    return (
        <>
            <Row gap={2} wrap='wrap' className="animate__animated animate__fadeIn">
                {
                    heroes.map( hero => (
                        <Col span={3} css={{ marginTop:'12px' }} key={ hero.id }>
                            <HeroCard
                                key={ hero.id } 
                                { ...hero }
                            />
                        </Col>  
                    ))
                }
            </Row>
        </>
    )
}
