/**
 * @author Ananthapadmanabhan V K
 * General constants for the application
 * This file contains reusable constants that can be used throughout the project
 * @returns Various constant objects organized by category
 */

// ============================================
// DATE & TIME FORMATS
// ============================================
export const DATE_FORMATS = {
  DISPLAY: 'DD/MM/YYYY',
  DISPLAY_WITH_TIME: 'DD/MM/YYYY HH:mm',
  API: 'YYYY-MM-DD',
  API_WITH_TIME: 'YYYY-MM-DDTHH:mm:ss',
} as const;

// ============================================
// PAGINATION CONSTANTS
// ============================================
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  DEFAULT_PAGE_NUMBER: 1,
  PAGE_SIZE_OPTIONS: [5, 10, 20, 50, 100],
  MAX_PAGE_SIZE: 100,
  MIN_PAGE_SIZE: 5,
} as const;

// ============================================
// VALIDATION LIMITS
// ============================================
export const VALIDATION = {
  MIN_PASSWORD_LENGTH: 8,
  MAX_PASSWORD_LENGTH: 128,
  MIN_USERNAME_LENGTH: 3,
  MAX_USERNAME_LENGTH: 50,
  MAX_EMAIL_LENGTH: 255,
  MAX_NAME_LENGTH: 100,
} as const;
