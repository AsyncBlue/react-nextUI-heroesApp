import { Container } from "@nextui-org/react";
import { Routes, Route } from 'react-router-dom'
import { Navbar } from "../components/ui/NavBar"
import { DcScreen } from '../components/dc/DcScreen'
import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { SearchScreen } from '../components/search/SearchScreen'
import { HeroScreen } from '../components/hero/HeroScreen'


export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            
            <Container md>
                <Routes>
                    <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="dc" element={<DcScreen />} />
                    <Route path='hero/:heroeID' element={<HeroScreen />} />
                    <Route path="search" element={<SearchScreen />} />
                    
                    <Route path="/" element={<MarvelScreen />} />
                </Routes>
            </Container>
        </>
    )
}
