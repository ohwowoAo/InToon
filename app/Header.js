// @refresh
// use client
"use client";

import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import Nav from "./Nav";

const Header = () => {
  return (
    <Wrapper>
      <div>
        <Link href="/">InToon</Link>
      </div>
      <div>검색창</div>
      <Nav />
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
