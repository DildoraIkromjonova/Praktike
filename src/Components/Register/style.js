import styled from "styled-components";


 const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #333 50%, #fff 50%);
`;

 const Form = styled.form`
  width: 430px;
  background: #FFFFFF;
  box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  padding: 48px 28px;
  display: flex;
  flex-direction: column;
`;

 const Title = styled.h2`
  font-size: 36px;
  text-align: center;
  margin-bottom: 36px;
  font-weight: 600;
`;

 const SButton = styled.button`
  width: 100%;
  height: 44px;
  border: 1px solid #151515;
  border-radius: 4px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 16px;
  cursor: pointer;
  font-size: 14px;
`;


 const InputGroup = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

 const Label = styled.label`
  font-size: 14px;
  color: #151515;
`;

 const Input = styled.input`
  height: 44px;
  border: 1px solid #EBEBEB;
  border-radius: 4px;
  padding: 0 12px;
  outline: none;
  &:focus { 
  border-color:black;
   }
`;

 const Button= styled.button`
  width: 100%;
  height: 44px;
  background:black;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  margin-top: 12px;
  cursor: pointer;
`;

const Footer = styled.p`
  text-align: center;
  margin-top: 12px;
  font-size: 14px;
  color: #333;
  span { color:black;
   cursor: pointer; }
`;

export {Footer, SButton,Button,InputGroup,Input, Title,Form,Container,Label}
