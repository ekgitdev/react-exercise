const TabButton = ({children, onSelect}) => {
 console.log(children)
    return (
      <li>
          {/** you write just function name because it will be executed in future by react, that s why not handleClick() */}
        <button onClick={onSelect}>{children}</button>
      </li>
    );
  };

  export default TabButton;