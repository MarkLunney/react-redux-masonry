import * as types from "../actions/header";

export default function header(
  state = {
    isFetching: true,
    didInvalidate: false,
    title: "",
    subtitle: "",
    icons: []
  },
  action
) {
  switch (action.type) {
    case types.REQUEST_HEADER:
      return { ...state, isFetching: true, didInvalidate: false };
    case types.RECEIVE_HEADER:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        title: action.title,
        subtitle: action.subtitle,
        icons: action.icons,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
}
