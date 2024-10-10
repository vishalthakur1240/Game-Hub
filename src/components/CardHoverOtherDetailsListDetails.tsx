import { ListItem, ListIcon } from '@chakra-ui/react'
import React from 'react';
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi';
import { MdNewReleases, MdOutlineUpdate, MdReviews, MdStar } from 'react-icons/md';

interface Props {
    cardHoverOtherDetailsListDetailsTitle: "ESBR Rating" | "Released" | "Reviews Count" | "Updated" | string;
    cardHoverOtherFetchedDetailsListDetailsTitle: string;
}

const CardHoverOtherDetailsListDetails = ({cardHoverOtherDetailsListDetailsTitle, cardHoverOtherFetchedDetailsListDetailsTitle}: Props) => {
  const iconMap: { [key: string]: React.ElementType } = {
    "ESBR Rating": MdStar,
    "Released": MdNewReleases,
    "Reviews Count": MdReviews,
    "Updated": MdOutlineUpdate,
  };

  const icon = iconMap[cardHoverOtherDetailsListDetailsTitle] || GiPerspectiveDiceSixFacesRandom ;

  return (
    <ListItem>
        <ListIcon as={icon} color="black.500" />
        {cardHoverOtherDetailsListDetailsTitle}: <b>{cardHoverOtherFetchedDetailsListDetailsTitle}</b>
      </ListItem>
  )
}

export default CardHoverOtherDetailsListDetails