import { Menu, Transition } from '@headlessui/react';
import { useLocation, useNavigate } from 'react-router';

function AboutMenu({ isActive, setIsActive }) {
    const navigate = useNavigate()
    const location = useLocation()

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button
                    onClick={() => { isActive == 'About' ? setIsActive('') : setIsActive('About') }}
                    className={`${['/abouttrust', '/abouttemple', '/campusfacility', '/history', '/howtoreach'].includes(location.pathname) ? 'text-cream' : 'text-light-red'} inline-flex justify-center w-full px-4 py-2 text-sm font-medium  hover:text-cream  focus:outline-none focus-visible:ring-0`}
                >
                    About
                </Menu.Button>
            </div>

            <Transition
                show={isActive == 'About' ? true : false}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                    static
                    className="absolute right-0 mt-2 w-[150px] space-y-2 origin-top-right bg-dark-brown text-cream  border border-gray-200 divide-y  shadow-lg focus:ring-1 focus:ring-white  focus:outline-none"
                    onMouseLeave={() => setIsActive('')}
                >
                    <div className="px-1 py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    onClick={() => { navigate('/abouttrust'); setIsActive('') }}
                                    className={`${active ? 'text-light-red' : 'text-cream'
                                        } group flex rounded-md items-center hover:text-light-red w-full px-2 py-2 text-sm`}
                                >
                                    About Trust
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    onClick={() => { navigate('/abouttemple'); setIsActive('') }}
                                    className={`${active ? 'text-light-red' : 'text-cream'
                                        } group flex rounded-md items-center hover:text-light-red w-full px-2 py-2 text-sm`}
                                >
                                    About Temple
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    onClick={() => { navigate('/campusfacility'); setIsActive('') }}
                                    className={`${active ? 'text-light-red' : 'text-cream'
                                        } group flex rounded-md items-center hover:text-light-red w-full px-2 py-2 text-sm`}
                                >
                                    Campus Facility
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    onClick={() => { navigate('/history'); setIsActive('') }}
                                    className={`${active ? 'text-light-red' : 'text-cream'
                                        } group flex rounded-md items-center hover:text-light-red w-full px-2 py-2 text-sm`}
                                >
                                    History
                                </button>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <button
                                    onClick={() => { navigate('/howtoreach'); setIsActive('false') }}
                                    className={`${active ? 'text-light-red' : 'text-cream'
                                        } group flex rounded-md items-center hover:text-light-red w-full px-2 py-2 text-sm`}
                                >
                                    How To Reach
                                </button>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}

export default AboutMenu