/**https://hyperui.dev/components/marketing/headers/ => Icon on the left, links in the middle and call to actions on the right (Dark) */
import logo from '../assets/key-svgrepo-com.svg';
import headerBg from '../assets/pexels-wiredsmart-1957615-3868576.jpg';

export default function MyHeader() {
    return(
        <>
            <header className="bg-white dark:bg-gray-900">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                    <div className="flex h-16 items-center justify-between">

                        <div className="md:flex md:items-center md:gap-12">
                            <a className="block text-teal-600 dark:text-teal-600" href="/">
                                <img
                                    src={logo}
                                    alt='logoCaja'
                                    style={{ width: '50px', height: '50px' }}
                                    className='object-cover object-center rounded-lg shadow-lg'
                                />
                            </a>
                        </div>

                        <div className="flex items-center gap-4">

                            <div className="sm:flex sm:gap-4">
                                <a
                                    className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm dark:hover:bg-indigo-500"
                                    href="/"
                                >
                                    Login
                                </a>

                                <div className="hidden sm:flex">
                                    <a
                                        className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-indigo-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                                        href="/"
                                    >
                                        Register
                                    </a>
                                </div>
                            </div>

                            {/* <div className="block md:hidden">
                                <button
                                    className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        stroke-width="2"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                </button>
                            </div> */}
                        </div>

                    </div>

                </div>
                <div>
                    <img
                        src={headerBg}
                        alt='logoCaja'
                        style={{ height: '250px' }}
                        className='w-full object-cover object-center rounded-lg shadow-lg'
                    />
                </div>

            </header>
        </>
    )
};