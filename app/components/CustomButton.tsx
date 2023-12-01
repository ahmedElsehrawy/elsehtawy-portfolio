import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  icon?: JSX.Element;
  style?: any;
}

const CustomButton = (props: Props) => {
  return (
    <Button style={props.style}>
      <span>{props.title}</span>
      {props.icon && props.icon}
    </Button>
  );
};

const Button = styled.button`
  padding: 20px 20px;
  font-size: 13px;
  background-color: #f06000;
  color: #fff;
  border: none;
  margin: 30px;
  transition: all 0.4s ease-in-out 0s;
  line-height: 10px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    color: #f06000;
    background: #fff;
  }
`;

export default CustomButton;
