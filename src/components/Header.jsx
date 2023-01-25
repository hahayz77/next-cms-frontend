import Link from "next/link";

export default function Header() {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
                <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 1024 1024" className="icon" version="1.1"><path d="M618.2 340.5H220.9l181.6-190.8 134.2 144.1c8.7 9.3 23.4 9.9 32.8 1.2 9.4-8.7 9.9-23.4 1.2-32.7l-151-162.2c-4.4-4.7-10.5-7.4-16.9-7.4-6.5 0.5-12.5 2.6-17 7.2L150 347.7c-4.1 4.3-6.4 10-6.4 16v534.8c0 12.8 10.4 23.2 23.2 23.2h451.4c12.8 0 23.2-10.4 23.2-23.2V363.7c0-12.8-10.3-23.2-23.2-23.2zM595 875.3H190V386.8h405v488.5z m262.3-440H699.5c-12.8 0-23.2 10.4-23.2 23.2 0 12.8 10.4 23.2 23.2 23.2H834v393.9H699.5c-12.8 0-23.2 10.4-23.2 23.2 0 12.8 10.4 23.2 23.2 23.2h157.7c12.8 0 23.2-10.4 23.2-23.2V458.4c0.1-12.8-10.3-23.1-23.1-23.1z m-339 21.2h-78.8v78.6h78.8v-78.6z m-172.7 0h-78.8v78.6h78.8v-78.6z m172.7 139.2h-78.8v78.6h78.8v-78.6z m-172.7 0h-78.8v78.6h78.8v-78.6z m172.7 139.1h-78.8v78.6h78.8v-78.6z m-172.7 0h-78.8v78.6h78.8v-78.6z" fill="#00008B"/></svg>
                <span className="ml-3 text-xl">Next CMS</span>
                </Link>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5">First Link</a>
                    <a className="mr-5">Second Link</a>
                    <a className="mr-5">Third Link</a>
                    <a className="mr-5">Fourth Link</a>
                </nav>
                <Link href="/dashboard">
                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Dashboard
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </button>
                </Link>
            </div>
            </header>
    )
}