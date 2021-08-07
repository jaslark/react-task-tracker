import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  const onClickChange = () => {
    console.log("Click button");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onClickChange}
        onAdd={onAdd}
      />
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
