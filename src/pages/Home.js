import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import VideoCard from "../components/VideoCard";
import Skeleton from "../skeletons/HomeSkeleton";
import VideoGrid from "../styles/VideoGrid";
import { getRecommendation } from "../reducers/recommendation";
import Imagee from '../assets/loader.png'
export const StyledHome = styled.div`
  padding: 1.3rem;
  width: 90%;
  margin: 0 auto;
  padding-bottom: 7rem;

  h2 {
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 1093px) {
    width: 95%;
  }

  @media screen and (max-width: 1090px) {
    width: 99%;
  }

  @media screen and (max-width: 870px) {
    width: 90%;
  }

  @media screen and (max-width: 670px) {
    width: 99%;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }

  @media screen and (max-width: 530px) {
    width: 100%;
  }
`;

const Home = () => {
  const dispatch = useDispatch();
  const { isFetching, videos } = useSelector((state) => state.recommendation);

  useEffect(() => {
    dispatch(getRecommendation());
  }, [dispatch]);

  if (isFetching) {
    return <Skeleton title={true} />;
  }

  return (
    <>
    <StyledHome>
      <h2>Recommended</h2>
      {/* <div style={{display:'flex' , gridTemplateColumns:'repeat(3, 1fr)', gridGap:'2rem'}}> 
       <image src={Imagee} alt='ali' />
      </div> */}

      <VideoGrid> 
        {/* <img src={Ali} alt='aa' /> */}
        {!isFetching &&
          videos.map((video) => (
            <Link key={video.id} to={`/watch/${video.id}`}>
              <VideoCard video={video} />
            </Link>
          ))}
       </VideoGrid>
    </StyledHome>
    </>
  );
};

export default Home;
