import { useEffect } from "react";

const withLogger = (Component) => {
  const NewComponent = (props) => {
    useEffect(() => {
      console.log(`Component ${Component.name} mounted`);

      return () => {
        console.log(`Component ${Component.name} unmounted`);
      };
    }, []);

    useEffect(() => {
      console.log(`Component ${Component.name} updated`);
    });

    return <Component {...props} />;
  };

  return NewComponent;
};

export default withLogger;
