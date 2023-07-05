"use client";

import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const EpisodeList = () => {
  const router = useRouter();
  const [title, id] = router.query.params;
  const [webtoons, setWebtoons] = useState([]);

  useEffect(() => {
    if (id) {
      fetchWebtoons();
    }
  }, [id]);

  const fetchWebtoons = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/webtoon/${webtoonId}`
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
