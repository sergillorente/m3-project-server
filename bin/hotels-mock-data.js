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
        "image": "https://cdn.quierohotel.com/hotel-barcelo-sants-PF1698_1.jpg",
        "title": "Hotel Barceló Sants",
        "description": "At the Barceló Sants**** the futuristic, cutting-edge design resembles a space station, where guests can imagine themselves on an intergalactic trip. Located above Sants railway station and with direct access to the high-speed AVE and Barcelona's metro and local train links, this is the best-connected hotel in the city. It is located just 500 m from the Barcelona Convention Centre and Trade Fair Centre and Montjuïc, 15 minutes by train from El Prat International Airport and 4 minutes by train from Plaza Catalunya.",
        "district": "Sants-Montjuïc",
        "category": 4
    },
    {
        "image": "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/15/19/151952_v4.jpeg",
        "title": "Hotel Miramar Barcelona",
        "description": "Barcelona extends, slowly, from the tip of your toes to the horizon. Rest and gaze. To look at the sea latched to the shore, at the port. Beauty extends from the horizon all the way to the edge of your bed, even in the stitches of the sofa. And, while you sit on your comfortable terrace, the day looks appealing, kind and beautiful.",
        "district": "Sants-Montjuïc",
        "category": 5
    },
    {
        "image": "https://y.cdrst.com/foto/hotel-sf/c81/granderesp/nh-barcelona-les-corts-exterior-85c861c.jpg",
        "title": "Hotel NH Barcelona Les Corts",
        "description": "Now that we can start to dream, explore and travel again, it is more important than ever for us to be able to do so safely with peace of mind. At NH Hotel Group we want you to be able to keep enjoying and having unforgettable experiences at our hotels. So we have created Feel Safe at NH. We have implemented a series of measures, approved by safety experts, in all our hotels. Implementation of some of these measures may alter the availability of some services. This is to ensure that our guests, employees and suppliers can continue to enjoy all our destinations without any worries, reducing the risks of infection by Coronavirus to a minimum .",
        "district": "Les Corts",
        "category": 3
    },
    {
        "image": "https://cdn.atrapalo.com/hoteles/picture/s/436/2/1/4081181.jpg",
        "title": "Hotel AC by Marriott Victoria Suites",
        "description": "The elegant AC Hotel Victoria Suites features 58 beautiful rooms of 45 square meters, an amazing terrace, a fitness center and parking on-site. AC Hotel Victoria Suites also boasts two well-designed event rooms. The hotel is located in the Pedralbes residential quarter, next to the barrio de las Corts area, the famous Camp Nou Stadium, and Football Museum. This location provides easy access to the Centre of Barcelona, El Prat airport and the train station. El Palau Reial de Pedralbes, previously a royal residence, the Palacio de Congresos, and the Fira de Barcelona exhibition centre are also within a short distance of the hotel. Santa Clara is a new restaurant with a garden in the Pedralbes district of Barcelona, opening in November 2015. Decorated by the prestigious interior decorator, Jaime Beriestain and headed by the owners of Restaurant Igueldo, Santa Clara serves honest, classical cuisine, based on top-quality market products prepared with the utmost care.",
        "district": "Les Corts",
        "category": 4
    },
    {
        "image": "https://barcelona-home.com/events-and-guide/wp-content/uploads/2017/02/Fairmont-Rey-Juan-Carlos-I-1.jpg",
        "title": "Hotel Fairmont Rey Juan Carlos I Barcelona",
        "description": "Set in 25,000 m² of breathtaking gardens with views of the stunning skyline; Fairmont Barcelona Rey Juan Carlos I provides guests with an exclusive retreat in Barcelona. This unique, five star hotel is located on Avenida Diagonal and surrounded by major attractions such as Camp Nou stadium and Barcelona Polo Club. With 395 guest rooms and 37 suites, as well as impeccable service, unrivalled amenities and free wifi, Fairmont Barcelona Rey Juan Carlos I offers guests an exceptional experience.",
        "district": "Les Corts",
        "category": 5
    },
    {
        "image": "https://lh3.googleusercontent.com/proxy/HRRX3lGtC4wsZs0-0nsyqlrOAf-R89l6G96eHybo1d-XTABnaHxQIc79Zz9d5wEGxDSXkYlr58RIUBEWewpiBeaFtF9f4nMCCirf4X5Ta1g06rsOpShvUeptt7MJONEL_kYSWismHXsc",
        "title": "Hotel Silken Sant Gervasi",
        "description": "The welcoming grounds of the Hotel Silken Sant Gervasi make our guests’ stays incredibly enjoyable experiences. The hotel’s size, with just 63 rooms, is part of its unique charm, as it gives it the warmth of smaller establishments. It is perfectly located in Barcelona, in the quiet and safe neighbourhood of Sarrià-Sant Gervasi, very well-connected with the city’s historic centre, as well as other points of interest like the Montjuïc park and Fira 2 convention centre, as well as tourist highlights like Güell Park or Tibidabo Mountain. There is a metro stop just 50 metres from the hotel’s door, making the Silken St. Gervasi a magnificent option to experience the City of Counts in an innovative and practical way.",
        "district": "Sarrià-Sant Gervasi",
        "category": 3
    },
    {
        "image": "https://pix10.agoda.net/hotelImages/120/120609/120609_17103115190058524294.jpg?s=414x232&ar=16x9",
        "title": "Wilson Boutique Hotel",
        "description": "Wilson Boutique Hotel is situated in a characteristic building on Avenida Diagonal. The perfect place to begin the day with a hearty breakfast, among one of Barcelona's main shopping avenues, near Passeig de Gracia. The hotel was fully renovated in 2009, keeping the unique beauty of the building's facade and adding modern and elegant interiors offering comfort and warmth.",
        "district": "Sarrià-Sant Gervasi",
        "category": 4
    },
    {
        "image": "https://fishhotels-api.derbyhotels.com/storage/grehd/5d8231e37dac0081270a6bdf/xxl/fachada.jpg",
        "title": "Claris Hotel & Spa",
        "description": "The Claris Hotel & Spa 5*GL has 124 rooms and exclusive, newly-renovated suites. The connection with art is reflected in the impressive collection of pieces exhibited in each room.",
        "district": "Sarrià-Sant Gervasi",
        "category": 5
    },
    {
        "image": "https://www.hotelactual.com/wp2017/wp-content/uploads/home-01.jpg",
        "title": "Hotel Actual Boutique",
        "description": "Hotel Actual has 35 rooms spread over 6 floors. They have been designed and decorated to guarantee comfortable accommodation in the heart of Barcelona.",
        "district": "Gràcia",
        "category": 3
    },
    {
        "image": "https://cf.bstatic.com/images/hotel/max1024x768/171/171784403.jpg",
        "title": "Hotel Barcelona 1882",
        "description": "If you are looking for an accommodation which combines luxury and relaxation and is environmentally sustainable, Barcelona 1882 is the hotel for you.        The name of our hotel is a tribute to Gaudí and Modernism: 1882 is the year in which construction began on the Sagrada Familia, a small gesture to recognise Gaudí and his masterpiece.",
        "district": "Gràcia",
        "category": 4
    },
    {
        "image": "https://foto.hrsstatic.com/fotos/0/3/545/350/80/000000/http%3A%2F%2Ffoto-origin.hrsstatic.com%2Ffoto%2F4%2F7%2F1%2F2%2F471240%2F471240_v_20503559.jpg/mKc%2FngCzY8%2FFjmGjdUCJLQ%3D%3D/5772,3853/6/El_Palauet_Living_Barcelona-Barcelona-Terrasse-2-471240.jpg",
        "title": "El Palauet Barcelona",
        "description": "We just love looking after our guests and that’s why we celebrate their arrival by offering an exclusive welcome gift which changes seasonally, an El Palauet shopping bag and notepads to jot down everything about your trip to our beautiful city. With each luxury suite you can enjoy the services of the Personal Assistant Team who will attend to your every need and make your stay unforgettable. They will prepare breakfast in your suite, organise restaurant reservations or private dinner, fill the fridge with everything you might need, organise dry cleaning, massages, hairdressing and make up services, a personal shopper, a personal trainer, babysitting, car renting, entrance tickets, and anything and everything that you may need.",
        "district": "Gràcia",
        "category": 5
    },
    {
        "image": "https://franciscotorreblanca.es/wp-content/uploads/2019/09/praktik-bakery-hotel.jpg",
        "title": "Hotel Praktik Bakery",
        "description": "Want to learn how to make your own bread like the experts? Discover authentic bakers’ secrets and learn how to make homemade bread - the best in the world! A cozy hotel where things are done differntly and which brings new concepts!",
        "district": "Horta-Guinardó",
        "category": 3
    },
    {
        "image": "https://cf.bstatic.com/images/hotel/max1280x900/122/122602294.jpg",
        "title": "Hotel Alimara Barcelona",
        "description": "Alimara Hotel is tranquility. Everything is within your reach without being immersed in the bustle of the city. The Collserola mountain range, one of the largest metropolitan parks in the world, gives you the energy you need to immerse yourself in the streets of Barcelona. Relax and enjoy.",
        "district": "Horta-Guinardó",
        "category": 4
    },
    {
        "image": "https://www.hotelfloridabarcelona.com/media/restauracion/tb-bar/01.jpg",
        "title": "Gran Hotel La Florida",
        "description": "Welcome to a captivating place. A luxury boutique hotel in Barcelona, ​​a charming hotel where you can enjoy the best views over Barcelona city in a privileged environment.",
        "district": "Horta-Guinardó",
        "category": 5
    },
    {
        "image": "https://storage.googleapis.com/static-content-hc/sites/default/files/catalonialamaquinista-entrada.jpg",
        "title": "Catalonia La Maquinista Barcelona",
        "description": "The Catalonia La Maquinista hotel is located in the Sant Andreu neighbourhood of Barcelona, next to the La Maquinista shopping centre that provides an extensive leisure and restaurant offering. It is perfectly communicated with the city’s principal points of interest by Metro and bus. The 92 rooms are bright and have air conditioning, a flat screen TV, a desk and a safe. Free wifi is available throughout the hotel. The rooms are done out in wood and warm tones for a sense of peace and calm. The hotel restaurant serves a very extensive buffet breakfast. The lunch and dinner menu feature Mediterranean cuisine. The hotel also has a car park in the building, a laundry and dry-cleaning service and free wifi throughout.",
        "district": "Nou Barris",
        "category": 3
    },
    {
        "image": "https://cf.bstatic.com/images/hotel/max1024x768/178/178853496.jpg",
        "title": "Four Points by Sheraton Barcelona Diagonal",
        "description": "Set in the 22@ district, the Four Points by Sheraton Barcelona Diagonal is within walking distance of museums, shops, restaurants, beaches and major attractions like Sagrada Familia and the Agbar Tower. Barcelona Sants Station is just 6 kilometers away and Barcelona El Prat Airport (BCN) is 22 kilometers away. Our 24-hour fitness center's state-of the-art equipment will help you stay fit while you're traveling. Stop by our restaurant and try some of our tasty local meals throughout the day. Get your evening going with our diverse beer and wine selections. For business meetings and social events, our soundproof function rooms feature wireless High-Speed Internet Access, audiovisual technology and outstanding catering options. Choose from 154 guest rooms to get a Classic Room, or upgrade if you want more space or a great view. All of them have the plush signature Four Points bed, a flat-screen TV, a large work desk, High-Speed WiFi and bottled water daily.",
        "district": "Sant Martí",
        "category": 3
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/6/6d/52_Hotel_Meli%C3%A0_Sky%2C_av._Diagonal.JPG",
        "title": "Melià Barcelona Sky",
        "description": "Meliá Barcelona Sky is located in one of the city’s most avant-garde and iconic skyscrapers. Enjoy the stunning views and the most exclusive services",
        "district": "Sant Martí",
        "category": 4
    },
    {
        "image": "https://hospitality-on.com/sites/default/files/2019-02/hilton-diagonal-mar-barcelona.jpg",
        "title": "Hilton Diagonal Mar Barcelona",
        "description": "We’re in Barcelona’s business district, next to the Convention Center CCIB and Diagonal Mar shopping mall. Platja de Llevant beach is 550 meters away, and we’re five minutes from El Maresme metro station. The metro ride to the city center takes 20 minutes. Enjoy our seasonal beach club, outdoor pool, and fitness center.",
        "district": "Sant Martí",
        "category": 5
    },
]

module.exports = hotels;