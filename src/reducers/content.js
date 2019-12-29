import * as types from "../actions/content";

export default function content(
  state = {
    isFetching: true,
    didInvalidate: false,
    elements: []
  },
  action
) {
  switch (action.type) {
    case types.EXPAND:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        elements: state.elements.map(element => {
          if (element.id === action.expandedElement) {
            element.isExpanded = true;
          } else {
            element.isExpanded = false;
          }
          return element;
        }),
        lastUpdated: action.receivedAt
      };

    case types.REQUEST_CONTENT:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };

    case types.RECEIVE_CONTENT:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        elements: action.elements,
        lastUpdated: action.receivedAt
      };

    default:
      return state;
  }
}
