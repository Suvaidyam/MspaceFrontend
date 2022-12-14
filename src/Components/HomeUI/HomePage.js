import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import './HomeUI.css'


import Navbar from '../Navbar/Navbar'
import Overview from './Overview/Overview'
import SideBar from './LeftSideBar/SideBar'
import add from '../../Assets/add-circle.svg'



const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Newest', href: '#', current: false },
  { name: 'Meeting Room', href: '#', current: false },
  { name: 'Seating Room', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function HomePage() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const [bookingData , setbookingData]= useState(new Date());
  const [btnClick , setbtnClick] = useState("")



  return (
    <>
      {/* liuhyijluk;, */}
      <div className=" w-full m-auto  ">
        <Navbar />

        <div className=''>
          {/* Mobile filter dialog */}
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 flex z-40">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="ml-auto relative max-w-xs w-full  bg-white shadow-xl py-4 pb-12 flex flex-col overflow-y-auto">
                    <div className="px-4 flex items-center justify-between">
                      <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                      <button
                        type="button"
                        className="-mr-2 w-10 h-10 bg-white p-2 rounded-md flex items-center justify-center text-gray-400"
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Filters */}
                    <form className="  flex  flex-col justify-center mt-4 border-t border-gray-200 bg-white">

                      <SideBar setbookingData={setbookingData} setbtnClick={setbtnClick}/>



                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          <main className="w-full  mx-auto ">


            <section aria-labelledby="products-heading" className="  ">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="flex justify-center shadow-inner  bg-white ">
                {/* Filters */}
                <form className="hidden h-full  lg:block w-[22%] shadow-inner">
                  <SideBar setbookingData={setbookingData} setbtnClick={setbtnClick}/>

                </form>

                {/* Product grid */}
                <div className="lg:col-span-3   w-[78%]">
                  {/* Replace with your content */}
                  <div className="  bg-gray-50  h-screen shadow-inner" >
                    <div className="relative z-10  pt-2 px-12 flex items-baseline justify-between ">
                      <h1 className="text-xl font-bold tracking-tight text-gray-900">Overview</h1>

                      <div className="flex items-center">
                        <Menu as="div" className="relative inline-block text-left">
                          <div>
                            <Menu.Button className="group  inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                              Sort
                              <ChevronDownIcon
                                className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true"
                              />
                            </Menu.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <div className="py-1 ">
                                {sortOptions.map((option) => (
                                  <Menu.Item key={option.name}>
                                    {({ active }) => (
                                      <a
                                        href={option.href}
                                        className={classNames(
                                          option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                          active ? 'bg-gray-100' : '',
                                          'block px-4 py-2 text-sm'
                                        )}
                                      >
                                        {option.name}
                                      </a>
                                    )}
                                  </Menu.Item>
                                ))}
                              </div>
                            </Menu.Items>
                          </Transition>
                        </Menu>

                        <button type="button" className="p-2 -m-2 ml-5 sm:ml-7 text-gray-400 hover:text-gray-500">
                          <span className="sr-only">View grid</span>
                          <Squares2X2Icon className="w-5 h-5" aria-hidden="true" />
                        </button>
                        <button
                          type="button"
                          className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
                          onClick={() => setMobileFiltersOpen(true)}
                        >
                          <span className="sr-only">Filters</span>
                          <FunnelIcon className="w-5 h-5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                    <div className="lg:h-[550px] md:h-screen scrollbar-hide bg-gray-50 overflow-y-scroll box">

                      <Overview btnClick={btnClick} bookingData={bookingData} add={add}/>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  )
}