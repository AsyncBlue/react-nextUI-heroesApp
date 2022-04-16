import { Text, Divider, Row, Input, Button, Col } from "@nextui-org/react";
import queryString from 'query-string'
import { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";
import { useForm } from "../hooks/useForm";

export const SearchScreen = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const { q = '' } = queryString.parse( location.search )

    const [ values, handleInputChange ] = useForm({
        searchText: q
    })

    const { searchText } = values

    const heroesFiltered = useMemo( () => getHeroesByName( q ), [q] )

    const handleSearch = (e) => {
        e.preventDefault()
        navigate(`?q=${ searchText }`)
    }

    return (
        <>
            <Text
                h1
                css={{
                    textGradient: "45deg, $blue500 -20%, $pink500 50%",
                }}> 
                Busquedas 
            </Text>
            <Divider color='secondary' />

            <Row css={{ marginTop: '45px' }}>

                <Col span={5}>

                    <form onSubmit={ handleSearch }>

                        <Input
                            type='text'
                            labelPlaceholder='Buscar un heroe'
                            color='secondary'
                            size='xl'
                            name='searchText'
                            autoComplete='off'
                            onChange={ handleInputChange }
                        />

                        <Button
                            type='submit'
                            color='gradient'
                            size='lg'
                            shadow
                            css={{ marginTop: '20px' }}
                            value={ searchText }>
                            Buscar
                        </Button>

                    </form>

                </Col>

                <Col span={7}>

                    <Text h4 color='secondary'> Resultados </Text>
                    <Divider color='secondary' />

                    <Row gap={2} wrap='wrap'>

                        {
                            ( q === '' )
                                ? <Text h3 color='secondary' weight='bold' blockquote> Buscar un heroe </Text>
                                : ( heroesFiltered.length === 0 )
                                    && <Text h3 color='danger' weight='bold' blockquote> No hay resuldatos: { q }</Text>
                        }

                        {
                            heroesFiltered.map( hero => (
                                <Col span={5} css={{ marginTop:'12px' }} key={ hero.id } className="animate__animated animate__fadeIn">
                                    <HeroCard
                                        key={ hero.id }
                                        { ...hero }
                                    />
                                </Col>
                            ))
                        }

                    </Row>
                
                </Col>

            </Row>

        </>
    )
}