import React,{useContext} from "react";

import Switch from "react-switch";
import {shade}from "polished"

import { Container } from "./styles";
import { ThemeContext } from "styled-components";

interface Props{
  toggleTheme():void;
}


const Header: React.FC<Props> = ({toggleTheme}) => {
  const { colors, title } = useContext(ThemeContext);
  return (
    <Container>
      Hello world
      <Switch
        onChange={toggleTheme}
        checked={title==="dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.1,colors.primary)}
        onColor={colors.secundary}
      />
    </Container>
  );
};

export default Header;
