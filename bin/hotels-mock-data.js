const hotels = [
    {
        "image": "https://cf.bstatic.com/images/hotel/max500/223/22350093.jpg",
        "title": "Hotel California Barcelona",
        "description": "The Hotel California offers accommodation just in the center of Barcelona with cozy rooms free-smoke, decorated with high quality materials and designed to offer the best comfort and well-being to all our guests. All of them are moderns, quiet, Wi-Fi, TV HD, temperature controlled and much more services awaiting for you to be enjoyed.",
        "district": "Ciutat Vella",
        "category": 3
    },
    {
        "image": "https://cmspro.h10hotels.com/ImagenesHotel/Lobby,%20Lobby%20bar%201.jpg",
        "title": "H10 Cubik",
        "description": "The H10 Cubik is an exclusive four-star superior hotel located in Barcelona’s historic centre, very close to Barcelona Cathedral. Its Brutalist interior design plays with geometric shapes and pure colours. It features bright rooms, the Market Restaurant and the spectacular Atik Terrace with plunge pool and stunning views of the Cathedral.",
        "district": "Ciutat Vella",
        "category": 4
    },
    {
        "image": "https://www.ohlabarcelona.com/assets/themes/www.ohlabarcelona.com/img/discounts/Terrace_3-min_(1).tmedium.jpg",
        "title": "Ohla Barcelona",
        "description": "Welcome to Ohla Barcelona, a hotel full of art that looks out with the one-thousand ceramic eyes on its façade, by Frederic Amat, in the heart of Barcelona’s Gothic Quarter, just five minutes from the Rambla and the Boqueria market and two from the Cathedral. A hotel full of history, located right where Roman water channels passed through the city, where the palace of the first Count of Barcelona stood, and, more recently, where the city’s first department store, Casa Vilardell, was once found. A history on which we’ve built a designer boutique hotel from the ground up. A culinary hotel with Caelis, the restaurant by Romain Fornell with one Michelin star. A five-star boutique hotel with 74 rooms at which guest services are part of our essence. Come in and enjoy your stay.",
        "district": "Ciutat Vella",
        "category": 5
    },
    {
        "image": "https://media-cdn.tripadvisor.com/media/photo-s/1a/9d/23/62/exterior.jpg",
        "title": "Hotel Astoria",
        "description": "The Astoria is a classic amongst Barcelona’s hotels, a 3-star boutique hotel located off the emblematic Avinguda Diagonal and steps from Passeig de Gràcia, the city’s trendiest shopping district. Elegant and modern, the hotel provides comfort and charm with every detail. Housed in an elegant building in Barcelona’s Eixample district, the hotel’s classic mid-twentieth-century architecture is a striking contrast to its renovated interior. One of the hotel’s main features are the exquisite pieces of art—modernist posters, frescoes and busts alongside marble and delicate Lalique crystal—that decorate its walls. The hotel has 117 elegant rooms, a business center, meeting rooms and unsurpassable venues like the terrace and outdoor swimming pool and rooftop gym, gourmet restaurant and museum dedicated to the Catalan illustrator Ricard Opisso.",
        "district": "Eixample",
        "category": 3
    },
    {
        "image": "https://www.epoquehotels.com/data/hotels/111/hotel-pulitzer-cover-20130411-224140-640.jpg",
        "title": "Hotel Pulitzer",
        "description": "Right from the very beginning, we felt very strongly that simply “existing” was not enough, but that instead we had to commit to really “being”. When we talk about BEING, what we mean is that we needed to engage, in a very real way, with our people, with our city, and – why not – with our planet. From this idea, our #PulitzerCommitment sprang with a force, and this motto had guided us in each and every step that we have taken since then, and will continue to guide us in the steps we take in the future. Health and nutrition, sustainability, recycling and energy saving, raising awareness for integrating people with disabilities and supporting foundations that work towards curing diseases or that provide new opportunities for disadvantaged people.",
        "district": "Eixample",
        "category": 4
    },
    {
        "image": "https://www.hotelcottonhouse.com/_img?img=/img/library/cotton-house-biblioteca1.jpg&transform=resize,640",
        "title": "Cotton House Hotel",
        "description": "The Cotton House Hotel stands imposingly on the site of the former headquarters of the Cotton Textile Foundation “Fundación Textil Algodonera”, an emblematic 19th-century building in the neoclassical style which is a landmark in the city of Barcelona. Built on the orders of a family of the Catalan bourgeoisie when the textile industry was at its height, it was sold in the middle of the 20th Century to the Cotton Producers Guild which established its headquarters there with the aim of housing the highest possible number of cotton-producing bodies and services: the idea was to create a genuine Cotton House Hotel.",
        "district": "Eixample",
        "category": 5
    },
    {
        "image": "https://www.hotel-azulbarcelona.com/wp-content/uploads/sites/1827/nggallery/gallery-hotel/HOTEL_AZUL_FACHADA_01.jpg",
        "title": "Hotel Acta Azul",
        "description": "We are a 5-minute walk away from Plaza España, just a few minutes from the Fira Barcelona Montjuic Exhibition Centre and next to the Las Arenas shopping centre. With excellent connections to the main lines of public transport, the centre of Barcelona, the main attractions and El Prat de Llobregat International Airport are all within easy reach.",
        "district": "Sants-Montjuïc",
        "category": 3
    },
    {
        "image": String,
        "title": String,
        "description": String,
        "district": "Sants-Montjuïc",
        "category": 4
    },
    {
        "image": String,
        "title": String,
        "description": String,
        "district": "Sants-Montjuïc",
        "category": 5
    },
    {
        "image": String,
        "title": String,
        "description": String,
        "district": "Les Corts",
        "category": 3
    },
    {
        "image": String,
        "title": String,
        "description": String,
        "district": "Les Corts",
        "category": 4
    },
    {
        "image": String,
        "title": String,
        "description": String,
        "district": "Les Corts",
        "category": 5
    },
    {
        "image": String,
        "title": String,
        "description": String,
        "district": "Sarrià-Sant Gervasi",
        "category": 3
    },
    {
        "image": String,
        "title": String,
        "description": String,
        "district": "Sarrià-Sant Gervasi",
        "category": 4
    },
    {
        "image": String,
        "title": String,
        "description": String,
        "district": "Sarrià-Sant Gervasi",
        "category": 5
    },
    {
        "image": String,
        "title": String,
        "description": String,
        "district": "Gràcia",
        "category": 3
    },
    {
        "image": String,
        "title": String,
        "description": String,
        "district": "Gràcia",
        "category": 4
    },
    {
        "image": String,
        "title": String,
        "description": String,
        "district": "Gràcia",
        "category": 5
    },
    {
        "image": String,
        "title": String,
        "description": String,
        "district": "Horta-Guinardó",
        "category": 3
    },
    {
        "image": String,
        "title": String,
        "description": String,
        "district": "Horta-Guinardó",
        "category": 4
    },
    {
        "image": String,
        "title": String,
        "description": String,
        "district": "Horta-Guinardó",
        "category": 5
    },
    {
        "image": String,
        "title": String,
        "description": String,
        "district": "Nou Barris",
        "category": 3
    },
    {
        "image": String,
        "title": String,
        "description": String,
        "district": "Nou Barris",
        "category": 4
    },
    {
        "image": String,
        "title": String,
        "description": String,
        "district": "Nou Barris",
        "category": 5
    },
    {
        "image": String,
        "title": String,
        "description": String,
        "district": "Sant Andreu",
        "category": 3
    },
    {
        "image": String,
        "title": String,
        "description": String,
        "district": "Sant Andreu",
        "category": 4
    },
    {
        "image": String,
        "title": String,
        "description": String,
        "district": "Sant Andreu",
        "category": 5
    },
    {
        "image": String,
        "title": String,
        "description": String,
        "district": "Sant Martí",
        "category": 3
    },
    {
        "image": String,
        "title": String,
        "description": String,
        "district": "Sant Martí",
        "category": 4
    },
    {
        "image": String,
        "title": String,
        "description": String,
        "district": "Sant Martí",
        "category": 5
    },
]