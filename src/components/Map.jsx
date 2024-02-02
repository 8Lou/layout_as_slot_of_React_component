import React, { useRef, useEffect } from 'react';

const Map = () => {
    const mapRef = useRef();
    const location = { lat: 40.73061, lng: -73.935242 }; // Координаты точки местоположения

    useEffect(() => {
        const google = window.google;
        const map = new google.maps.Map(mapRef.current, {
            center: location,
            zoom: 12, //Чем выше значение `zoom`, тем более детально
        });

        const marker = new google.maps.Marker({
            position: location,
            map: map,
            title: 'Obninsk'
        });

        // Обновляем размер карты при изменении размеров окна
        window.addEventListener('resize', () => {
            map.setCenter(location);
        });

        return () => {
            window.removeEventListener('resize', () => {
                map.setCenter({ lat: -34.397, lng: 150.644 });
            });
        };
    }, [location]);

    return <div ref={mapRef} style={{ width: '100%', height: '100vh' }}></div>;
};

export default Map;