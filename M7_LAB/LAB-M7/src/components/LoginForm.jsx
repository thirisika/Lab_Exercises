//https://react.dev/reference/react-dom/components/input
import { useState } from "react";
import { TextField, Button, Box, Typography, Alert } from "@mui/material";

function LoginForm() {
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [submitResult, setSubmitResult] = useState("");
    const [loginAttempts, setLoginAttempts] = useState(0);

    const isLoggedIn = submitResult === "Successful login.";

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userPassword.length < 5) {
            setSubmitResult("Password must be at least 5 characters long");
        } else if (userPassword === userEmail) {
            setSubmitResult("Password must not match email address");
        } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(userPassword)) {
            setSubmitResult("Password must include a special character");
        } else {
            setSubmitResult("Successful login.");
        }
        setLoginAttempts((prev) => prev + 1);
    };

    if (loginAttempts >= 5) {
        return (
            <Box sx={{ textAlign: "center", mt: 4 }}>
                <Alert severity="error">Login attempts exceeded. Stop hacking!</Alert>
            </Box>
        );
    }

    if (isLoggedIn) {
        return (
            <Box sx={{ textAlign: "center", mt: 4 }}>
                <Alert severity="success">{submitResult} Welcome User!</Alert>
            </Box>
        );
    }

    return (
        <Box sx={{ maxWidth: 400, mx: "auto", mt: 4, p: 3, boxShadow: 3, borderRadius: 2 }}>
            <Typography variant="h5" textAlign="center" gutterBottom>
                Login
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Email Address"
                    variant="outlined"
                    margin="normal"
                    type="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                />
                <TextField
                    fullWidth
                    label="Password"
                    variant="outlined"
                    margin="normal"
                    type="password"
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                />
                <Button fullWidth variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
                    Log In
                </Button>
                {submitResult && (
                    <Alert severity={isLoggedIn ? "success" : "error"} sx={{ mt: 2 }}>
                        {submitResult}
                    </Alert>
                )}
            </form>
        </Box>
    );
}

export default LoginForm;
