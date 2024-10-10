import { Route, Routes, BrowserRouter } from "react-router-dom";
import { GameQuery } from "./App";
import GameCardOpened from "./components/GameCardOpened";
import { Box, HStack } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import PlatformSelecter from "./components/PlatformSelecter";
import SortSelector from "./components/SortSelector";
import { Platform } from "./hooks/useGames";

interface Props {
    gameQuery: GameQuery;
    handleSelectedPlatform: (platform: Platform) => void;
    handleSelectSortOrder: (sortOrder: string) => void;
  }

const Routing = ({gameQuery, handleSelectedPlatform, handleSelectSortOrder}: Props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Box paddingLeft={2}>
                <GameHeading gameQuery={gameQuery} />
                <HStack marginBottom={5} spacing={3}>
                  <PlatformSelecter
                    selectedPlatform={gameQuery.platform}
                    onSelectedPlatform={(platform) =>handleSelectedPlatform(platform)}
                  />
                  <SortSelector
                    sortOrder={gameQuery.sortOrder}
                    onSelectSortOrder={(sortOrder) => handleSelectSortOrder(sortOrder)}
                  />
                </HStack>
              </Box>
              <GameGrid gameQuery={gameQuery} />
            </>
          }
        />

        <Route path="/gamedetail/:id" element={<GameCardOpened/>} />

        <Route path="/page/:id" element={
          <>
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery} />
            <HStack marginBottom={5} spacing={3}>
              <PlatformSelecter
                selectedPlatform={gameQuery.platform}
                onSelectedPlatform={(platform) =>handleSelectedPlatform(platform)}
              />
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) => handleSelectSortOrder(sortOrder)}
              />
            </HStack>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </>
        } />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;