// @refresh
// use client
"use client";

import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

const Header = () => {
  return (
    <Wrapper>
      <div>
        <Link href="/home">InToon</Link>
      </div>
      <div>검색창</div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  margin: 20px auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
