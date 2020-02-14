
export const IS_DEV = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

export const BASE_NAME = IS_DEV ? '' : '/zones';

// TODO: set backend URL
// const URL = 'http://localhost:4000';
const URL = 'https://zone-properties.herokuapp.com';


export const API = (model = undefined, id = undefined) => {
  if (model && id) {
    return `${URL}/api/${model}/${id}/`;
  }
  if (model) {
    return `${URL}/api/${model}/`;
  }
  return `${URL}/api/`;
};
