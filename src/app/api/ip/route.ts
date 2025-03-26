import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) { 
    const { searchParams } = new URL(request.url);
    const ip = searchParams.get("ip");
    let ipParams: string = '';
    console.log(ip)
    if (ip) {
        ipParams = `&ip=${ip}`;
    }
    const res = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=9f9d19986deb4cdb975d6ffc8bde62aa${ipParams}`, {
        method: "GET",
        redirect: "follow"
    })
    const geoip = await res.json();

    return NextResponse.json(geoip);
}