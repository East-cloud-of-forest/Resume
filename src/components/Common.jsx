import classNames from "classnames";
import "../style/Common.scss";

export const Button = ({
  children,
  white,
  circle,
  width,
  className,
  onClick,
}) => {
  return (
    <div
      className={classNames(
        "Button",
        white && "white",
        circle && "circle",
        className
      )}
      style={{ width: width }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export const Title = ({ children, location }) => {
  return (
    <a className="Title" href={location?location + "#" + children:"#" + children}>
      {children}
      <div className="anchor" id={children}></div>
      <div className="box"></div>
    </a>
  );
};
