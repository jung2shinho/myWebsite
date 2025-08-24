import React, { Suspense } from "react";
import "../css/Pages.css";
import { Canvas } from "@react-three/fiber";
import { Experience } from "../Components/Experience";
import { LoadingProgress } from "../Components/LoadingProgress";

export default function Home() {
    return (
        <div className="pages">
            <div className="threeD">
                <Canvas
                    shadows={false}
                    camera={{ position: [70, 155, 350], fov: 40, near: 0.1, far: 20000}}
                >
                    <color attach="background" args={["white"]} />
                    <Suspense fallback={<LoadingProgress />}>
                        <Experience />
                    </Suspense>
                </Canvas>
            </div>
        </div>
    );
}
