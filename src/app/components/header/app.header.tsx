'use client'
const AppHeader = () => { 

    return (
        <>
            {/* ========== HEADER ========== */}
            <header className="sticky inset-x-0 z-50 flex flex-wrap w-full top-4 before:absolute before:inset-0 before:max-w-5xl before:mx-2 lg:before:mx-auto before:rounded-full before:border before:border-gray-200 after:absolute after:inset-0 after:-z-1 after:max-w-5xl after:mx-2 lg:after:mx-auto after:rounded-full after:bg-white md:justify-start md:flex-nowrap">
            <nav className="relative w-full max-w-5xl py-2 mx-2 md:flex md:items-center md:justify-between md:gap-3 ps-5 pe-2 lg:mx-auto">
                {/* Logo w/ Collapse Button */}
                <div className="flex items-center justify-between">
                <a className="flex-none text-xl font-semibold text-black focus:outline-hidden focus:opacity-80" href="#" aria-label="Brand">Brand</a>

                {/* Collapse Button */}
                <div className="md:hidden">
                    <button type="button" className="relative flex items-center justify-center text-sm font-semibold text-gray-800 border border-gray-200 rounded-full hs-collapse-toggle size-9 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" id="hs-header-classic-collapse" aria-expanded="false" aria-controls="hs-header-classic" aria-label="Toggle navigation" data-hs-collapse="#hs-header-classic">
                    <svg className="hs-collapse-open:hidden size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
                    <svg className="hidden hs-collapse-open:block shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    <span className="sr-only">Toggle navigation</span>
                    </button>
                </div>
                {/* End Collapse Button */}
                </div>
                {/* End Logo w/ Collapse Button */}

                {/* Collapse */}
                <div id="hs-header-classic" className="hidden overflow-hidden transition-all duration-300 hs-collapse basis-full grow md:block" aria-labelledby="hs-header-classic-collapse">
                <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
                    <div className="py-2 md:py-0 flex flex-col md:flex-row md:items-center md:justify-end gap-0.5 md:gap-1">
                    <a className="flex items-center p-2 text-sm text-blue-600 focus:outline-hidden focus:text-blue-600" href="#" aria-current="page">
                        <svg className="block shrink-0 size-4 me-3 md:me-2 md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                        Landing
                    </a>

                    <a className="flex items-center p-2 text-sm text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500" href="#">
                        <svg className="block shrink-0 size-4 me-3 md:me-2 md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        Account
                    </a>

                    <a className="flex items-center p-2 text-sm text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500" href="#">
                        <svg className="block shrink-0 size-4 me-3 md:me-2 md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12h.01"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M22 13a18.15 18.15 0 0 1-20 0"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>
                        Work
                    </a>

                    <a className="flex items-center p-2 text-sm text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500" href="#">
                        <svg className="block shrink-0 size-4 me-3 md:me-2 md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>
                        Blog
                    </a>

                    {/* Dropdown */}
                    <div className="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] md:[--adaptive:adaptive] [--is-collapse:true] md:[--is-collapse:false] ">
                        <button id="hs-header-classic-dropdown" type="button" className="flex items-center w-full p-2 text-sm text-gray-800 hs-dropdown-toggle hover:text-gray-500 focus:outline-hidden focus:text-gray-500" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                        <svg className="block shrink-0 size-4 me-3 md:me-2 md:hidden" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 10 2.5-2.5L3 5"/><path d="m3 19 2.5-2.5L3 14"/><path d="M10 6h11"/><path d="M10 12h11"/><path d="M10 18h11"/></svg>
                        Dropdown
                        <svg className="duration-300 hs-dropdown-open:-rotate-180 md:hs-dropdown-open:rotate-0 shrink-0 size-4 ms-auto md:ms-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                        </button>

                        <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative w-full md:w-52 hidden z-10 top-full ps-7 md:ps-0 md:bg-white md:rounded-lg md:shadow-md before:absolute before:-top-4 before:start-0 before:w-full before:h-5 md:after:hidden after:absolute after:top-1 after:start-4.5 after:w-0.5 after:h-[calc(100%-4px)] after:bg-gray-100" role="menu" aria-orientation="vertical" aria-labelledby="hs-header-classic-dropdown">
                        <div className="py-1 md:px-1 space-y-0.5">
                            <a className="py-1.5 px-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500" href="#">
                            About
                            </a>

                            <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] [--is-collapse:true] md:[--is-collapse:false] relative">
                            <button id="hs-header-classic-dropdown-sub" type="button" className="hs-dropdown-toggle w-full py-1.5 px-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500">
                                Sub Menu
                                <svg className="duration-300 hs-dropdown-open:-rotate-180 md:hs-dropdown-open:-rotate-90 md:-rotate-90 ms-auto shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                            </button>

                            <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative md:w-48 hidden z-10 md:mt-2 md:mx-2.5! md:top-0 md:end-full ps-7 md:ps-0 md:bg-white md:rounded-lg md:shadow-md before:hidden md:before:block before:absolute before:-end-5 before:top-0 before:h-full before:w-5 md:after:hidden after:absolute after:top-1 after:start-4.5 after:w-0.5 after:h-[calc(100%-4px)] after:bg-gray-100" role="menu" aria-orientation="vertical" aria-labelledby="hs-header-classic-dropdown-sub">
                                <div className="p-1 space-y-0.5 md:space-y-1">
                                <a className="py-1.5 px-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500" href="#">
                                    About
                                </a>

                                <a className="py-1.5 px-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500" href="#">
                                    Downloads
                                </a>

                                <a className="py-1.5 px-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500" href="#">
                                    Team Account
                                </a>
                                </div>
                            </div>
                            </div>

                            <a className="py-1.5 px-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500" href="#">
                            Downloads
                            </a>

                            <a className="py-1.5 px-2 flex items-center text-sm text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500" href="#">
                            Team Account
                            </a>
                        </div>
                        </div>
                    </div>
                    {/* End Dropdown */}

                    {/* Button Group */}
                    <div className="relative flex flex-wrap items-center gap-x-1.5 md:ps-2.5  md:ms-1.5 before:block before:absolute before:top-1/2 before:-start-px before:w-px before:h-4 before:bg-gray-300 before:-translate-y-1/2">
                        <a className="flex items-center w-full p-2 text-sm text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500" href="#">
                        <svg className="shrink-0 size-4 me-3 md:me-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        Log in
                        </a>
                    </div>
                    {/* End Button Group */}
                    </div>
                </div>
                </div>
                {/* End Collapse */}
            </nav>
            </header>
            {/* ========== END HEADER ========== */}
        </>
    )
}

export default AppHeader;