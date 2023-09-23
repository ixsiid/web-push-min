/**
 * @param {string} base64
 * @returns {boolean}
 */
export const validate = (base64) => /^[A-Za-z0-9\-_]+$/.test(base64);

export default {
  validate,
};