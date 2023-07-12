const { REACT_APP_API_URL, API_URL } = process.env;


export const config = {
  API: REACT_APP_API_URL || API_URL,
}
