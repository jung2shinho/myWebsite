import React, { useState, useEffect } from "react";
import "../css/Pages.css";
import { Canvas } from "@react-three/fiber";
import { Experience } from "../Components/Experience";

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading delay (you can replace this with actual loading logic)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Change the delay time as needed

        // Cleanup function
        return () => clearTimeout(timer);
    }, []); // Empty dependency array ensures useEffect runs only once

    return (
        <div className="pages">
            {loading ? (
                <div className="loading-screen">
                    <h1>Loading...</h1>
                    {/* You can add loading animation or spinner here */}
                </div>
            ) : (
                <div className="threeD">
                    <Canvas
                        shadows
                        camera={{ position: [70, 155, 350], fov: 40, near: 0.1, far: 5000}}
                    >
                        <color attach="background" args={["white"]} />
                        <Experience />
                    </Canvas>
                </div>
            )}
        </div>
    );
}
