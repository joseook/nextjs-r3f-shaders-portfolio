import React, { Suspense } from 'react'
import { useThree, Vector3 } from '@react-three/fiber'
import {
  Html,
  Loader,
  PerspectiveCamera,
  Scroll,
  ScrollControls,
  Sparkles,
  Text,
} from '@react-three/drei'

import Shader from './Shader/Shader'

const ProjectsShader: React.FC = () => {
  const posY = -0.5

  const images = [
    {
      title: 'Apple Website Clone',
      position: [-0.1, -1 + posY, -0.09],
      src: '/img/projects/apple-website-clone/01.jpeg',
      url: 'https://iphone-template-project.vercel.app/',
    },

    {
      title: 'Velvet E-commerce',
      position: [0.1, -2 + posY, -0.09],
      src: '/img/projects/velvet-ecommerce/01.jpg',
      url: 'https://velvet-ecommerce-three.vercel.app/',
    },

    {
      title: 'Academia Futuro Brilhante',
      position: [-0.1, -3 + posY, -0.09],
      src: '/img/projects/academia-futuro-brilhante/01.jpeg',
      url: 'https://academia-angular.netlify.app/',
    },

    {
      title: 'Nextech',
      position: [0.1, -4 + posY, -0.09],
      src: '/img/projects/nextech/01.jpeg',
      url: 'https://nextech-wine.vercel.app/',
    },

    {
      title: 'LeetCode Ghost Window',
      position: [-0.1, -5 + posY, -0.09],
      src: '/img/projects/leetcode-ghost-window/01.jpeg',
      url: 'https://github.com/joseook/leetcode-ghost-window',
    },

    {
      title: 'SoftwareScan',
      position: [0.1, -6 + posY, -0.09],
      src: '/img/projects/project-softwarescan/01.jpg',
      url: 'https://github.com/joseook/softwarescan',
    },

    {
      title: 'NutriVibe',
      position: [-0.1, -7 + posY, -0.09],
      src: '/img/projects/project-nutrivibe/01.jpg',
      url: 'https://github.com/joseook/nutrivibe',
    },

    {
      title: 'Modern Car Website',
      position: [0.1, -8 + posY, -0.09],
      src: '/img/projects/project-modern-car-website-react/01.jpg',
      url: 'https://github.com/joseook/modern-car-website',
    },

    {
      title: 'Tigma Real Estate',
      position: [-0.1, -9 + posY, -0.09],
      src: '/img/projects/project-tigma-real-state/01.jpg',
      url: 'https://github.com/joseook/tigma-real-estate',
    },

    {
      title: 'Astro Template',
      position: [0.1, -10 + posY, -0.09],
      src: '/img/projects/project-astro-template/01.jpg',
      url: 'https://github.com/joseook/astro-template',
    },

    {
      title: 'E-commerce Sanity',
      position: [-0.1, -11 + posY, -0.09],
      src: '/img/projects/project-ecomerce-sanity/home1.jpg',
      url: 'https://github.com/joseook/ecommerce-sanity',
    },
  ]

  const { width } = useThree((state) => state.viewport)

  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[0, 0, 1]}
        fov={55}
        near={0.1}
        far={100}
      />

      <ScrollControls
        pages={12}
        distance={1}
        damping={4}
        horizontal={false}
        infinite={false}
      >
        <fog attach='fog' args={[0x050505, 0, 6]} />
        <Scroll>
          <Sparkles
            count={35}
            position={[-0.5, -2, -3.5]}
            scale={[6, 10, 10]}
            size={1}
            speed={2}
          />
          <Suspense
            fallback={
              <Html>
                <Loader />
              </Html>
            }
          >
            <Shader
              image={'/img/projects/texture.webp'}
              planeArgs={[6, 4, 32, 32]}
              planeRotation={[-Math.PI / 2.3, 0, 0]}
              wireframe={true}
              pointer={false}
              position={[0, -0.2, -1]}
            />

            {images.map((image, i) => {
              const { position, src, title, url } = image

              return (
                <group key={url}>
                  <Shader
                    image={src}
                    position={position as Vector3}
                    planeArgs={[0.4, 0.6, 32, 32]}
                    planeRotation={[0, 0, 0]}
                    wireframe={false}
                    pointer={true}
                    url={url}
                  />

                  <Text
                    position={[0, position[1], 0.1] as Vector3}
                    fillOpacity={0.7}
                    font='/FogtwoNo5.otf'
                    fontSize={width / 16}
                    material-toneMapped={false}
                    anchorX='center'
                    anchorY='middle'
                  >
                    {title}
                  </Text>

                  <Text
                    position={[-position[0], position[1], 0.4] as Vector3}
                    strokeWidth={'0.1%'}
                    strokeOpacity={0.4}
                    strokeColor='#ffffff'
                    fillOpacity={0}
                    font='/FogtwoNo5.otf'
                    fontSize={width / 8}
                    material-toneMapped={false}
                    anchorX={`${position[0] === 0.1 ? 'right' : 'left'}`}
                    anchorY='middle'
                  >
                    {i + 1}
                  </Text>
                </group>
              )
            })}
            <Text
              position={[0, 0.7, -3]}
              rotation={[-0.3, 0, 0]}
              lineHeight={1.3}
              fillOpacity={1}
              font='/FogtwoNo5.otf'
              fontSize={width / 2}
              material-toneMapped={false}
              anchorX='center'
              anchorY='middle'
            >
              Projects
            </Text>
          </Suspense>
        </Scroll>
      </ScrollControls>
    </>
  )
}

export default ProjectsShader
