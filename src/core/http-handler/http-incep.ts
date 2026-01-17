/**
 * @author Ananthapadmanabhan V K
 * HTTP interceptor for authenticated requests
 * This file contains the axios instance with request/response interceptors
 */

import axios from "axios";
import type { InternalAxiosRequestConfig } from "axios";
import { BASE_URL } from "../constants/api";
import { showErrorToastFromError } from "../utils/toast";

const mainAxios = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-type": "application/json" },
  timeout: 10000,
});

const requestHandler = (request: any) => request;
const responseHandler = (response: any) => response;

const errorHandler = async (error: any) => {
  const originalRequest = error.config as (InternalAxiosRequestConfig & { _retry?: boolean }) | undefined;

  // Handle 401 Unauthorized - Token expired (with token refresh logic)
  if (error?.response?.status === 401 && originalRequest) {
    // Token refresh logic here...
    // If refresh fails, redirect to login
    localStorage.clear();
    window.location.href = "/login";
    return Promise.reject(error);
  } else if (error?.response?.status === 400) {
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

// Request interceptor - adds auth token
mainAxios.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = "Bearer " + accessToken;
    }
    return requestHandler(config);
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Response interceptor - handles errors
mainAxios.interceptors.response.use(
  function (response) {
    return responseHandler(response);
  },
  function (error) {
    return errorHandler(error);
  }
);

export default mainAxios;
