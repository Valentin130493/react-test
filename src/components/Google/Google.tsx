import React, {useState} from 'react';
import GooglePlacesAutocomplete, {

} from "react-google-places-autocomplete";
import {useLoadScript} from "@react-google-maps/api";

export const GoogleAutocomplete: React.FC  = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "",
        libraries: ["places"],
        language:"en",
    });
    const [state,setState]= useState({
        proocedure:'',
        place:''
    })
    const handleAddress = (place) => {
        setState({...state, place: place})
    };
    const handleChange= (e)=>{
        setState({...state, proocedure:e.target.value})
    }
    const handleSubmit = () => {
        console.log(state)
    }

    return (
        <div className="container">
                <form className="appointment-form" >
                    <div className="col">
                        <div className="form-group">
                            {isLoaded ? (
                                <GooglePlacesAutocomplete
                                    selectProps={{
                                        placeholder: "Address",
                                        name: "address",
                                        id: "address",
                                        onChange: (place) => {
                                            handleAddress(place.label);
                                        },
                                    }}
                                />
                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <select onChange={(e)=>handleChange(e)}>
                                <option selected disabled hidden>Chose Proocedure</option>
                                <option>Bone Density/DEXA</option>
                                <option>Breast Imaging</option>
                                <option>CT/CAT Scan</option>
                                <option>Fluoroscopy</option>
                                <option>Interventional Radiology (IR)</option>
                            </select>
                        </div>
                    </div>
                    <button type="button" className="m_btn m_btn-black" onClick={handleSubmit}>Search</button>
                </form>

            </div>


    );
};

