import logo from '../../assets/key-svgrepo-com.svg';

export default function Sidebar() {
    return (
        <>
            <div className="flex h-screen flex-col justify-between border-e border-gray-100 bg-white">
                <div className="p-4">
                    <img
                        src={logo}
                        alt='logoCaja'
                        style={{ width: '50px', height: '50px' }}
                        className='object-cover object-center rounded-lg shadow-lg'
                    />


                    <ul className="mt-4 space-y-1">
                        {/*AES CBC*/}
                        <li>
                            <details className="group [&_summary::-webkit-details-marker]:hidden">
                                <summary
                                    className="flex items-center justify-between rounded-lg px-4 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                                >
                                    AES CBC

                                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                </summary>

                                <ul className="mt-2 space-y-1 px-4">
                                    <li>
                                        <a
                                            href="#"
                                            className="block rounded-lg px-4 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                                        >
                                            Encrypt Message
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#"
                                            className="block rounded-lg px-4 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                                        >
                                            Decrypt Message
                                        </a>
                                    </li>
                                </ul>

                            </details>
                        </li>
                        {/*AES GCM*/}
                        <li>
                            <details className="group [&_summary::-webkit-details-marker]:hidden">
                                <summary
                                    className="flex items-center justify-between rounded-lg px-4 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                                >
                                    AES GCM

                                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fill-rule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clip-rule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                </summary>

                                <ul className="mt-2 space-y-1 px-4">                                    
                                    <li>
                                        <a
                                            href="#"
                                            className="block rounded-lg px-4 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                                        >
                                            Decrypt Message
                                        </a>
                                    </li>
                                </ul>

                            </details>
                        </li>
                    </ul>
                </div>

            </div>
        </>
    )
}