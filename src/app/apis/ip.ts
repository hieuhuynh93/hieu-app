import IpDataProps from '@interfaces/IGeoData';

export const getCurrentIpData = async(): Promise<IpDataProps> => { 
    const res = await fetch('http://ip-api.com/json/');
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return await res.json();
}

export const getIpData = async (ip: string): Promise<IpDataProps> => { 
    const res = await fetch(`http://ip-api.com/json/${ip}`);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return await res.json();
}