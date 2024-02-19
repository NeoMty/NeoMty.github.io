import { useRef, useEffect } from 'react'

import dragonScene from '../assets/3d/dragon_flying.glb';
import { useAnimations } from '@react-three/drei';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Dragon = () => {
    const dragonRef = useRef()
    const { scene, animations } = useGLTF(dragonScene)
    const { actions } = useAnimations(animations, dragonRef)

    useEffect(() => { 
        actions['Object_0'].play()
    }, [])


    useFrame(({ clock, camera }) => {
        // Update the Y position simulate the flight moving in a sine wave
        dragonRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2

        if (dragonRef.current.position.x > camera.position.x + 10) {
            dragonRef.current.rotation.y = Math.PI
        } else if (dragonRef.current.position.x < camera.position.x - 10) {
            dragonRef.current.rotation.y = 0;
        }

        if (dragonRef.current.rotation.y === 0) {
            dragonRef.current.position.x += 0.01
            dragonRef.current.position.z -= 0.01
        } else {
            dragonRef.current.position.x -= 0.01
            dragonRef.current.position.z += 0.01
        }
    })

    return (
        <mesh 
            position={[-5, 2, 1]} 
            scale={[0.003, 0.003, 0.003]} 
            ref={dragonRef}
        >
            <primitive object={scene} />
        </mesh>
    )
}

export default Dragon