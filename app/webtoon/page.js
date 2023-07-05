"use client";

import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { usePathname, useRouter } from "next/navigation";

const EpisodeList = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { query } = router;
  const [webtoons, setWebtoons] = useState([]);

  console.log(pathname);
  console.log(query);
  console.log(router);
  useEffect(() => {
    if (pathname) {
      fetchWebtoons();
    }
  }, [pathname]);

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
