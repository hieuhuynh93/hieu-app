
'use client'
import IpDataProps from "@interfaces/IGeoData"
import { getCurrentIpData, getIpData } from "@apis/ip";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';

const IpData = () => { 
    const [ip, setIp] = useState<string>('')
    const [data, setData] = useState({} as IpDataProps)

    useEffect(() => { 
        const fetchData = async () => {
            const ipData: IpDataProps = await getCurrentIpData();
            setData(ipData);
        }
        fetchData()
    }, [])
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const getIp: IpDataProps = await getIpData(ip);
        if (getIp.status === 'fail') { 
            toast("Invalid IP address");
        } else {
            setData(getIp);
        }

        setIp('')
    }
    return (

        <div className="relative overflow-hidden">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
          <div className="text-center">
            <div className="relative max-w-xl mx-auto mt-7 sm:mt-12">
              <form method="POST" onSubmit={handleSubmit}>
                <div className="relative z-10 flex p-3 bg-white border border-gray-200 rounded-lg shadow-lg gap-x-3 shadow-gray-100">
                  <div className="w-full">
                    <label htmlFor="hs-search-article-1" className="block text-sm font-medium text-gray-700"><span className="sr-only">Search other IP</span></label>
                    <input type="text" value={ip} onChange={(e) => setIp(e.target.value)} className="py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500" placeholder="Lookup IP..." />
                  </div>
                  <div>
                    <button className="inline-flex items-center justify-center text-sm font-medium text-white bg-blue-600 border border-transparent rounded-lg size-11 gap-x-2 hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                      <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                    </button>
                  </div>
                </div>
              </form>
              <div className="absolute top-0 hidden translate-x-20 -translate-y-12 md:block end-0">
                <svg className="w-16 h-auto text-orange-500" width="121" height="135" viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
                  <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
                  <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="absolute bottom-0 hidden -translate-x-32 translate-y-10 md:block start-0">
                <svg className="w-40 h-auto text-cyan-500" width="347" height="188" viewBox="0 0 347 188" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426" stroke="currentColor" strokeWidth="7" strokeLinecap="round"/>
                </svg>
              </div>

                <div className="flex flex-col mt-5 text-left bg-white border border-gray-200 shadow-2xs rounded-xl">
                    <div className="flex items-center justify-between p-3 border-b border-gray-200">
                        <span className="text-lg font-bold text-gray-500">{data.query}</span>
                    </div>
                    <div className="p-4">
                        <ul className="mt-0">
                            <li className="text-sm text-gray-600"><strong>Country:</strong> {data.country} ({data.countryCode})</li>
                            <li className="text-sm text-gray-600"><strong>Region:</strong> {data.region} ({data.regionName})</li>
                            <li className="text-sm text-gray-600"><strong>City:</strong> {data.city}</li>
                            <li className="text-sm text-gray-600"><strong>ZIP:</strong> {data.zip}</li>
                            <li className="text-sm text-gray-600"><strong>Latitude:</strong> {data.lat}</li>
                            <li className="text-sm text-gray-600"><strong>Longitude:</strong> {data.lon}</li>
                            <li className="text-sm text-gray-600"><strong>Timezone:</strong> {data.timezone}</li>
                            <li className="text-sm text-gray-600"><strong>ISP:</strong> {data.isp}</li>
                            <li className="text-sm text-gray-600"><strong>Organization:</strong> {data.org}</li>
                            <li className="text-sm text-gray-600"><strong>AS:</strong> {data.as}</li>
                        </ul>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>

    )
}

export default IpData