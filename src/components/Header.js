import PropTypes from "prop-types";
import { useLocation } from "react-router";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  const onClickChange = () => {
    console.log("Click button");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onClickChange}
          onAdd={onAdd}
        />
      )}

      {/* <h1 style={headingStyle}>{title}</h1>
            <span style={{color: 'white', backgroundColor: 'black'}}>ABC</span> */}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS in Javascript
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header;
