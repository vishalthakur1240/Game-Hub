import { Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { Genre } from './hooks/useGenres';
import { useState } from 'react';
import PlatformSelecter from './components/PlatformSelecter';
import { Platform } from './hooks/useGames';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
     <Grid templateAreas={{
        base: `"nav" "main"`,
        // sm: `"nav" "main"`,
        // sm: `"nav nav" "aside main"`,
        // md: `"nav nav" "aside main"`,
        lg: `"nav nav" "aside main"`,
        // xl: `"nav nav" "aside main"`
     }} 

     templateColumns={{
      base: '1fr',
      lg: '200px 1fr'
     }}
     
     >
      <GridItem area={'nav'}>
        <Navbar/>
      </GridItem>
      <Show above='lg'>
        <GridItem area={'aside'} paddingX={'5'}>
          <GenreList selectedGenre={gameQuery.genre} onSelectedGenre={(genre) => setGameQuery({...gameQuery, genre})}/>
          </GridItem>
      </Show>
      <GridItem area={'main'}>
        <PlatformSelecter selectedPlatform={gameQuery.platform} onSelectedPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
     </Grid>
    </>
  )
}

export default App
