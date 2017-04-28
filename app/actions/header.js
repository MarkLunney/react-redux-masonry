import uuid from 'uuid';

export const REQUEST_HEADER = 'REQUEST_HEADER'

export function requestHeader(header) {
  return {
    type: REQUEST_HEADER,
    header
  }
}

export const RECEIVE_HEADER = 'RECEIVE_HEADER'

export function receiveHeader(json) {
  
  return {
    type: RECEIVE_HEADER,
    json,
    title: json.title,
    subtitle: json.subtitle,
    icons: json.icons.map(icon => {
          icon.id = uuid.v4();

          return icon;
      }),
    receivedAt: Date.now()
  }
}


export function header() {
  return function (dispatch) {
    
    dispatch(requestHeader())

    return fetch('data/header.json')
      .then(response => response.json())
      .then(json =>
        dispatch(receiveHeader(json))
      )
      
  }
}