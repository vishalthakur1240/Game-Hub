import {
  HStack,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GameListSkeleton = () => {
  return (
    
      <ListItem paddingY={'5px'}>
        <HStack>
            <Skeleton boxSize={"40px"} borderRadius={8}/>
            <SkeletonText height={'50px'}/>
        </HStack>
      </ListItem>
    

    // <Card borderRadius={10} overflow={'hidden'} marginBottom={'10px'}>
    //     <HStack>
    //         <Skeleton height={'50px'}/>
    //         <SkeletonText height={'20px'}/>
    //     </HStack>
    // </Card>
  );
};

export default GameListSkeleton;
