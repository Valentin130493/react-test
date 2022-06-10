import React, {useState} from 'react';

import LocationInput from "../input/locationInput";


export const SearchBox = () => {
    const [state, setState] = useState({
        proocedure: '',
        street: '',
        city: '',
        state: '',
        country: '',
        zipCode: '',
    })

    const handleChange = (e) => {
        setState({...state, proocedure: e.target.value})
    }

    const handleSubmit = () => {
        console.log(state)
    }

    return (
        <div className="container">
            <form className="appointment-form">
                <div className="col">
                    <div className="form-group">
                        <LocationInput parseDataLocation={setState}/>
                    </div>
                </div>
                <div className="col">
                    <div className="form-group">
                        <select onChange={(e) => handleChange(e)}>
                            <option selected disabled hidden>Chose Procedure</option>
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

