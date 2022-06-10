import React, {useRef, useEffect} from 'react'
import useGoogleMapsApi from "../../hooks/useGoogleMapApi";

const LocationInput = ({parseDataLocation}) => {
    const inputRef = useRef()
    const autocompleteRef = useRef()
    const googleMapsApi = useGoogleMapsApi()

    useEffect(() => {
        if (googleMapsApi) {
            autocompleteRef.current = new googleMapsApi.places.Autocomplete(inputRef.current)
            autocompleteRef.current.addListener('place_changed', fillAddress)
        }
    }, [googleMapsApi])

    const fillAddress = () => {
        const addressObject  = autocompleteRef.current.getPlace()
        const addressObj = {
            street:'',
            city:'',
            state:'',
            country:'',
            zipCode:'',
        }

        for (const component of addressObject.address_components){
            const componentType = component.types[0];
            switch (componentType) {
                case "route": {
                    addressObj.street = `${component.long_name}`;
                    break;
                }
                case "administrative_area_level_2": {
                    addressObj.city = `${component.long_name}`;
                    break;
                }
                case "administrative_area_level_1": {
                    addressObj.state = `${component.long_name}`;
                    break;
                }
                case "country": {
                    addressObj.country = `${component.long_name}`;
                    break;
                }
                case "postal_code": {
                    addressObj.zipCode = `${component.long_name}`;
                    break;
                }

            }
        }
        const addressData = {...addressObj}
        parseDataLocation(addressData)
    }

    return (
            <input
                name='location'
                aria-label='Search locations'
                ref={inputRef}
                placeholder='placeholder'
                autoComplete='off'
            />
    )
}

export default LocationInput