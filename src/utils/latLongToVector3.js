import * as THREE from 'three';

/**
 * Converts geographic coordinates (latitude and longitude) to a 3D position on a globe.
 * Assumes a sphere of radius 1 (matching the Earth geometry in main.js).
 * 
 * Coordinate Mapping:
 * - Latitude 0, Longitude 0 is at (0, 0, 1) [Z-axis forward]
 * - Latitude increases North (positive Y)
 * - Longitude increases East (positive X)
 * 
 * @param {number} lat - Latitude in degrees (-90 to 90)
 * @param {number} lon - Longitude in degrees (-180 to 180)
 * @returns {THREE.Vector3} The 3D position on the sphere
 */
export function latLongToVector3(lat, lon) {
    // Convert degrees to radians
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);

    // Standard spherical to Cartesian conversion
    // Note: Adjusting for Three.js coordinate system where Y is up
    // x = r * sin(phi) * sin(theta)
    // y = r * cos(phi)
    // z = r * sin(phi) * cos(theta)
    
    // For radius = 1
    const x = -Math.sin(phi) * Math.sin(theta);
    const y = Math.cos(phi);
    const z = Math.sin(phi) * Math.cos(theta);

    return new THREE.Vector3(x, y, z);
}
