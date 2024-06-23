const getErrorMessage = (errorCode) => {
    const errorMessages = {
        "auth/invalid-email": "Invalid email address. Please check the format.",
        "auth/user-disabled": "This user has been disabled.",
        "auth/user-not-found": "No user found with this email. Please sign up.",
        "auth/wrong-password": "Incorrect password. Please try again.",
        default: "An unexpected error occurred. Please try again later."
    };
    return errorMessages[errorCode] || errorMessages.default;
};

export default getErrorMessage;