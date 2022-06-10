import {useEffect, useState} from 'react'
import loadScript from 'load-script'

const API_KEY = ""

const useGoogleMapsApi = () => {
    const [googleMapsApi, setGoogleMapsApi] = useState()

    useEffect(() => {
        if (!googleMapsApi) {
            loadScript(
                `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`,
                {async: true},
                () => {
                    setGoogleMapsApi(window.google.maps)
                })
        }
    }, [googleMapsApi])

    return googleMapsApi
}

export default useGoogleMapsApi