import AuthCardComponent from "../components/auth-card-component";
import SignUpComponent from "../components/sign-up-component";
import "../styles/auth-page.css";
import * as Realm from "realm-web";
import DojoComponent from "../components/dojo-component";
import { useState } from "react";
import LoginComponent from "../components/login-component";

function AuthPage({ app, user, setUser }) {
    const [signedUp, setSignedUp] = useState(false);
    const [isLogInSuccess, setLogInSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleLoginFormSubmit = async (formData) => {
        try {
            setIsLoading(true);

            const user = await app.logIn(
                Realm.Credentials.emailPassword(formData.email, formData.password)
            );
            setUser(user);
            setLogInSuccess(true);
            window.alert(`Success!! User Logged In`);
        } catch (error) {
            window.alert(`Failed!! User Not Logged In. Something went wrong`);
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSignUpFormSubmit = async (formData) => {
        try {
            setIsLoading(true);
            const email = formData.email;
            const password = formData.password;

            const user = await app.emailPasswordAuth.registerUser({
                email: email,
                password: password,
            });
            setUser(user);

            setSignedUp(true);

            console.log(`uuuuuuuserrrr ${user}`);
            console.log(user);
            window.alert(`Success!! New User Created`);
        } catch (error) {
            window.alert(`Failed!! New User Not Created. Something went wrong`);
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <AuthCardComponent
                child={
                    isLoading ? (
                        <div>
                            <img src="loading_lottie.gif" alt="Loading..." />
                        </div>
                    ) : signedUp ? (
                        <LoginComponent
                            onLoginFormSubmit={handleLoginFormSubmit}
                            onLoginInsteadClicked={() => setSignedUp(false)}
                            isLogInSuccess={isLogInSuccess}
                        />
                    ) : (
                        <SignUpComponent
                            onSignUpFormSubmit={handleSignUpFormSubmit}
                            onLoginInsteadClicked={() => setSignedUp(true)}
                        />
                    )
                }
            />
        </>
    );
}

export default AuthPage;
