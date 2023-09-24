import React from "react";
import "../css/Pages.css";
import { Canvas } from "@react-three/fiber";
import { Experience } from "../Components/Experience";

export default function Home () {
    return (
        <div className="pages">
          <h1 className="h1">This is the Home page</h1>
          <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
            <color attach="background" args={["#ececec"]} />
            <Experience />
          </ Canvas>
        </div>
  );
};