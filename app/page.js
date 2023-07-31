"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styled from "@emotion/styled";

import axios from "axios";
import Nav from "./Nav";
// import { useSearchParams } from "react-router-dom";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const [webtoons, setWebtoons] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetchWebtoons();
  }, []);

  const fetchWebtoons = async () => {
    try {
      const response = await axios.get("http://localhost:3001/webtoon");
      setWebtoons(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(webtoons);
  return (
    <Wrapper>
      <Nav />
      <Contents>
        {/* <Link href="/episodeList">웹툰리스트 들어갈예정</Link> */}

        {webtoons.map((webtoon) => (
          <Item key={webtoon._id}>
            <Link
              href={{
                pathname: `/webtoon`,
                query: { webtoonID: `${webtoon._id}` },
              }}
              // to={{
              //   pathname: "/webtoon",
              //   search: searchParams.toString(),
              //   state: { webtoonID: `${webtoon._id}` },
              // }}
            >
              <img src={webtoon.thumbUrl} alt={webtoon.title}></img>
              <p>{webtoon.title}</p>
              <span>{webtoon.author}</span>
            </Link>
          </Item>
        ))}
      </Contents>
    </Wrapper>
  );
};

export default Page;

const Wrapper = styled.div`
  width: 600px;
  height: 500px;
  margin: 50px auto;
  /* border: 1px solid red; */
`;
const Contents = styled.div`
  margin: 30px 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Item = styled.div`
  width: calc(33.3% - 10px);
  margin-bottom: 20px;
`;
