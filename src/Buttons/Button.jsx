export default function Button({ children, className, mode = "filled", Icon, ...props }) {
  let type = "button ";

  let cssClasses = `button ${mode}-button`;
   
  if (className) {
    cssClasses += ' ' + className;
  }

  if (Icon) {
    type += "icon-button";
  }

  return (
    <button className={cssClasses} {...props}>
      {Icon && (
        <span className="button-icon">
          <Icon />
        </span>
      )}
      <span>{children}</span>
    </button>
  );
}
