import React, { useRef, useEffect } from 'react';

const Map = () => {
    const mapRef = useRef();

    useEffect(() => {
        const google = window.google;
        const map = new google.maps.Map(mapRef.current, {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
        });

        const marker = new google.maps.Marker({
            position: { lat: -34.397, lng: 150.644 },
            map: map,
            title: 'Hello World!'
        });

        // Обновляем размер карты при изменении размеров окна
        window.addEventListener('resize', () => {
            map.setCenter({ lat: -34.397, lng: 150.644 });
        });

        return () => {
            window.removeEventListener('resize', () => {
                map.setCenter({ lat: -34.397, lng: 150.644 });
            });
        };
    }, []);

    return <div ref={mapRef} style={{ width: '100%', height: '100vh' }}></div>;
};

export default Map;