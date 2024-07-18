import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import './Banner.css';
import ip from './iphone14.jpeg';

const ads = [
    {
        id: 1,
        imageUrl: ip,
        title: 'Ad 1 Title',
        description: 'Description for Ad 1',
    },
    {
        id: 2,
        imageUrl: ip,
        title: 'Ad 2 Title',
        description: 'Description for Ad 2',
    },
    {
        id: 3,
        imageUrl: ip,
        title: 'Ad 3 Title',
        description: 'Description for Ad 3',
    },
    // Add more ads as needed
];

const Banner = () => {
    const [currentAdIndex, setCurrentAdIndex] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        const id = setInterval(goToNextAd, 5000);
        setIntervalId(id);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const goToNextAd = () => {
        setCurrentAdIndex((prevIndex) => (prevIndex + 1) % ads.length);
    };

    const goToPreviousAd = () => {
        setCurrentAdIndex((prevIndex) => (prevIndex - 1 + ads.length) % ads.length);
    };

    const goToAd = (index) => {
        setCurrentAdIndex(index);
    };

    return (
        <div className="banner-container">
            <Sidebar />
            <div className="banner">
                <div className="slides" style={{
                    transform: `translateX(-${currentAdIndex * 100}%)` // Adjust translation based on current index
                }}>
                    {ads.map((ad) => (
                        <div key={ad.id} className="slide">
                            <img src={ad.imageUrl} alt={ad.title} />
                            <div className="banner-content">
                                <h1>{ad.title}</h1>
                                <p>{ad.description}</p>
                                <button>Shop Now</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="dots-container-wrapper">
                    <div className="dots-container">
                        {ads.map((ad, index) => (
                            <span
                                key={ad.id}
                                className={index === currentAdIndex ? 'dot active' : 'dot'}
                                onClick={() => goToAd(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;






// import React, { useState, useEffect } from 'react';
// import Sidebar from './Sidebar';
// import './Banner.css';

// const Banner = () => {
//     const [ads, setAds] = useState([]);
//     const [currentAdIndex, setCurrentAdIndex] = useState(0);
//     const [intervalId, setIntervalId] = useState(null);

//     useEffect(() => {
//         // Fetch ads from API
//         fetchAds();

//         const id = setInterval(goToNextAd, 5000);
//         setIntervalId(id);

//         return () => {
//             clearInterval(intervalId);
//         };
//     }, []);

//     const fetchAds = async () => {
//         try {
//             const response = await fetch('https://api.example.com/ads'); // Replace with your API endpoint
//             const data = await response.json();
//             setAds(data);
//         } catch (error) {
//             console.error('Error fetching ads:', error);
//         }
//     };

//     const goToNextAd = () => {
//         setCurrentAdIndex((prevIndex) => (prevIndex + 1) % ads.length);
//     };

//     const goToPreviousAd = () => {
//         setCurrentAdIndex((prevIndex) => (prevIndex - 1 + ads.length) % ads.length);
//     };

//     const goToAd = (index) => {
//         setCurrentAdIndex(index);
//     };

//     if (ads.length === 0) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="banner-container">
//             <Sidebar />
//             <div className="banner">
//                 <div className="slides" style={{
//                     transform: `translateX(-${currentAdIndex * 100}%)` // Adjust translation based on current index
//                 }}>
//                     {ads.map((ad) => (
//                         <div key={ad.id} className="slide">
//                             <img src={ad.imageUrl} alt={ad.title} />
//                             <div className="banner-content">
//                                 <h1>{ad.title}</h1>
//                                 <p>{ad.description}</p>
//                                 <button>Shop Now</button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//                 <div className="dots-container">
//                     {ads.map((ad, index) => (
//                         <span
//                             key={ad.id}
//                             className={index === currentAdIndex ? 'dot active' : 'dot'}
//                             onClick={() => goToAd(index)}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Banner;
