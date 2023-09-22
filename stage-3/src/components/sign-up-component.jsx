import { Link } from "react-router-dom";
import "../styles/sign-up-component.css";
import React, { useState } from "react";

export default function SignUpComponent({
    onSignUpFormSubmit,
    onLoginInsteadClicked,
}) {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [validationStatus, setValidationStatus] = useState({
        fullNameValid: false,
        emailValid: false,
        passwordValid: false,
        confirmPasswordValid: false,
        isSubmitted: false, // Track if the form is submitted
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const fullNameValid = formData.fullName.trim() !== "";
        const emailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
            formData.email
        );
        const passwordValid = formData.password.trim() !== "";
        const confirmPasswordValid = formData.confirmPassword === formData.password;

        setValidationStatus({
            fullNameValid,
            emailValid,
            passwordValid,
            confirmPasswordValid,
            isSubmitted: true,
        });

        // If all fields are valid, pass the formData to the parent component
        if (fullNameValid && emailValid && passwordValid && confirmPasswordValid) {
            onSignUpFormSubmit(formData); // Call the function passed as a prop
        }
    };

    // Function to determine whether to show the check icon
    const shouldShowCheckIcon = (fieldName) => {
        return (
            validationStatus.isSubmitted &&
            formData[fieldName] &&
            validationStatus[fieldName + "Valid"]
        );
    };

    return (
        <>
            <div id="sign-up-container">
                <div id="sign-up-container__Top">
                    <h2>Sign Up</h2>
                </div>
                <div id="sign-up-container__Middle">
                    <form onSubmit={handleSubmit}>
                        {/* Full Name Input */}
                        <div className="input-container">
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                required
                                className={
                                    validationStatus.isSubmitted &&
                                        !validationStatus.fullNameValid
                                        ? "invalid"
                                        : ""
                                }
                            />
                            <div className="input-container__Right">
                                {/* If validation correct */}
                                {shouldShowCheckIcon("fullName") && (
                                    <i
                                        className="fa-regular fa-circle-check"
                                        style={{ color: "green" }}
                                    ></i>
                                )}
                                {/* If validation NOT correct */}
                                {validationStatus.isSubmitted &&
                                    !validationStatus.fullNameValid && (
                                        <>
                                            <i
                                                className="fa-regular fa-circle-xmark"
                                                style={{ color: "red" }}
                                            ></i>
                                            <p className="error">Full Name is required</p>
                                        </>
                                    )}
                            </div>
                        </div>

                        {/* Email Input */}
                        <div className="input-container">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className={
                                    validationStatus.isSubmitted && !validationStatus.emailValid
                                        ? "invalid"
                                        : ""
                                }
                            />
                            <div className="input-container__Right">
                                {/* If validation correct */}
                                {shouldShowCheckIcon("email") && (
                                    <i
                                        className="fa-regular fa-circle-check"
                                        style={{ color: "green" }}
                                    ></i>
                                )}
                                {/* If validation NOT correct */}
                                {validationStatus.isSubmitted &&
                                    !validationStatus.emailValid && (
                                        <>
                                            <i
                                                className="fa-regular fa-circle-xmark"
                                                style={{ color: "red" }}
                                            ></i>
                                            <p className="error">Invalid email address</p>
                                        </>
                                    )}
                            </div>
                        </div>

                        {/* Password Input */}
                        <div className="input-container">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                                className={
                                    validationStatus.isSubmitted &&
                                        !validationStatus.passwordValid
                                        ? "invalid"
                                        : ""
                                }
                            />
                            <div className="input-container__Right">
                                {/* If validation correct */}
                                {shouldShowCheckIcon("password") && (
                                    <i
                                        className="fa-regular fa-circle-check"
                                        style={{ color: "green" }}
                                    ></i>
                                )}
                                {/* If validation NOT correct */}
                                {validationStatus.isSubmitted &&
                                    !validationStatus.passwordValid && (
                                        <>
                                            <i
                                                className="fa-regular fa-circle-xmark"
                                                style={{ color: "red" }}
                                            ></i>
                                            <p className="error">Password is required</p>
                                        </>
                                    )}
                            </div>
                        </div>

                        {/* Confirm Password Input */}
                        <div className="input-container">
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                required
                                className={
                                    validationStatus.isSubmitted &&
                                        !validationStatus.confirmPasswordValid
                                        ? "invalid"
                                        : ""
                                }
                            />
                            <div className="input-container__Right">
                                {/* If validation correct */}
                                {shouldShowCheckIcon("confirmPassword") && (
                                    <i
                                        className="fa-regular fa-circle-check"
                                        style={{ color: "green" }}
                                    ></i>
                                )}
                                {/* If validation NOT correct */}
                                {validationStatus.isSubmitted &&
                                    !validationStatus.confirmPasswordValid && (
                                        <>
                                            <i
                                                className="fa-regular fa-circle-xmark"
                                                style={{ color: "red" }}
                                            ></i>
                                            <p className="error" style={{ color: "red" }}>
                                                Password Mismatch
                                            </p>
                                        </>
                                    )}
                            </div>
                        </div>

                        {formData.passwordMatchError && (
                            <p className="error">{formData.passwordMatchError}</p>
                        )}
                        <div>
                            <button type="submit">Sign Up</button>
                        </div>
                    </form>
                </div>
                <div id="sign-up-container__Bottom">
                    <p>
                        I have an account{" "}
                        <Link style={{ color: "#A6955F" }} onClick={onLoginInsteadClicked}>
                            login
                        </Link>{" "}
                        instead
                    </p>
                </div>
            </div>
        </>
    );
}
