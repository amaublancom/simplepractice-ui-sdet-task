/**
 * This file generates a unique client name per test run using a timestamp suffix.
*/

const timestamp = Date.now();

const clientData = {
  firstName: `AutoTest`,
  lastName: `Client${timestamp}`,
  fullName: `AutoTest Client${timestamp}`
};

module.exports = clientData;