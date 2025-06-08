import Pin from '../3d-pin-demo'

export default function ContactUs() {
    return (
        <div className="w-screen flex flex-row items-center justify-center gap-10">
            <div className="flex flex-col items-center justify-center gap-10 w-[40vw] px-6">
                <h1 className="text-4xl font-bold text-neutral-100 text-center">Contact us</h1>
                <p className="text-neutral-400 text-xl font-medium text-center">We are always looking for ways to improve our products and services. Contact us and let us know how we can help you.</p>
                <Pin />
            </div>
            <div className="max-w-md w-[40vw] mx-6 p-6 bg-neutral-950 border border-neutral-900 text-neutral-100 rounded-2xl shadow-md mt-20">
                <h2 className="text-2xl font-semibold mb-1">Contact Us</h2>
                <p className="text-neutral-400 mb-6 text-sm">
                    Please reach out to us and we will get back to you at the speed of light.
                </p>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm mb-1" htmlFor="name">
                            Full Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Kapish Rohilla"
                            className="w-full px-4 py-2 rounded-md bg-neutral-900 text-neutral-100 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-100"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1" htmlFor="email">
                            Email address
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="hello@johndoe.com"
                            className="w-full px-4 py-2 rounded-md bg-neutral-900 text-neutral-100 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-100"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1" htmlFor="company">
                            Company
                        </label>
                        <input
                            id="company"
                            type="text"
                            placeholder="Advith ITeC, Udupi"
                            className="w-full px-4 py-2 rounded-md bg-neutral-900 text-neutral-100 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-100"
                        />
                    </div>

                    <div>
                        <label className="block text-sm mb-1" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            id="message"
                            placeholder="Enter your message here"
                            rows={5}
                            className="w-full px-4 py-2 rounded-md bg-neutral-900 text-neutral-100 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-100"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 rounded-full bg-neutral-100 text-black font-semibold hover:bg-neutral-200 transition"
                    >
                        Submit
                    </button>
                </form>

                <div className="mt-6 flex justify-center items-center space-x-6 text-neutral-400">
                    <button aria-label="X">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                fillRule="evenodd"
                                d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.167 6.84 9.49.5.09.66-.217.66-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.37-1.34-3.37-1.34-.454-1.153-1.11-1.46-1.11-1.46-.907-.62.07-.608.07-.608 1.003.07 1.53 1.03 1.53 1.03.89 1.524 2.34 1.084 2.91.828.09-.645.35-1.084.636-1.333-2.22-.254-4.555-1.113-4.555-4.953 0-1.094.39-1.99 1.03-2.69-.103-.254-.45-1.274.098-2.656 0 0 .84-.27 2.75 1.025A9.56 9.56 0 0112 6.844c.85.004 1.705.115 2.504.337 1.91-1.296 2.75-1.025 2.75-1.025.55 1.382.203 2.402.1 2.656.64.7 1.03 1.596 1.03 2.69 0 3.847-2.34 4.697-4.57 4.945.36.31.68.92.68 1.855 0 1.34-.012 2.42-.012 2.75 0 .268.16.577.67.48C19.14 20.16 22 16.42 22 12c0-5.52-4.48-10-10-10z"
                            />
                        </svg>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 24h5V7H0v17zm7.5 0h5V14.5c0-1.83.67-3.08 2.35-3.08 1.63 0 2.65 1.1 2.65 2.71V24h5v-9.25c0-4.97-2.65-7.25-6.19-7.25-2.85 0-4.09 1.57-4.79 2.68V7H7.5v17z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}
