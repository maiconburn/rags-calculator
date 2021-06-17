import React from "react";
import PropTypes from "prop-types";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
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

const CustomSlider = withStyles({
  root: {
    color: "#185D24",
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
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    window.localStorage.setItem(props.variable, value);
  }, [value]);

  return (
    <div className={classes.root}>
      <CustomSlider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-label="Slider"
        step={props.step}
        max={props.max}
        marks={props.marks}
        defaultValue={20}
      />
    </div>
  );
}
