import { useTransition } from "react-spring";
import { LaunchedItem } from "../types";

type childrenProps = {
  styles: {};
  item: LaunchedItem;
};

type TransitionProps = {
  data: LaunchedItem[];
  children: ({}: childrenProps) => React.ReactNode;
};

const Transition = ({ data, children }: TransitionProps) => {
  const transitions = useTransition(data, {
    from: { opacity: 0, transform: "translateY(-20px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { display: "none" },
    keys: (item) => item.id,
  });

  return transitions((styles, item) => children({ styles, item }));
};

export default Transition;
