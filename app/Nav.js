"use client";

import Link from "next/link";
import Header from "./Header";
import styled from "@emotion/styled";

const Nav = () => {
  return (
    <Wrapper>
      {/* <Header /> */}
      <WeekList>
        <li>월</li>
        <li>화</li>
        <li>수</li>
        <li>목</li>
        <li>금</li>
        <li>토</li>
        <li>일</li>
      </WeekList>
      <SortList>
        <li>조회순</li>
        <li>별점순</li>
        <li>업데이트순</li>
        <li>제목순</li>
      </SortList>
    </Wrapper>
  );
};

export default Nav;

const Wrapper = styled.ul`
  width: 600px;
  margin: 0 auto;
`;

const WeekList = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
`;
const SortList = styled.ul`
  display: flex;
  gap: 15px;
  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 1px;
    background-color: #fff;
  }
`;
