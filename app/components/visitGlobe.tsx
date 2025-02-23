import worldMap from "../public/world-map.png";
import { getVisitorGlobeData } from "../api/view-count";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import * as THREE from "three";
//import Globe from "react-globe.gl";

const Globe = dynamic(() => import("react-globe.gl"), {
  ssr: false,
});
//const THREE = dynamic(() => import('three'));

export type visitorGlobeData = {
  count: number;
  lat: number;
  lng: number;
};

export function VisitGlobe() {
  const [visitorGlobeData, setVisitorGlobeData] = useState<visitorGlobeData[]>(
    []
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getVisitorGlobeData();
        console.log("test");
        setVisitorGlobeData(data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  /*
  const N = 300;
  const gData = [...Array(N)].map(() => ({
    lat: (Math.random() - 0.5) * 180,
    lng: (Math.random() - 0.5) * 360,
    size: Math.random() * 10,
    color: ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
  }));
  */
  const gData = visitorGlobeData.map((data) => ({
    lat: data.lat,
    lng: data.lng,
    size: Math.log(data.count) + 1,
    color: ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
  }));

  const [globeMaterial, setGlobeMaterial] = useState(
    new THREE.MeshToonMaterial()
  );

  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(worldMap.src, (texture) => {
      const material = new THREE.MeshToonMaterial({ map: texture });
      setGlobeMaterial(material);
    });
  }, []);

  return (
    <Globe
      globeMaterial={globeMaterial}
      showGraticules={true}
      hexBinPointsData={gData}
      hexBinResolution={2}
      hexBinPointWeight="size"
      //hexAltitude={({ sumWeight }) => sumWeight * 0.1}
      width={270}
      height={230}
      backgroundColor="rgba(0,0,0,0)"
      atmosphereColor="white"
      atmosphereAltitude={0.1}
      hexTopColor={() => "#d40614"}
      hexSideColor={() => "#d40614"}
    />
  );
}
