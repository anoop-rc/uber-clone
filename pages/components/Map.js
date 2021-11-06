import { useEffect } from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoicmNhbm9vcCIsImEiOiJja3ZtN2d2bXcwd3A0MnhvdXJxM2hxb3BqIn0.2QMQYicK9iPSXFCXq7u8SQ';

const Map = (props) => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: "map",
            style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
            center: [-99.29011, 39.39172],
            zoom: 3
        })
        // addToMap(map) 
        if(props.pickupCoordinates) {
            console.log(props.pickupCoordinates)
            addToMap(map, props.pickupCoordinates)
        }
        if(props.dropoffCoordinates) {
            console.log(props.dropoffCoordinates)
            addToMap(map, props.dropoffCoordinates)
        }
        if(props.pickupCoordinates && props.dropoffCoordinates) {
            map.fitBounds([
                props.dropoffCoordinates,  
                props.pickupCoordinates
            ], {
                padding: 60
            })
        }
    },[props.pickupCoordinates, props.dropoffCoordinates]);

    const addToMap = (map, coordinates) => {
        const marker1 = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .addTo(map);
    }


    return (
        <Wrapper id='map'>
        </Wrapper>
    )
}

export default Map

const Wrapper = tw.div`
flex-1
`

