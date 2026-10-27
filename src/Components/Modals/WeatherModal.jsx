import { X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { getGeoLocation } from '../../Services/getGeoLocation';
import { Navigate, useNavigate } from 'react-router';
import { getToLocation } from '../../Services/geoToLocation';

export const WeatherModal = ({ onClose }) => {
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const goToPage = (location) => {
        navigate("/weather", { state: { location } })
    }

    //  handle submit function works here 
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!city) { return setLoading(false) }
        const value = city.trim();
        setLoading(true);
        try {
            const resultGeo = await getGeoLocation(value);

            if (!resultGeo) {
                setError("Location not Found ");
                setLoading(false);
                return
            };
            goToPage(resultGeo);

        } catch (exception) {
            console.log(exception);
        } finally {
            setLoading(false);
            setCity("");
        }


    }
    const handleMyLocation = async () => {
        setLoading(true);
        setError("");

        if (!navigator.geolocation) {
            setError("Device Done Not Support Navigator")
            setLoading(false);
            return
        };
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;

            try {
                const weatherInfo = await getToLocation(latitude, longitude);
                if (!weatherInfo) {
                    setError("Weather Info get Failed");
                    return
                }
                goToPage(weatherInfo);

            } catch (exception) {
                console.log(exception);
            } finally {

                setLoading(false);
            }

        }
            , (err) => {
                setError(`Error : ${err.message}`);
                setLoading(false);
                return
            }, {
            timeout: 10000
        }
        )
    }
    return (
        <div className='border-2 min-w-sm max-w-xs mx-auto bg-white rounded-2xl md:fixed h-72 inset-40'>

            <div className='flex items-center justify-center  text-blue-600  font-extrabold '>
                <p className='text-center flex-1'>Where are you today</p>
                <div className='btn  btn-circle ' onClick={onClose}>
                    <X />
                </div>
            </div>

            {/* form  */}
            <form onSubmit={handleSubmit}>
                {/* city input  */}
                <div className='flex items-center justify-center gap-4  p-4'>
                    <input type="text" placeholder='Enter a City name ' className="input input-neutral bg-white text-black border-2" value={city} onChange={(e) => setCity(e.target.value)} />
                    <button type="submit" className="btn btn-active btn-primary" >Get Weather</button>
                </div>
            </form>
            <div className="divider divider-neutral">OR</div>
            <div >
                <button className="btn btn-active btn-primary" onClick={handleMyLocation}>📍 Use My Location</button>
                {error && <p className='text-red-600 p-2  text-center'>{error}</p>}
            </div>
            <div className={loading ? "block" : "hidden"}>
                {
                    loading && <span className="loading loading-infinity loading-xl  "></span>
                }
            </div>

        </div>
    )
}
