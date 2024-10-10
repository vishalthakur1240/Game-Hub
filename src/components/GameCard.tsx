import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import Emoji from "./Emoji";
import CardHover from "./CardHover";
import { useState } from "react";

interface Props {
  game: Game;
  handleGameCardClick: (game: Game) => void;
}

const GameCard = ({ game, handleGameCardClick }: Props) => {
  const [hover, setHover] = useState(false);
  
  return (
    <>
      <Popover isOpen={hover} placement="right" closeOnBlur={false}>
        <PopoverTrigger>
          <Card
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => handleGameCardClick(game)}
            cursor={"pointer"}
            borderRadius={10}
            overflow={"hidden"}
          >
            <Image src={getCroppedImageUrl(game.background_image)} />
            <CardBody>
              <HStack justifyContent={"space-between"} marginBottom={3}>
                <PlatformIconList
                  platforms={game.parent_platforms.map((p) => p.platform)}
                />
                <CriticScore score={game.metacritic} />
              </HStack>
              <Heading fontSize={"2xl"}>
                {game.name}
                <Emoji rating={game.rating_top} />
              </Heading>
            </CardBody>
          </Card>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverBody>
            <CardHover game={game} />
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default GameCard;
