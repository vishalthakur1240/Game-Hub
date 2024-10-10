import { Box, Button, ButtonGroup, HStack } from "@chakra-ui/react";
import { IoIosArrowBack } from "react-icons/io";
import { MdArrowForwardIos } from "react-icons/md";

// Dispatch Code
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { useDispatch as useReduxDispatch, useSelector } from "react-redux";
import { currentPageNumber } from "../redux";
import { RootState } from "../redux/rootReducer";
type AppDispatch = ThunkDispatch<RootState, void, AnyAction>;
const useDispatch = () => useReduxDispatch<AppDispatch>();
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { CanceledError } from "axios";
import apiClient from "../services/api-client";

interface buttonData {
  selected: number;
}

const Pagination = () => {
  const buttonArray = [1, 2, 3, 4, 5];
  const dispatch = useDispatch();
  const pageNumber: number = useSelector(
    (state: RootState) => state.page.pageNumber
  );
  const [count, setCount] = useState(0);
  const [error, setError] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();

    apiClient
        .get(`/games`, { signal: controller.signal })
        .then(res => {
          console.log(res.data.count);
          setCount(res.data.count)
        })
        .catch(err => {
            if (err instanceof CanceledError) return;
            setError(err.message)
        });

    return () => {
        controller.abort()
    };
}, []);


  const handlePageClick = (data: buttonData) => {
    console.log(data.selected+1);
    dispatch(currentPageNumber(data.selected+1))
    navigate(`/page/${data.selected+1}`)
    
  }

  return (
    <>

    <HStack justifyContent={"center"}>
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          pageCount={count/20}
          marginPagesDisplayed={3}
          pageRangeDisplayed={6}
          onPageChange={handlePageClick}
          containerClassName="pagination"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          activeClassName="active"
          />

    </HStack>
      
    </>
  );
  // return (
  //   <>
  //     <HStack margin={2} justifyContent={"center"}>
  //       <Box>
  //         <Button
  //           margin={2}
  //           // onClick={() => dispatch(currentPageNumber(pageNumber - 1))}
  //           onClick={() => {
  //             dispatch(currentPageNumber(parseInt(pageNumber) - 1))
  //             navigate(`/page/${parseInt(pageNumber) - 1}`)
  //           }}
  //         >
  //           <IoIosArrowBack />
  //         </Button>
  //         {buttonArray.map((button) => (
  //           <Button
  //             margin={2}
  //             key={button}
  //             colorScheme={pageNumber === button ? "blue" : "gray"}
  //             // onClick={() => {
  //             //   dispatch(currentPageNumber(button))
  //             // }}
  //             onClick={() => {
  //               dispatch(currentPageNumber(button))
  //               navigate(`/page/${button}`)
  //             }}
  //           >
  //             {button}
  //           </Button>
  //         ))}
  //         <Button
  //           margin={2}
  //           // onClick={() => dispatch(currentPageNumber(pageNumber + 1))}
  //           // onClick={() => navigate(`/page/${currentPage + 1}`)}
  //           onClick={() => {
  //             dispatch(currentPageNumber(parseInt(pageNumber) + 1))
  //             navigate(`/page/${parseInt(pageNumber) + 1}`)
  //           }}
  //         >
  //           <MdArrowForwardIos />
  //         </Button>
  //       </Box>
  //     </HStack>
  //   </>
  // );
};

export default Pagination;
