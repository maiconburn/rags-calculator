/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useRouter } from "next/router";
import Button from "@material-ui/core/Button";

function ButtonActive(props) {
  const router = useRouter();
  const style = {
    textDecoration: router.pathname === props.href ? "underline" : "none",
    height: "35px",
    margin: "7px 5px",
    borderRadius: "5px",
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(props.href);
  };

  return (
    <Button
      href={props.href}
      className={props.className}
      target={props.target}
      color={props.color}
      onClick={handleClick}
      style={style}
    >
      {props.children}
    </Button>
  );
}

export default ButtonActive;
