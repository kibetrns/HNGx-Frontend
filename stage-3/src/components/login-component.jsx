import { Link, useNavigate } from "react-router-dom";
import "../styles/login-component.css";
import React, { useState, useEffect } from "react";

export default function LoginComponent({
    onLoginFormSubmit,
    isLogInSuccess,
    onLoginInsteadClicked,
}) {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [validationStatus, setValidationStatus] = useState({
        emailValid: false,
        passwordValid: false,
        isSubmitted: false,
    });

    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    useEffect(() => {
        if (isLogInSuccess) {
            navigate("/home");
        }
    }, [isLogInSuccess, navigate]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const emailValid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
            formData.email
        );
        const passwordValid = formData.password.trim() !== "";

        setValidationStatus({
            emailValid,
            passwordValid,
            isSubmitted: true,
        });

        if (emailValid && passwordValid) {
            await onLoginFormSubmit(formData);
        }
    };

    const shouldShowCheckIcon = (fieldName) => {
        return (
            validationStatus.isSubmitted &&
            formData[fieldName] &&
            validationStatus[fieldName + "Valid"]
        );
    };

    return (
        <>
            <div id="login-container">
                <div id="login-container__Top">
                    <h2>Login</h2>
                </div>
                <div id="login-container__Middle">
                    <form onSubmit={handleSubmit}>
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
                                {shouldShowCheckIcon("email") && (
                                    <i
                                        className="fa-regular fa-circle-check"
                                        style={{ color: "green" }}
                                    ></i>
                                )}
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
                                {shouldShowCheckIcon("password") && (
                                    <i
                                        className="fa-regular fa-circle-check"
                                        style={{ color: "green" }}
                                    ></i>
                                )}
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

                        <div>
                            <button type="submit">Login</button>
                        </div>
                    </form>
                </div>
                <div id="login-container__Bottom">
                    <p>
                        I Don't have an account?{" "}
                        {isLogInSuccess ? (
                            <Link to="/home" style={{ color: "#A6955F" }}>
                                Go to Home
                            </Link>
                        ) : (
                            <Link
                                style={{ color: "#A6955F" }}
                                onClick={onLoginInsteadClicked}
                            >
                                Sign up
                            </Link>
                        )}
                    </p>
                </div>
            </div>
        </>
    );
}
