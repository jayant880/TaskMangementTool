import { useState, type FormEvent } from "react"
import Input from './common/Input';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(username, password);
        setUsername("");
        setPassword("");
    }

    return (
        <div>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white">
                        <h2 className="font-bold text-2xl text-center">Welcome to TMS</h2>
                        <p className="text-blue-100 text-center mt-2">Sign in to your account</p>
                    </div>
                    <form onSubmit={handleSubmit} className="p-8 space-y-6">
                        <Input
                            inputId="username"
                            labelName="Username"
                            inputType="text"
                            inputValue={username}
                            inputOnChange={(e) => setUsername(e.target.value)}
                            inputClassName="w-full"
                        />
                        <Input
                            inputId="password"
                            labelName="Password"
                            inputType="password"
                            inputValue={password}
                            inputOnChange={(e) => setPassword(e.target.value)}
                            inputClassName="w-full"
                        />
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 px-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login