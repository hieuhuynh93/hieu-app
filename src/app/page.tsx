
import IpData from "@components/ipdata";
import { Suspense } from "react";
import Loader from "@components/loader";

export default function Home() {

  return (
    <Suspense fallback={<Loader />}>
      <IpData />
    </Suspense>
  );
}
