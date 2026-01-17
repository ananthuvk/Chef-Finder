/// <reference types="vite/client" />

/**
 * @author Ananthapadmanabhan V K
 * API constants for the application
 * This file contains the API constants for the application
 * @returns API_ROUTES object with the API constants
 */

const API_PATH = "/api/v1/";
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

if (!apiBaseUrl) {
  if (import.meta.env.DEV) {
    console.warn(
      '⚠️ VITE_API_BASE_URL is not defined in .env file.\n' +
      'Please create a .env file in the frontend directory with:\n' +
      'VITE_API_BASE_URL=http://localhost:3040\n' +
      'The application may not work correctly without this variable.'
    );
  }
}

export const BASE_URL = apiBaseUrl || '';

const API_ROUTES = {
  REGISTER: {
    REGISTER: API_PATH + "public/register"
  },
};

export default API_ROUTES;
