"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";

const EpisodeList = () => {
  const haaaa = useSearchParams();
  const router = useRouter();
  // const { query } = router;
  const [webtoons, setWebtoons] = useState([]);
  const currentURL = window.location.href;
  const url = new URL(currentURL);
  const searchParams = new URLSearchParams(url.search);
  const webtoonID = searchParams.get("webtoonID");

  useEffect(() => {
    if (currentURL) {
      fetchWebtoons();
    }
  }, []);

  console.log(haaaa);
  // console.log(query.webtoonID);
  console.log(router);

  const fetchWebtoons = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/webtoon/${webtoonID}`
      );
      setWebtoons(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  console.log("webtoons", webtoons);
  return (
    <Wrapper>
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

export default EpisodeList;

const Wrapper = styled.div`
  width: 600px;
  height: 500px;
  margin: 50px auto;
  border: 1px solid red;
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
