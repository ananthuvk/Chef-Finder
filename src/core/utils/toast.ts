/**
 * @author Ananthapadmanabhan V K
 * Toast utility for the application
 * This file contains the toast utility for the application
 * @returns TOAST_CONFIG object with the toast configuration
 * @param message - The message to display
 * @param options - The options to display the toast
 */

import { toast } from 'react-toastify';

const TOAST_AUTO_CLOSE = Number(import.meta.env.VITE_TOAST_AUTO_CLOSE) || 5000;
const TOAST_POSITION = (import.meta.env.VITE_TOAST_POSITION as any) || 'top-right';

export const TOAST_CONFIG = {
  position: TOAST_POSITION,
  autoClose: TOAST_AUTO_CLOSE,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

/**
 * Shows an error toast message
 * @param message - The error message to display
 * @param options - Optional toast configuration
 */
export const showErrorToast = (message: string, options?: Partial<typeof TOAST_CONFIG>) => {
  toast.error(message, { ...TOAST_CONFIG, ...options });
};

/**
 * Shows a success toast message
 * @param message - The success message to display
 * @param options - Optional toast configuration
 */
export const showSuccessToast = (message: string, options?: Partial<typeof TOAST_CONFIG>) => {
  toast.success(message, { ...TOAST_CONFIG, ...options });
};

/**
 * Shows an info toast message
 * @param message - The info message to display
 * @param options - Optional toast configuration
 */
export const showInfoToast = (message: string, options?: Partial<typeof TOAST_CONFIG>) => {
  toast.info(message, { ...TOAST_CONFIG, ...options });
};

/**
 * Shows a warning toast message
 * @param message - The warning message to display
 * @param options - Optional toast configuration
 */
export const showWarningToast = (message: string, options?: Partial<typeof TOAST_CONFIG>) => {
  toast.warning(message, { ...TOAST_CONFIG, ...options });
};

/**
 * Extracts error message from API error response
 * @param error - The error object from axios/API
 * @param defaultMessage - Default message if error message cannot be extracted
 * @returns The extracted error message or default message
 */
export const extractErrorMessage = (error: any, defaultMessage?: string): string => {
  // Try to extract message from error response
  if (error?.response?.data?.message) {
    return error.response.data.message;
  }
  if (error?.response?.data?.error) {
    return error.response.data.error;
  }
  if (error?.response?.data?.errorMessage) {
    return error.response.data.errorMessage;
  }
  if (error?.message) {
    return error.message;
  }
  return defaultMessage || 'An unexpected error occurred';
};

/**
 * Shows error toast from API error response
 * @param error - The error object from axios/API
 * @param defaultMessage - Default message if error message cannot be extracted
 * @param options - Optional toast configuration
 */
export const showErrorToastFromError = (
  error: any,
  defaultMessage?: string,
  options?: Partial<typeof TOAST_CONFIG>
) => {
  const errorMessage = extractErrorMessage(error, defaultMessage);
  showErrorToast(errorMessage, options);
};
