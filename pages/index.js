import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";

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
  const renderData = () => data.map(v => <li key={v.id}>{v.name}</li>);

  
  return (
    <>
      <Nav name={name} />
      <ul>{data === [] ? null : renderData()}</ul>
    </>
  );
};
