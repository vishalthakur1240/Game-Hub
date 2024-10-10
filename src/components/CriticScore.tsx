import { Badge } from '@chakra-ui/react';

interface Props {
    score: number | string;
}



const CriticScore = ({score}: Props) => {
    const color = typeof score === 'number' ? score > 75  ? 'green' : score > 60 ? 'yellow' : '' : '';
  return (
    <Badge colorScheme={color} fontSize={'14px'} paddingX={2} borderRadius={'4px'}>{score}</Badge>
  )
}

export default CriticScore