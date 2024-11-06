import React from "react";
import { Button } from "antd";

interface ButtonProps {
  text?: string;
  disabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const Buttons: React.FC<ButtonProps> = ({
  text = "Default Button",
  onClick,
  style,
}) => {
  return (
    <Button onClick={onClick} style={style}>
      {text}
    </Button>
  );
};

export default Buttons;
