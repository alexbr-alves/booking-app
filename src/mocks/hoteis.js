import h1_1 from '../../assets/hoteis/h1_1.jpg'
import h1_2 from '../../assets/hoteis/h1_2.jpg'
import h1_3 from '../../assets/hoteis/h1_3.jpg'

import h2_1 from '../../assets/hoteis/h2_1.jpg'
import h2_2 from '../../assets/hoteis/h2_2.jpg'
import h2_3 from '../../assets/hoteis/h2_3.jpg'

import h3_1 from '../../assets/hoteis/h3_1.jpg'
import h3_2 from '../../assets/hoteis/h3_2.jpg'
import h3_3 from '../../assets/hoteis/h3_3.jpg'

import h4_1 from '../../assets/hoteis/h4_1.jpg'
import h4_2 from '../../assets/hoteis/h4_2.jpg'
import h4_3 from '../../assets/hoteis/h4_3.jpg'





const hoteis = [
    {
        id: `${Math.floor(Date.now() * Math.random()).toString(36)}` ,
        name: 'Central Park Hotel',
        city: 'Londres',
        address: '49 Queensborough Terrace, Westminster Borough',
        overview: "Located less than 100 meters from Hyde Park, Central Park Hotel is just a 2-minute walk from Queensway Underground Station. Central Park Hotel has a 24-hour front desk and is a 15-minute walk from Kensington's shops, bars and restaurants.",
        avaliacao: 4.5,
        day_price: 99.5,
        features :{
            wifi: true,
            drink: true,
            gym: true,
            pool: true,
            restaurant: true
        },
        image1: h1_1,
        image2: h1_2,
        image3: h1_3,
        latitude: 51.5112548,
        longitude: -0.1875743,
    },
    {
        id: `${Math.floor(Date.now() * Math.random()).toString(36)}` ,
        name: 'Sea Containers London',
        city: 'Londres',
        address: '20 Upper Ground, Southwar',
        overview: "Localizado no centro do bairro badalado de Marylebone, em Londres, este hotel de luxo tem um impressionante saguão de 8 andares com teto de vidro e palmeiras imponentes, além de restaurante premiado, quartos luxuosos, piscina coberta e spa.",
        avaliacao: 4.9,
        day_price: 151.78,
        features :{
            wifi: true,
            drink: true,
            gym: true,
            pool: true,
            restaurant: true
        },
        image1: h2_1,
        image2: h2_2,
        image3: h2_3,
        latitude: 51.5081705,
        longitude: -0.1088912,
    },
    {
        id: `${Math.floor(Date.now() * Math.random()).toString(36)}` ,
        name: 'The Landmark London',
        city: 'Londres',
        address: '222 Marylebone Road, Westminster Borough',
        overview: "Located on the banks of the River Thames, Sea Containers London is set in the famous Sea Containers House, just a 7-minute walk from the Tate Modern and Shakespeare’s Globe Theatre. The hotel is also a 15-minute walk from the London Eye, Borough Market, London Dungeon and Sea Life London Aquarium.",
        avaliacao: 4.2,
        day_price: 91.78,
        features :{
            wifi: true,
            drink: true,
            gym: true,
            pool: true,
            restaurant: true
        },
        image1: h3_1,
        image2: h3_2,
        image3: h3_3,
        latitude: 51.5214599,
        longitude: -0.1647967,
    },
    {
        id: `${Math.floor(Date.now() * Math.random()).toString(36)}` ,
        name: 'Royal Lancaster London',
        city: 'Londres',
        address: 'Lancaster Terrace, Westminster Borough',
        overview: "This 5-star London hotel is situated in a quiet area close to Hyde Park, Marble Arch and Lancaster Gate tube station. The accommodation has an incredible panoramic view of London. There is a free on-site fitness center open 24/7, as well as 2 award-winning restaurants.",
        avaliacao: 4.7,
        day_price: 121.78,
        features :{
            wifi: true,
            drink: true,
            gym: true,
            pool: true,
            restaurant: true
        },
        image1: h4_1,
        image2: h4_2,
        image3: h4_3,
        latitude:51.512297,
        longitude: -0.177391,
    },
]