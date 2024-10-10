import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Divider,
  HStack,
  Heading,
  VStack,
} from "@chakra-ui/react";
// import { useDispatch } from 'react-redux'
import { GiCrossMark } from "react-icons/gi";
import ImageSlider from "./ImageSlider";;

import { useParams } from 'react-router-dom';
import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { useNavigate } from 'react-router-dom';
import useGamesScreenShots from "../hooks/useGamesScreenShots";
import { useSelector } from "react-redux";
import { RootState } from "../redux/rootReducer";
const GameCardOpened = () => {
  const { id } = useParams();
  const [isGameLoading, setGameLoading] = useState(false);
  const [gameError, setGameError] = useState('');
  const [gameDatas, setGameDatas] = useState([]);


  useEffect(() => {
    const controller = new AbortController();

    setGameLoading(true);
    apiClient
        .get(`/games/${id}`, { signal: controller.signal })
        .then(res => {
          // console.log(res);
            setGameDatas(res.data)
            setGameLoading(false);
        })
        .catch(err => {
            if (err instanceof CanceledError) return;
            setGameError(err.message)
            setGameLoading(false);
        });

    return () => {
        controller.abort()
    };
}, []);

const navigate = useNavigate();
   const { datas } = useGamesScreenShots(id);

  // const game = useSelector((state: RootState) => state.game.openedGame);
  // const dispatch = useDispatch();
  console.log("----", gameDatas);
  const pageNumber: number = useSelector(
    (state: RootState) => state.page.pageNumber
  )
  return (
    
    <>
    <HStack p={2}  >
    <Card
        borderRadius={10}
        overflow={"hidden"}
        // size={40}
        width={"95%"}
        // height={"100%"}
        // width={"80vw"}
      >
        <CardHeader>
          <HStack padding={"10px"} justifyContent={"space-between"}>
            <Heading fontSize={"2xl"}>{gameDatas?.name}</Heading>
            <button onClick={() => navigate(`/page/${pageNumber}`)}>
              <GiCrossMark size={50} color="crimson" />
            </button>
          </HStack>
        </CardHeader>
        {/* <Divider/> */}
        <Divider w={"100%"} />

        <CardBody>
          <VStack fontSize={"lg"}>
            <p>{gameDatas?.description_raw}</p>
            <HStack justifyContent={"center"} >
              <Box shadow={20} w="70%" p={4}>
                <ImageSlider slides={datas} />
              </Box>
            </HStack>
          </VStack>
        </CardBody>
      </Card>
    </HStack>
      
    </>
  );
};

export default GameCardOpened;
