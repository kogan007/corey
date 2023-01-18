import { SyntheticEvent, useReducer } from "react";
type State = {
  data: any;
  type: "init" | "loading" | "complete";
};

type Action = {
  data?: any;
  type: "reset" | "submit" | "complete";
};

const handleFormState = (state: State, action: Action): State => {
  switch (action.type) {
    case "submit": {
      return { ...state, type: "loading" };
    }
    case "complete": {
      return { ...state, type: "complete", data: action.data };
    }
    default: {
      return { ...state };
    }
  }
};
export default function useForm() {
  const [state, dispatch] = useReducer(handleFormState, {
    data: null,
    type: "init",
  });

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    //@ts-ignore
    const formAction = e.target.getAttribute("action");
    //@ts-ignore
    const formMethod = e.target.getAttribute("method");
    const formData = new FormData(e.currentTarget);
    dispatch({ type: "submit" });
    const data = await fetch(formAction, {
      method: formMethod,
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then((res) => res.json());
    dispatch({ type: "complete", data });
  };

  return {
    state,
    handleSubmit,
  };
}
