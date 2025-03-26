import IPGeolocationData from '@interfaces/IGeoData';
export const getCurrentIpData = async(): Promise<IPGeolocationData> => { 
    const res = await fetch("/api/ip", {
            method: "GET",
        redirect: "follow"
      })
    return await res.json();
}

export const getIpData = async (ip: string): Promise<IPGeolocationData> => { 
    const res = await fetch(`/api/ip?ip=${ip}`, {
        method: "GET",
        redirect: "follow",
  })
    return await res.json();
}