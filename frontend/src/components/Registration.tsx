import { useEffect, useState, type FormEvent } from "react"
import Input from "./common/Input";
import { Link } from "react-router-dom";

const Registration = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disable, setDisable] = useState(false);
    const [emailError, setEmailError] = useState<string[]>([])
    const [passwordError, setPasswordError] = useState<string[]>([]);
    const [usernameError, setUsernameError] = useState<string[]>([]);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(email, username, password);
        setUsername("");
        setPassword("");
        setEmail("");
    }


    useEffect(() => {
        const passwordErrorList: string[] = [];
        const emailErrorList: string[] = [];
        const usernameErrorList: string[] = [];

        if (email) {
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
                emailErrorList.push('Email address is not valid');
        }

        if (password) {
            if (password.length < 6)
                passwordErrorList.push('Password should be longer than 6 characters')
            if (!/[A-Z]/.test(password))
                passwordErrorList.push('Password should contain a capital letter')
            if (!/[0-9]/.test(password))
                passwordErrorList.push('Password should contain a number');
        }

        if (username) {
            if (username.length < 3)
                usernameErrorList.push('Username should be longer than 3 character');
        }

        const allFieldsFilled = username && email && password;
        const noErrors = passwordErrorList.length == 0 &&
            emailErrorList.length === 0 &&
            usernameErrorList.length === 0;

        setDisable(!(allFieldsFilled && noErrors));

        setPasswordError(passwordErrorList);
        setEmailError(emailErrorList);
        setUsernameError(usernameErrorList);
    }, [email, username, password]);

    return (
        <div>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
                        <h2 className="font-bold text-2xl text-center">Welcome to TMS</h2>
                        <p className="text-blue-100 text-center mt-2">Create an account</p>
                    </div>
                    <form onSubmit={handleSubmit} className="p-8 space-y-6">
                        <Input
                            inputId="username"
                            labelName="Username"
                            inputType="text"
                            inputValue={username}
                            inputOnChange={(e) => setUsername(e.target.value)}
                            inputClassName="w-full"
                            errors={usernameError}
                        />
                        <Input
                            inputId="email"
                            labelName="Email"
                            inputType="email"
                            inputValue={email}
                            inputOnChange={(e) => setEmail(e.target.value)}
                            inputClassName="w-full"
                            errors={emailError}
                        />
                        <Input
                            inputId="password"
                            labelName="Password"
                            inputType="password"
                            inputValue={password}
                            inputOnChange={(e) => setPassword(e.target.value)}
                            inputClassName="w-full"
                            errors={passwordError}
                        />
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed  disabled:from-gray-600 disabled:to-gray-900"
                            disabled={disable}
                        >
                            Sign Up
                        </button>
                        <div className="m-0 text-center text-gray-500 font-semibold">
                            <p>already register? <Link to="/Login" className="text-indigo-500 transition-all delay-75 hover:text-indigo-700" >Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registration