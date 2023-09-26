import styled from "styled-components";
import backgroundImage from '../../assets/photoCreate.png'; 
import { ErrorMessage, Field } from "formik";

export const PageContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

export const LeftSection = styled.div`
  flex: 1;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  width: 60%;
`;

export const RightSection = styled.div`
  width: 40%;  
  padding: 80px;

`;

export const Forms = styled.form`
  width: 60%;

`;

export const Header = styled.h1`
color: #000;
text-align: center;
font-family: Figtree;
font-size: 50px;
font-style: normal;
font-weight: 500;
line-height: normal;
`

export const Input = styled(Field)`
display: flex;
width: 400px;
height: 60px;
padding: 10px 20px;
align-items: center;
gap: 20px;
border-radius: 10px;
border: 1px solid rgba(0, 0, 0, 0.40);
margin: 10px 0px;
`

export const Create = styled.button`
  width: 400px;
  height: 60px;
  padding: 0px 64px;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background: #000;
  color: #FFF;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
  margin-top: 10px;
`
export const LeftHeader = styled.h2`
  color: #FFF;
  font-family: Figtree;
  font-size: 50px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

export const LeftSectionContainer = styled.div`
  width: 80%;
  margin: 70px auto;
`

export const LeftDescription = styled.p`
  color: #FFF;
  font-family: Figtree;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const CreatAnAcount = styled.span`
  color: rgba(0, 0, 0, 0.40);
  font-family: Figtree;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`

export const Login = styled.a`
  color: #000;
  font-family: Figtree;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;
`

export const FinalySection = styled.p`
  color: #FFF;
/* Description */
font-family: Figtree;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top: 40%;
`

export const StyledErrorMsg = styled(ErrorMessage)`
  color: red;
  padding: 0;
`