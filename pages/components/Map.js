import { useEffect } from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoicmNhbm9vcCIsImEiOiJja3ZtN2d2bXcwd3A0MnhvdXJxM2hxb3BqIn0.2QMQYicK9iPSXFCXq7u8SQ';

const Map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: "map",
            style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
            center: [-99.29011, 39.39172],
            zoom: 3
        });
    });

    return (
        <Wrapper id='map'>
        </Wrapper>
    )
}

export default Map

const Wrapper = tw.div`
flex-1
`

