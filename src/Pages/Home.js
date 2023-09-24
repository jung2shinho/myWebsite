import React from "react";
import "../css/Pages.css";
import { Canvas } from "@react-three/fiber";
import { Experience } from "../Components/Experience";

export default function Home () {
    return (
        <div className="pages">
          <div className="threeD">
            <Canvas shadows camera={{ position: [1, 1, 5], fov: 15 }}>
              <color attach="background" args={["white"]} />
              <Experience />
            </ Canvas>
          </div>
        </div>
  );
};