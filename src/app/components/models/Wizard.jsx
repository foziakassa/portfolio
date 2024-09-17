/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: rivaiamin (https://sketchfab.com/rivaiamin)
License: CC-BY-ND-4.0 (http://creativecommons.org/licenses/by-nd/4.0/)
Source: https://sketchfab.com/3d-models/lost-programmer-43d32e4f459f4857a054579da61bb3d6
Title: Lost Programmer
*/
"use client";

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const LostProgrammer = React.memo(function LostProgrammer(props) {
  const { nodes, materials } = useGLTF("/models/lost_programmer.glb");
  
  const modelRef = useRef();

  useFrame((state) => {
    // Add rotation to the model
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // Rotate around the Y-axis
    }
  });

  return (
    <group {...props} dispose={null} ref={modelRef} scale={[1.5, 1.5, 1.5]}> {/* Adjust the scale here */}
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[0, 0.752, -0.086]} rotation={[1.263, 0, 0]}>
          <primitive object={nodes.my_rig_rootJoint} />
          <skinnedMesh
            geometry={nodes.hair_0.geometry}
            material={materials.cloth}
            skeleton={nodes.hair_0.skeleton}
          />
          <skinnedMesh
            geometry={nodes.hair_1.geometry}
            material={materials.solidify}
            skeleton={nodes.hair_1.skeleton}
          />
          <skinnedMesh
            geometry={nodes.me_0.geometry}
            material={materials.body}
            skeleton={nodes.me_0.skeleton}
          />
          <skinnedMesh
            geometry={nodes.me_1.geometry}
            material={materials.solidify}
            skeleton={nodes.me_1.skeleton}
          />
          <skinnedMesh
            geometry={nodes.me002_0.geometry}
            material={materials.cloth}
            skeleton={nodes.me002_0.skeleton}
          />
          <skinnedMesh
            geometry={nodes.me002_1.geometry}
            material={materials.solidify}
            skeleton={nodes.me002_1.skeleton}
          />
          <skinnedMesh
            geometry={nodes.kemeja_0.geometry}
            material={materials.cloth}
            skeleton={nodes.kemeja_0.skeleton}
          />
          <skinnedMesh
            geometry={nodes.kemeja_1.geometry}
            material={materials.solidify}
            skeleton={nodes.kemeja_1.skeleton}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube005_0.geometry}
          material={materials.laptop_tex}
          position={[-0.033, -0.442, -0.467]}
          rotation={[2.378, 0, 0]}
          scale={0.149}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.bool1185_0.geometry}
          material={materials.Material}
          position={[2.403, 0.752, -0.428]}
          rotation={[-0.464, 0.296, -0.932]}
          scale={0.106}
        />
      </group>
    </group>
  );
});

export default LostProgrammer;
useGLTF.preload("/models/lost_programmer.glb");