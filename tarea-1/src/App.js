import React, { useState } from 'react';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Button, Wrap, WrapItem, Center } from '@chakra-ui/react';
import PokemonCard from './components/PokemonCard/PokemonCard';
import PokemonFetch from './data/data';
import themePersonalize from './data/theme';
import s from "./style.module.css";

function App() {

    const [pokemones, setPokemones] = useState([]);

    const handleClick = (e) => {
        e.preventDefault();
        setPokemones(PokemonFetch);
    }

    const theme = extendTheme(themePersonalize);

    return (
        <ChakraProvider theme={theme} resetCss>
            <div>
                <nav className={s.app_nav}>
                    <Center>
                        <h1 className={s.app_h1}> Pokemons List </h1>
                        <Button type="button" onClick={handleClick}> Get Pokemons! </Button>
                    </Center>
                </nav>
                <Wrap spacing='30px' h='90vh' mx={5}>
                    {
                        pokemones.map( pok => (
                            <WrapItem>
                                <PokemonCard key={pok.id} data={pok} />
                            </WrapItem>
                        ))
                    }
                </Wrap>
            </div>
        </ChakraProvider>
    );
}

export default App;
