import tw from "tailwind-styled-components"
import Map from './components/Map'
import { useEffect, useState } from 'react'
import Link from "next/link"
import { useRouter } from 'next/router'
import RideSelector from "./components/RideSelector"

const Confirm = () => {
    const router = useRouter()
    const { pickup, dropoff } = router.query
    console.log("pickup", pickup)
    console.log("dropoff", dropoff)
    const [pickupCoordinates, setPickupCoordinates] = useState()
    const [dropoffCoordinates, setDropoffCoordinates] = useState()
    // 
    const getPickupCoordinates = (pickup) => {
        // const pickup = pickup;
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
            new URLSearchParams({
                access_token: 'pk.eyJ1IjoicmNhbm9vcCIsImEiOiJja3ZtN2d2bXcwd3A0MnhvdXJxM2hxb3BqIn0.2QMQYicK9iPSXFCXq7u8SQ',
                limit: 1
            })
        )
            .then(response => response.json())
            .then(data => {
                setPickupCoordinates(data.features[0].center)
            })
    }
    const getDropoffCoordinates = (dropoff) => {
        // const dropoff = dropoff;
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
            new URLSearchParams({
                access_token: 'pk.eyJ1IjoicmNhbm9vcCIsImEiOiJja3ZtN2d2bXcwd3A0MnhvdXJxM2hxb3BqIn0.2QMQYicK9iPSXFCXq7u8SQ',
                limit: 1
            })
        )
            .then(response => response.json())
            .then(data => {
                setDropoffCoordinates(data.features[0].center)
            })

    }

    useEffect(() => {
        getPickupCoordinates(pickup);
        getDropoffCoordinates(dropoff);
    }, [])


    return (
        <Wrapper>
            {/* Button Container */}
            <ButtonContainer>
                <Link href="/search">
                    <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
                </Link>
            </ButtonContainer>
            {/* Input container */}
            <Map
                pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}
            />
            <RideContainer>
                {/* Ride Selector */}
                <RideSelector />
                {/* Confirm Button */}
                <ConfirmButtonContainer>
                    <ConfirmButton>
                        Confirm UberX
                    </ConfirmButton>
                </ConfirmButtonContainer>

            </RideContainer>
        </Wrapper>
    )
}

export default Confirm

const Wrapper = tw.div`
    flex flex-col h-screen 
`
const RideContainer = tw.div`
    flex-1 flex flex-col h-1/2
`

const ConfirmButtonContainer = tw.div`
border-t-2
`
const ConfirmButton = tw.div`
    bg-black text-white my-4 mx-4 py-4 text-center text-xl cursor-pointer
`
const ButtonContainer = tw.div`
    absolute z-10 m-2
`
const BackButton = tw.img`
    bg-white drop-shadow-md rounded-full h-12 cursor-pointer
`