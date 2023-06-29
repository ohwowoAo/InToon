// "use client";

// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import styled from "@emotion/styled";

// import axios from "axios";

// const EpisodeList = () => {
//   const [webtoons, setWebtoons] = useState([]);

//   useEffect(() => {
//     fetchWebtoons();
//   }, []);

//   const fetchWebtoons = async () => {
//     try {
//       const response = await axios.get("http://localhost:3001/webtoons");
//       setWebtoons(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   console.log(webtoons);
//   return (
//     <Wrapper>
//       <h1>웹툰리스트 들어갈예정</h1>
//       {webtoons.map((webtoon) => (
//         <div key={webtoon.id}>{webtoon.title}</div>
//       ))}
//     </Wrapper>
//   );
// };

// export default EpisodeList;

// const Wrapper = styled.div`
//   width: 600px;
//   height: 500px;
//   margin: 50px auto;
//   border: 1px solid red;
// `;
