/**
 * @author Ananthapadmanabhan V K
 * RegisterService service for the application
 * This file contains the register service for the application
 * @returns RegisterService class with register, verifyEmail, resendVerification methods
 */

import API_ROUTES from "../constants/api";
import HttpUtil from "../http-handler/http-util";

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  userType: "chef" | "employer";
}

export interface VerifyEmailRequest {
  token: string;
}

export default class RegisterService {
  /**
   * Register a new user
   * @param registerData - Registration data including firstName, lastName, email, phoneNumber, password, userType
   * @returns Promise with registration response
   */
  static register(registerData: RegisterRequest) {
    return HttpUtil.uniterceptedPost(API_ROUTES.REGISTER.REGISTER, registerData);
  }

  // /**
  //  * Verify user email with verification token
  //  * @param token - Email verification token
  //  * @returns Promise with verification response
  //  */
  // static verifyEmail(token: string) {
  //   const url = API_ROUTES.REGISTER.VERIFY_EMAIL.replace("<token>", token);
  //   return HttpUtil.uniterceptedPost(url, {});
  // }

  // /**
  //  * Resend email verification
  //  * @param email - User email address
  //  * @returns Promise with resend verification response
  //  */
  // static resendVerification(email: string = "") {
  //   return HttpUtil.uniterceptedPost(API_ROUTES.REGISTER.RESEND_VERIFICATION, { email });
  // }
}
