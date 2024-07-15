import React, { useRef, useState } from 'react';
import Final from '../../public/Final';
import { useFrame, useThree } from '@react-three/fiber';

const HoveringModel = () => {
    const modelRef = useRef();
    const [hovered, setHovered] = useState(false);
    const [initialRotation, setInitialRotation] = useState([0, 0, 0]);
    const { size } = useThree();

    const distanceThreshold = 50; // distance from the border where rotation is disabled

    useFrame(({ pointer }) => {
        if (hovered) {
            const distanceFromCenterX = Math.abs(pointer.x * size.width - size.width / 2);
            const distanceFromCenterY = Math.abs(pointer.y * size.height - size.height / 2);

            if (distanceFromCenterX < size.width / 2 - distanceThreshold && distanceFromCenterY < size.height / 2 - distanceThreshold) {
                modelRef.current.rotation.x = initialRotation[0] + (pointer.y * Math.PI) / 1000;
                modelRef.current.rotation.y = initialRotation[1] + (pointer.x * Math.PI) * 1.25;
            }
        }
    });

    const handlePointerEnter = () => {
        setInitialRotation([modelRef.current.rotation.x, modelRef.current.rotation.y, modelRef.current.rotation.z]);
        setHovered(true);
    };

    const handlePointerLeave = () => {
        setHovered(false);
    };

    return (
        <mesh
            ref={modelRef}
            onPointerEnter={handlePointerEnter}
            onPointerLeave={handlePointerLeave}
        >
            <Final />
        </mesh>
    );
};

export default HoveringModel;