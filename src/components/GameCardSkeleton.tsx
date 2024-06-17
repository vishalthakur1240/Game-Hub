import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'

const GameCardSkeleton = () => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
        <Skeleton height={'220px'}/>
        <CardBody>
            <SkeletonText height={'50px'}/>
        </CardBody>
    </Card>
  )
}

export default GameCardSkeleton