import { Card, CardBody, HStack, Heading } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import ProgressCardHover from "./ProgressCardHover"
import CardHoverOtherDetails from "./CardHoverOtherDetails"

interface Props {
  game: Game
}

const CardHover = ({game}: Props) => {
  const rating = game.rating ? (game.rating / 5) * 100 : "NA";
  const reviewTitle = {
    esrb_rating: game?.esrb_rating?.name,
    released: game?.released,
    reviews_count: game?.reviews_count,
    updated: game?.updated,

  }

  return (
    <>
        <Card borderRadius={10} zIndex={2}>
     
        <CardBody>
            <Heading fontSize={'xl'} >{game.name}</Heading>
            <Card backgroundColor={"grey"} marginTop={2} padding={2}>
              <HStack>
                <CardHoverOtherDetails reviewsTitle={reviewTitle}/>
              </HStack>

            </Card>
            <HStack paddingTop={2} justifyContent={"space-between"}>
              <ProgressCardHover progressNumber={rating} progressLabel="Rating"/>
              <ProgressCardHover progressNumber={game?.playtime ? game.playtime : "NA"} progressLabel="Play Time"/>
              <ProgressCardHover progressNumber={game?.metacritic ? game.metacritic : "NA"} progressLabel="Metacritic"/>
            </HStack>
        </CardBody>
    </Card>
    </>
  )
}

export default CardHover