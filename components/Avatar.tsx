import { useState } from "react";
import styled from "styled-components/native";
import { useGetUserInfoQuery } from "../redux/features/userInfo";

export default function Avatar() {
  const { data, isLoading } = useGetUserInfoQuery("");

  const uriImage = isLoading
    ? "https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg"
    : data.results[0].picture.medium;

  return <Image source={{ uri: uriImage }} />;
}
const Image = styled.Image`
  width: 50px;
  height: 50px;
  background: black;
  border-radius: 25px;
`;
