import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "../App";
import Pagination from "./Pagination";
import { useSelector } from 'react-redux'
import { RootState } from "../redux/rootReducer";

interface Props {
  gameQuery: GameQuery;
}

// Code for Dispatch.
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from "redux";
import { useDispatch as useReduxDispatch } from 'react-redux';
type AppDispatch = ThunkDispatch<RootState, void, AnyAction>;
const useDispatch = () => useReduxDispatch<AppDispatch>();
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { currentPageNumber } from "../redux";
 
const GameGrid = ({ gameQuery }: Props) => {
  const dispatch = useDispatch();
const { id } = useParams();
 dispatch(currentPageNumber(id))
  const pageNumber: number = useSelector((state: RootState) => state.page.pageNumber);
  const { datas, error, isLoading } = useGames(gameQuery, pageNumber);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const gameCardOpened = useSelector((state: RootState) => state.game.gameCardOpened);

  if (error) return <Text>{error}</Text>;
  const navigate = useNavigate();
  return (

    <>
    <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={"10px"}
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}

        {datas.length === 0
          ? "Nothing to show"
          : datas.map((game) => (
              <GameCard
                handleGameCardClick={(game) => {
                  // dispatch(isGameCardOpened(game))
                  navigate(`/gamedetail/${game.id}`)
                }}
                // handleGameCardClick={(game) => navigate('/gamedetail/1')}
                // handleGameCardClick={(game) => dispatch(isGameCardOpened(game))}
                key={game.id}
                game={game}
              />
            ))}
      </SimpleGrid>
        <Pagination />
        </>

  //   <>
  //   {!gameCardOpened ? (
  //     <>
  //     <SimpleGrid
  //       columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
  //       padding={"10px"}
  //       spacing={6}
  //     >
  //       {isLoading &&
  //         skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}

  //       {datas.length === 0
  //         ? "Nothing to show"
  //         : datas.map((game) => (
  //             <GameCard
  //               handleGameCardClick={(game) => dispatch(isGameCardOpened(game))}
  //               key={game.id}
  //               game={game}
  //             />
  //           ))}
  //     </SimpleGrid>
  //       <Pagination />
  //       </>
  //   ) : (
  //     <GameCardOpened />
  //   )}
  // </>
  );
};

export default GameGrid;
