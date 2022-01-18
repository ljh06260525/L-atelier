import React from "react";
import styled from "styled-components";
import {Grid} from "../elements";
const Nav = (props) => {

  //스타일 컴포넌트 이용 시 스타일 충돌로 적용 오류
  //인라인 스타일을 주니 현상 해결
const ulStyle={
    //display: "inline-block",
    margin: "0",
    padding: "0",
    fontWeight: "normal",
    lineHeight: "160%",
    display: "flex",
    justifyContent: "space-between",
  }
    const liStyle = {
        listStyle: "none",
        position: "relative",
        display: "inline-block",
        height: "50px",
        lineHeight: "50px",
        textAlign: "center",
        fontSize: "16px",
        fontWeight: "bold",
      }
    const aStyle={
        textDecoration: "none",
        height: "50px",
        display: "block",
        padding: "0px 30px",
        cursor: "pointer",
      }
  return (
    <React.Fragment>
      <Grid
          is_flex
          width="1000px"
          margin="0 auto"
        >
      <ul
        style={ulStyle}
      >
        <li
          style={liStyle}
        >
          <a
            style={aStyle}
          >
            전체보기
          </a>
        </li>
        <li
          style={liStyle}
        >
          <a
            style={aStyle}
          >
            DIY 클래스
          </a>
        </li>
        <li
          style={liStyle}
        >
          <a
            style={aStyle}
          >
            인기 클래스
          </a>
        </li>
        <li
          style={liStyle}
        >
          <a
            style={aStyle}
          >
            특가&이벤트
          </a>
        </li>
        <li
          style={liStyle}
        >
          <a
            style={aStyle}
          >
            DIY 스토어
          </a>
        </li>
        <li
          style={liStyle}
        >
          <a
            style={aStyle}
          >
            주문 제작
          </a>
        </li>
        <li
          style={liStyle}
        >
          <a
            style={aStyle}
          >
            고객센터
          </a>
        </li>
        <li
          style={liStyle}
        >
          <a
            style={aStyle}
          >
            공지사항
          </a>
        </li>
      </ul>
      </Grid>
    </React.Fragment>
  );
};

export default Nav;
