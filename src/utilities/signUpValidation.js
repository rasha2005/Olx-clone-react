export const signUpValidation = (name, email, mobile, password) => {

    const validEmail = /^[\w\.-]+@gmail\.com$/.test(email);
    const validName = /^[a-zA-Z ]{2,30}$/.test(name);
    const validPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);
    const validMobile = /^[0]?[789]\d{9}$/.test(mobile)

    if(!validName || !name.trim()) return "Please enter a valid name";
    if(!validMobile || !name.trim()) return "Please enter a valid mobile number."
    if(!validEmail || !name.trim()) return "Please enter a valid email address.";
    if(!validPassword || !name.trim()) return "Password must be atleast 6 characters long and contain at least one numeric digit and one special character";

    return null;
}