import "../styles/auth-card-component.css";

function AuthCardComponent({ child }) {
    return (
        <>
            <div id="auth-container">
                <div id="sign-or-login-container">{child}</div>

                <div id="splash-image-n-compname-container">
                    <img src="logo_lottie.gif" alt="Company Logo Gif " />

                    <h3 style={{ color: "white" }}>ASTRO GALL_ _Y</h3>
                </div>
            </div>
        </>
    );
}

export default AuthCardComponent;
