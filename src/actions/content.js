import uuid from "uuid";

export const EXPAND = "EXPAND";

export function expand(expandedElement) {
  return {
    type: EXPAND,
    expandedElement: expandedElement
  };
}

export const REQUEST_CONTENT = "REQUEST_CONTENT";

export function requestContent(content) {
  return {
    type: REQUEST_CONTENT,
    content
  };
}

export const RECEIVE_CONTENT = "RECEIVE_CONTENT";

export function receiveContent(json) {
  return {
    type: RECEIVE_CONTENT,
    json,
    elements: json.elements.map(element => {
      element.id = uuid.v4();

      return element;
    }),
    receivedAt: Date.now()
  };
}

export function content() {
  return async function(dispatch) {
    dispatch(requestContent());

    const response = await fetch("data/content.json");
    const json = await response.json();

    return dispatch(receiveContent(json));
  };
}
