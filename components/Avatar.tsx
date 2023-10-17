import { useEffect, useState } from "react";
import styled from "styled-components/native";

export default function Avatar() {
  const [userInfo, setUserInfo] = useState({
    photo: "https://thinksport.com.au/wp-content/uploads/2020/01/avatar-.jpg",
  });

  const fetchUser = async () => {
    const user = await fetch("https://randomuser.me/api/");
    const res = await user.json();
    setUserInfo({ photo: res.results[0].picture.medium });
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return <Image source={{ uri: userInfo.photo }} />;
}
const Image = styled.Image`
  width: 50px;
  height: 50px;
  background: black;
  border-radius: 25px;
`;
