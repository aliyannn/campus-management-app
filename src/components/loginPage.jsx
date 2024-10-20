import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userRole, setUserRole] = useState('');
    const [userNameError, setUserNameError] = useState('');
    const [userPasswordError, setUserPasswordError] = useState('');
    const [userRoleError, setUserRoleError] = useState('');
    const [darkModeToggle, setDarkModeToggle] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        // Reset error messages
        setUserNameError('');
        setUserPasswordError('');
        setUserRoleError('');

        let hasError = false;

        // Validate each field
        if (!userName) {
            setUserNameError('Please enter a username.');
            hasError = true;
        }
        if (!userPassword) {
            setUserPasswordError('Please enter a password.');
            hasError = true;
        }
        if (!userRole) {
            setUserRoleError('Please select a role.');
            hasError = true;
        }

        // If there's any error, don't proceed
        if (hasError) return;

        // Navigate to the appropriate dashboard based on the role selected
        if (userRole === 'admin') {
            navigate('/admin-dashboard');
        } else if (userRole === 'student') {
            navigate('/student-dashboard');
        }
    };

    // Handle key press for Enter key
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleLogin();
        }
    };

    const toggleDarkMode = () => {
        setDarkModeToggle(!darkModeToggle);
    };

    return (
        <div className={`${darkModeToggle ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen`}>
            <button
                onClick={toggleDarkMode}
                className="fixed top-4 right-4 p-2 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center"
            >
                {darkModeToggle ? (
                    // Icon for Dark Mode (sun icon)
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-yellow-500"
                    >
                        <path d="M12 3V1m0 22v-2m9-9h2m-22 0H3m16.364 6.364l1.414-1.414M4.222 5.636l1.414-1.414m12.728 0l-1.414 1.414M5.636 19.778l-1.414-1.414M12 5a7 7 0 100 14 7 7 0 000-14z" />
                    </svg>
                ) : (
                    // Icon for Light Mode (moon icon)
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-gray-700"
                    >
                        <path d="M12 3.25c-4.83 0-8.75 3.92-8.75 8.75S7.17 20.75 12 20.75 20.75 16.83 20.75 12c0-.4-.03-.8-.09-1.19a9.51 9.51 0 01-8.66-8.66c-.39-.06-.79-.09-1.19-.09zM21.15 14c.59 0 1.14-.25 1.53-.66.62-.62.84-1.5.61-2.32-.64-2.28-2.61-4.05-5.02-4.55a7.5 7.5 0 00-9.1 9.1c.5 2.41 2.27 4.38 4.55 5.02.82.23 1.7.01 2.32-.61.41-.39.66-.94.66-1.53 0-1.52-.5-3-1.5-4.15a5.502 5.502 0 018.95-3.55z" />
                    </svg>
                )}
            </button>
            <div className="lg:flex">
                <div className={`lg:w-1/2 xl:max-w-screen-sm ${darkModeToggle ? 'bg-black' : 'bg-white'}`}>
                    <div className={`${darkModeToggle ? 'bg-black' : 'bg-indigo-100'} lg:bg-transparent flex justify-center lg:justify-start lg:px-12`}>
                        <div className="flex items-center cursor-pointer">
                            <div className='-mr-10'>
                                <img src='BSOL.gif' className='h-24'></img>
                            </div>
                            <div className={`text-2xl ${darkModeToggle ? 'text-white' : 'text-indigo-800'} tracking-wide ml-2 font-semibold`}>Blackstone School of Law & Business</div>

                        </div>
                    </div>
                    <div className={`px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-12 xl:px-24 xl:max-w-2xl ${darkModeToggle ? 'text-white' : 'text-black'}`}>
                        <h2 className="text-center text-4xl font-display font-semibold lg:text-left xl:text-5xl xl:font-bold">
                            Log in
                        </h2>
                        <div className="mt-12">
                            <form>
                                <div>
                                    <label className="text-sm font-bold tracking-wide">Username</label>
                                    <input
                                        className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 px-2 rounded"
                                        type="text"
                                        placeholder="Enter your username"
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                    />
                                    {userNameError && <p className="text-red-500 text-sm">{userNameError}</p>}
                                </div>
                                <div className="mt-8">
                                    <label className="text-sm font-bold tracking-wide">Password</label>
                                    <input
                                        className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 px-2 rounded"
                                        type="password"
                                        placeholder="Enter your password"
                                        value={userPassword}
                                        onChange={(e) => setUserPassword(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                    />
                                    {userPasswordError && <p className="text-red-500 text-sm">{userPasswordError}</p>}
                                </div>
                                <div className="mt-8">
                                    <label className="text-sm font-bold tracking-wide">Role</label>
                                    <select
                                        className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500 px-2 rounded"
                                        value={userRole}
                                        onChange={(e) => setUserRole(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                    >
                                        <option value="">Select Role</option>
                                        <option value="admin">Admin</option>
                                        <option value="student">Student</option>
                                    </select>
                                    {userRoleError && <p className="text-red-500 text-sm">{userRoleError}</p>}
                                </div>
                                <div className="mt-10">
                                    <button
                                        type="button"
                                        onClick={handleLogin}
                                        className="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg"
                                    >
                                        Log In
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className={`hidden lg:flex items-center justify-center flex-1 h-auto ${darkModeToggle ? 'bg-black' : 'bg-indigo-100'}`}>
                    <div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">
                        <svg className="w-5/6 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 16h-1v-4h-1m4-4H6m8 0a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                        </svg>
                        <h1 className={`text-2xl mt-6 text-center ${darkModeToggle ? 'text-white' : 'text-gray-700'}`}>Welcome Back</h1>
                        <p className={`text-sm text-center ${darkModeToggle ? 'text-gray-400' : 'text-gray-600'} mt-2`}>Sign in to continue access to the application.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
