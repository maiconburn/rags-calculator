/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useRouter } from "next/router";
import Button from "@material-ui/core/Button";
import styles from "../styles/components/NavBar.module.scss";

function ButtonActive(props) {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push(props.href);
  };
  return (
    <Button
      href={props.href}
      className={
        props.buttonClass == "buttonGetStarted"
          ? styles.buttonGetStarted
          : styles.buttonActive
      }
      target={props.target}
      color={props.color}
      onClick={handleClick}
    >
      {props.children}
    </Button>
  );
}

export default ButtonActive;
