import React from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 350 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
  description: {
    fontWeight: "bold",
  },
}));

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 100,
    label: "100",
  },
  {
    value: 200,
    label: "200",
  },
  {
    value: 300,
    label: "300",
  },
  {
    value: 400,
    label: "400",
  },
  {
    value: 500,
    label: "500",
  },
  {
    value: 600,
    label: "600",
  },
  {
    value: 700,
    label: "700",
  },
  {
    value: 800,
    label: "800",
  },
  {
    value: 900,
    label: "900",
  },
  {
    value: 1000,
    label: "1000",
  },
];

const CustomSlider = withStyles({
  root: {
    color: "#b1ca39",
    height: 8,
    marginTop: "40px",
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
  },
  rail: {
    height: 8,
    paddingRight: "2px",
  },
  mark: {
    top: "21px",
  },
})(Slider);

export default function CustomizedSlider(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    window.localStorage.setItem(props.variable, JSON.stringify(value));
    console.log(props.variable, value);
    const test = window.localStorage.getItem(props.variable);
    console.log(test);
  }, [value]);

  return (
    <div className={classes.root}>
      <CustomSlider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-label="Slider"
        step={25}
        max={1000}
        marks={marks}
        defaultValue={20}
      />
    </div>
  );
}
