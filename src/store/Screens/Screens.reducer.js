const INITIAL_STATE = "LIST_PRODUCTS";
export default function screensReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "CHANGE_SCREEN":
      return action.payload;

    default:
      return state;
  }
}
