import { List } from "@chakra-ui/react";
import CardHoverOtherDetailsListDetails from "./CardHoverOtherDetailsListDetails";

interface ReviewsTitle {
    esrb_rating: string;
    released: string;
    reviews_count: string;
    updated: string;
}
interface Props {
    reviewsTitle: ReviewsTitle
}
const CardHoverOtherDetails = ({reviewsTitle}: Props) => {

  return (
    <List spacing={3}>
        <CardHoverOtherDetailsListDetails cardHoverOtherDetailsListDetailsTitle="ESBR Rating" cardHoverOtherFetchedDetailsListDetailsTitle={reviewsTitle?.esrb_rating ? reviewsTitle.esrb_rating : "NA"} />
        <CardHoverOtherDetailsListDetails cardHoverOtherDetailsListDetailsTitle="Released" cardHoverOtherFetchedDetailsListDetailsTitle={reviewsTitle.released ? reviewsTitle.released : "NA"}/>
        <CardHoverOtherDetailsListDetails cardHoverOtherDetailsListDetailsTitle="Reviews Count" cardHoverOtherFetchedDetailsListDetailsTitle={reviewsTitle.reviews_count ? reviewsTitle.reviews_count : "NA"}/>
        <CardHoverOtherDetailsListDetails cardHoverOtherDetailsListDetailsTitle="Updated" cardHoverOtherFetchedDetailsListDetailsTitle={reviewsTitle?.updated ? reviewsTitle.updated.split("T")[0] : "NA"}/>
    </List>
  );
};

export default CardHoverOtherDetails;
