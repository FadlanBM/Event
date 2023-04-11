import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";
import { PropsWithChildren } from "react";
import Spline from "@splinetool/react-spline";

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="relative h-screen w-screen bg-cover bg-center">
            <Spline scene="https://prod.spline.design/b2lkIpXXW3u2fcMw/scene.splinecode" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 card w-96 glass ">
                <div className="card-body">{children}</div>
            </div>
        </div>
    );
}
