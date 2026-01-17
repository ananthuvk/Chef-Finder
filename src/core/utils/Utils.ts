/**
 * @author Ananthapadmanabhan V K
 * Validation utility functions for form fields
 * These functions return error messages (translation keys) that should be used with the t() function
 */

export interface ValidationResult {
  isValid: boolean;
  errorMessage?: string;
}

/**
 * Validates if a required field has a value
 * @param value - The value to validate
 * @param fieldName - Optional field name for error message
 * @returns ValidationResult with isValid and optional errorMessage
 */
export const validateRequired = (value: string | null | undefined, fieldName?: string): ValidationResult => {
  if (!value || value.trim() === '') {
    return {
      isValid: false,
      errorMessage: fieldName ? `Validation.${fieldName}Required` : 'Validation.fieldRequired',
    };
  }
  return { isValid: true };
};

/**
 * Validates email format
 * @param email - The email address to validate
 * @returns ValidationResult with isValid and optional errorMessage
 */
export const validateEmail = (email: string | null | undefined): ValidationResult => {
  if (!email || email.trim() === '') {
    return {
      isValid: false,
      errorMessage: 'Validation.emailRequired',
    };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      isValid: false,
      errorMessage: 'Validation.emailInvalid',
    };
  }
  return { isValid: true };
};

/**
 * Validates phone number format
 * @param phone - The phone number to validate
 * @returns ValidationResult with isValid and optional errorMessage
 */
export const validatePhone = (phone: string | null | undefined): ValidationResult => {
  // Phone number is required
  if (!phone || phone.trim() === '') {
    return {
      isValid: false,
      errorMessage: 'Phone number is required',
    };
  }

  // Phone number must be a string
  if (typeof phone !== 'string') {
    return {
      isValid: false,
      errorMessage: 'Phone number must be a string',
    };
  }

  const trimmedPhone = phone.trim();

  // Phone number must be between 7 and 20 characters
  if (trimmedPhone.length < 7 || trimmedPhone.length > 20) {
    return {
      isValid: false,
      errorMessage: 'Phone number must be between 7 and 20 characters',
    };
  }

  // Invalid phone number format - allows digits, spaces, hyphens, plus, and parentheses
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  if (!phoneRegex.test(trimmedPhone)) {
    return {
      isValid: false,
      errorMessage: 'Invalid phone number format',
    };
  }

  return { isValid: true };
};

/**
 * Validates password strength
 * @param password - The password to validate
 * @returns ValidationResult with isValid and optional errorMessage
 */
export const validatePassword = (password: string | null | undefined): ValidationResult => {
  if (!password || password.trim() === '') {
    return {
      isValid: false,
      errorMessage: 'Password is required',
    };
  }

  // Password must contain at least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    return {
      isValid: false,
      errorMessage: 'Password must contain at least one uppercase letter',
    };
  }

  // Password must contain at least one lowercase letter
  if (!/[a-z]/.test(password)) {
    return {
      isValid: false,
      errorMessage: 'Password must contain at least one lowercase letter',
    };
  }

  return { isValid: true };
};

/**
 * Validates minimum length of a string
 * @param value - The value to validate
 * @param minLength - The minimum required length
 * @param fieldName - Optional field name for error message
 * @returns ValidationResult with isValid and optional errorMessage
 */
export const validateMinLength = (
  value: string | null | undefined,
  minLength: number,
  fieldName?: string
): ValidationResult => {
  if (!value || value.trim().length < minLength) {
    return {
      isValid: false,
      errorMessage: fieldName
        ? `Validation.${fieldName}MinLength`
        : `Validation.minLength`,
    };
  }
  return { isValid: true };
};

/**
 * Validates maximum length of a string
 * @param value - The value to validate
 * @param maxLength - The maximum allowed length
 * @param fieldName - Optional field name for error message
 * @returns ValidationResult with isValid and optional errorMessage
 */
export const validateMaxLength = (
  value: string | null | undefined,
  maxLength: number,
  fieldName?: string
): ValidationResult => {
  if (value && value.length > maxLength) {
    return {
      isValid: false,
      errorMessage: fieldName
        ? `Validation.${fieldName}MaxLength`
        : `Validation.maxLength`,
    };
  }
  return { isValid: true };
};
