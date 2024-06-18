import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url';
import GameListSkeleton from './GameListSkeleton';

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({onSelectedGenre, selectedGenre}: Props) => {
  const {datas, isLoading, error} = useGenres();

  if(error) return null;
  // if(isLoading) return <Spinner/>;
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

  return (
    <List>
      {isLoading && skeletons.map((skeleton) => <GameListSkeleton key={skeleton}/>)}
      {datas.map(genre => 
      <ListItem key={genre.id} paddingY={'5px'}>
        <HStack>
          <Image boxSize={'32px'} borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
          <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectedGenre(genre)} fontSize={'lg'} variant={'link'}>{genre.name}</Button>
        </HStack>
      </ListItem>)}
    </List>
  )
}

export default GenreList