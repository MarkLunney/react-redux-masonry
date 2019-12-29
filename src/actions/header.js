import uuid from "uuid";

export const REQUEST_HEADER = "REQUEST_HEADER";

export function requestHeader(header) {
  return {
    type: REQUEST_HEADER,
    header
  };
}

export const RECEIVE_HEADER = "RECEIVE_HEADER";

export function receiveHeader(json) {
  return {
    type: RECEIVE_HEADER,
    json,
    title: json.title,
    subtitle: json.subtitle,
    icons: json.icons.map(icon => ({
      ...icon,
      id: uuid.v4()
    })),
    receivedAt: Date.now()
  };
}

export function header() {
  return async function(dispatch) {
    dispatch(requestHeader());

    const response = await fetch("data/header.json");
    const json = await response.json();

    return dispatch(receiveHeader(json));
  };
}
