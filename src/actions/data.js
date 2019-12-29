import { content } from "./content";
import { header } from "./header";

export function requestData() {
  return dispatch => Promise.all([dispatch(header()), dispatch(content())]);
}
