import React from "react";
import styled from "styled-components";
import { Grid, Text, Image, Input } from "../elements";
import { history } from "../redux/configStore";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import Nav from "./Nav";
import { getCookie } from "../shared/Cookie";
import logoimg from "./images/logoimg.png";

const Header = (props) => {
  const dispatch = useDispatch();
  const user_info = useSelector((state) => state.user.user);
  const is_login = getCookie("is_login");

  if ( //로그인, 회원가입 화면에서는 헤더를 보여주지 않음.
    window.location.pathname === "/login" ||
    window.location.pathname === "/register"
  )
    return null;

  const spanStyle = {
    lineHeight: "40px",
    color: "rgb(161, 161, 161)",
    fontSize: "13px",
    margin: "0 10px 0 5px",
  };
  const strongSt = {
    color: "rgb(239, 239, 239)",
    fontSize: "13px",
  };
  const liSt = {
    listStyle: "none",
    display: "inline-block",
    margin: "10px auto",
    height: "14px",
    fontSize: "12px",
    lineHeight: "14px",
    position: "relative",
    cursor: "pointer",
  };
  const searchBox = {
    width: "250px",
    height: " 35px",
    padding: " 5px 10px",
    fontWeight: "500",
    fontSize: "14px",
    border: "1px solid rgb(216, 216, 216)",
    color: "rgb(255, 111, 97)",
    boxLines: "border-box",
    backgroundImage: `url("https://danoshop.net/mall/upload/resource/common/danoshop-search-ic@.png")`,
    backgroundSize: "15px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "95% 50%",
    paddingLeft: "10px",
    boxSizing: "border-box",
    letterSpacing: "-0.3px",
  };

  return (
    <Grid>
      <Grid padding="0 20px" width="1100px" margin="0 auto">
        <span style={spanStyle}>라뜨리에 소개</span>
        <strong style={strongSt}>|</strong>

        <span style={spanStyle}>나의 라뜨리에</span>

        <ul
          style={{
            display: "inline-block",
            float: "right",
            margin: "0",
            padding: "0",
          }}
        >
          {user_info ? (
            <li style={liSt}>
              <a
                style={{ textDecoration: "none", cursor: "pointer" }}
                onClick={() => {
                  document.location.href = "/login";
                }}
              >
                {user_info.nickname}님
              </a>
              <span style={{ margin: "0 13px" }}>|</span>
            </li>
          ) : (
            <li style={liSt}>
              <a
                style={{ textDecoration: "none", cursor: "pointer" }}
                onClick={() => {
                  document.location.href = "/login";
                }}
              >
                로그인
              </a>
              <span style={{ margin: "0 13px" }}>|</span>
            </li>
          )}
          {user_info ? (
            <li style={liSt}>
              <a
                style={{ textDecoration: "none", cursor: "pointer" }}
                onClick={() => {
                  dispatch(userActions.logOut());
                  history.replace("/");
                }}
              >
                로그아웃
              </a>
              <span style={{ margin: "0 13px" }}>|</span>
            </li>
          ) : (
            <li style={liSt}>
              <a
                style={{ textDecoration: "none", cursor: "pointer" }}
                onClick={() => {
                  document.location.href = "/register";
                }}
              >
                회원가입
              </a>
              <span style={{ margin: "0 13px" }}>|</span>
            </li>
          )}

          <li style={liSt}>
            <a style={{ textDecoration: "none" }}>나의 DIY</a>
            <span style={{ margin: "0 13px" }}>|</span>
          </li>
          <li style={liSt}>
            <a
              onClick={() => {
                history.push("/cart");
              }}
              style={{ textDecoration: "none" }}
            >
              위시리스트
            </a>
            <span style={{ margin: "0 13px" }}>|</span>
          </li>
          <li style={liSt}>
            <a style={{ textDecoration: "none" }}>Q&A</a>
            <span style={{ margin: "0 13px" }}>|</span>
          </li>
        </ul>
      </Grid>
      <Grid
        is_flex
        padding="50px 30px 0px 0px"
        width="1100px"
        height="150px"
        margin="0 auto"
      >

        <img
          onClick={() => {
            history.push("/");
          }}
          width="300px"
          height="300px"
          src={logoimg}
        />

        <Grid width="250px" height="116">
          <Grid width="auto">
            <input style={searchBox} placeholder="드로잉" />
          </Grid>
          <Text bold size="12px" margin="13px 0 0 8px">
            *실시간 강의 안내{"   "}
            <strong style={{color: "rgb(255, 111, 97)"}}>
                 zoom 사용 방법
            </strong>
          </Text>
        </Grid>
      </Grid>

      <Grid width="100%" height="50px" bg="rgb(250, 248, 248)">
        <Nav />
      </Grid>
    </Grid>
  );
};

export default Header;
