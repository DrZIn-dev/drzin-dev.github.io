import React from "react";
import styled from "styled-components";
import { Grid } from "@material-ui/core";

export default () => {
  let [name, setName] = React.useState("asd");
  let [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch("https://api.github.com/users/DrZIn-dev/repos")
      .then(res => res.json())
      .then(data => {
        setData(data);
        console.log(data);
      });
  }, []);

  const IndexWrapper = styled.div`
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    background-color: #4a5c5c;
  `;
  const AboutWrapper = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
    min-width: 100vw;
    min-height: 100vh;
    z-index: -1;
    background-color: #4a5c5c;
  `;
  const renderData = () => data.map(v => <li key={v.id}>{v.name}</li>);
  const AboutMeHeader = styled.h1`
    font-family: Lato;
    font-style: normal;
    font-weight: 900;
    font-size: 64px;
    line-height: 77px;
    color: #ffffff;
  `;

  const ParagraphText = styled.div`
    font-family: Lato;
    font-style: normal;
    font-weight: 300;
    font-size: 36px;
    line-height: 43px;
    text-align: center;

    color: #ffffff;
  `;
  return (
    <AboutWrapper>
      <style jsx global>{`
        body {
          margin: 0;
          padding: 0;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.8;
          color: #333;
          font-family: sans-serif;
        }
      `}</style>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <AboutMeHeader>ABOUT ME</AboutMeHeader>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} justify="center">
          <diV style={{ display: "flex", justifyContent: "center" }}>
            <img src={require("../public/static/profile.png")} />
          </diV>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} justify="flex-start">
          <ParagraphText>Hello , My name is PASAWEE LAEARUN</ParagraphText>
          <br></br>
          <br></br>
          <ParagraphText style={{ fontSize: "24px" }}>
            STORY ALWAYS TOLD BY WORD MEMMORIAL ALWAYS KEEP IN PHOTO LIFE IS A
            PHOTO EVERY SECONDS ARE JOURNALS MY STRORY KEEP IN ON PHOTO
          </ParagraphText>
        </Grid>
      </Grid>
    </AboutWrapper>
  );
};
