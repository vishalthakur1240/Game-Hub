import { Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import GenreList from './components/GenreList'
import { Genre } from './hooks/useGenres';
import { useState } from 'react';
import { Platform } from './hooks/useGames';
import { Provider } from 'react-redux'
import store from './redux/store';
import Routing from './Routing';
export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Provider store={store}>
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
        <Navbar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}/>
      </GridItem>
      <Show above='lg'>
        <GridItem area={'aside'} paddingX={'5'}>
          <GenreList selectedGenre={gameQuery.genre} onSelectedGenre={(genre) => setGameQuery({...gameQuery, genre})}/>
          </GridItem>
      </Show>
      <GridItem area={'main'}>
        <Routing gameQuery={gameQuery} handleSelectedPlatform={(platform) => setGameQuery({...gameQuery, platform})} handleSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}/>-
      </GridItem>
     </Grid>
     </Provider>
  )
}

export default App
