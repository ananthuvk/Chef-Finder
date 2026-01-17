/**
 * @author Ananthapadmanabhan V K
 * HTTP instance for unauthenticated requests
 * This file contains the axios instance without authentication interceptors
 * Used for login, refresh token, and other unauthenticated endpoints
 */

import axios from "axios";
import type { InternalAxiosRequestConfig } from "axios";
import { BASE_URL } from "../constants/api";
import { showErrorToastFromError } from "../utils/toast";

const unincepaxios = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-type": "application/json" },
  timeout: 10000,
});

const requestHandler = (request: any) => request;
const responseHandler = (response: any) => response;

const errorHandler = async (error: any) => {
  // Handle errors without auth token handling
  if (error?.response?.status === 400) {
    // Extract error message from API response (NOT hardcoded)
    showErrorToastFromError(error, "Bad Request");
  } else if (error?.response?.status === 403) {
    // Extract error message from API response (NOT hardcoded)
    showErrorToastFromError(error, "Not Authorized");
  } else if (error?.response?.status && error.response.status >= 500) {
    // Extract error message from API response (NOT hardcoded)
    showErrorToastFromError(error, "Server error - Please retry after some time");
  }
  return Promise.reject(error);
};

// Request interceptor - no auth token
unincepaxios.interceptors.request.use(
  function (config) {
    return requestHandler(config);
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Response interceptor - handles errors
unincepaxios.interceptors.response.use(
  function (response) {
    return responseHandler(response);
  },
  function (error) {
    return errorHandler(error);
  }
);

export default unincepaxios;
