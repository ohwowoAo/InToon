"use client";

import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";

const EpisodeList = () => {
  const haaaa = useSearchParams();
  const router = useRouter();
  // const { query } = router;
  const [webtoons, setWebtoons] = useState([]);

  useEffect(() => {
    // if (pathname) {
    fetchWebtoons();
    // }
  }, []);

  console.log(haaaa);
  // console.log(query.webtoonID);
  console.log(router);

  const fetchWebtoons = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/webtoon/649aaf46f9e21e039e548e0a`
      );
      setWebtoons(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return <Wrapper></Wrapper>;
};

export default EpisodeList;

const Wrapper = styled.div`
  width: 600px;
  height: 500px;
  margin: 50px auto;
  border: 1px solid red;
`;
