let mock = [
  {
    "id": 1,
    "make": "BMW",
    "model": "7 Series",
    "model_year": "1994",
    "price": "33.95",
    "state": "Wisconsin",
    "image": 1,
    "color": "#E0B0FF"
  },
  {
    "id": 2,
    "make": "Audi",
    "model": "80",
    "model_year": "1992",
    "price": "51.95",
    "state": "South Dakota",
    "image": 1,
    "color": "#EE82EE"
  },
  {
    "id": 3,
    "make": "Nissan",
    "model": "NV3500 HD Cargo",
    "model_year": "2018",
    "price": "199.99",
    "state": "Vermont",
    "image": 1,
    "color": "#C9C0BB"
  },
  {
    "id": 4,
    "make": "Suzuki",
    "model": "XL-7",
    "model_year": "2004",
    "price": "189",
    "state": "Maryland",
    "image": 1,
    "color": "#FFDF00"
  },
  {
    "id": 5,
    "make": "MAZDA",
    "model": "MAZDA3",
    "model_year": "2014",
    "price": "176.99",
    "state": "Massachusetts",
    "image": 0,
    "color": "#436B95"
  },
  {
    "id": 6,
    "make": "FIAT",
    "model": "500L",
    "model_year": "2018",
    "price": "106",
    "state": "Wisconsin",
    "image": 0,
    "color": "#C19A6B"
  },
  {
    "id": 7,
    "make": "GMC",
    "model": "1500 Club Coupe",
    "model_year": "1998",
    "price": "36.99",
    "state": "Ohio",
    "image": 0,
    "color": "#C09999"
  },
  {
    "id": 8,
    "make": "Pontiac",
    "model": "Vibe",
    "model_year": "2006",
    "price": "11.95",
    "state": "Florida",
    "image": 0,
    "color": "#0067A5"
  },
  {
    "id": 9,
    "make": "Pontiac",
    "model": "Grand Am",
    "model_year": "1998",
    "price": "198",
    "state": "New York",
    "image": 0,
    "color": "#98FF98"
  },
  {
    "id": 10,
    "make": "Mitsubishi",
    "model": "Expo",
    "model_year": "1993",
    "price": "45.99",
    "state": "Illinois",
    "image": 0,
    "color": "#8DA399"
  },
  {
    "id": 11,
    "make": "Audi",
    "model": "Q7",
    "model_year": "2012",
    "price": "149.95",
    "state": "Michigan",
    "image": 1,
    "color": "#1F75FE"
  },
  {
    "id": 12,
    "make": "Audi",
    "model": "S8",
    "model_year": "2017",
    "price": "180",
    "state": "New Mexico",
    "image": 1,
    "color": "#00BFFF"
  },
  {
    "id": 13,
    "make": "Nissan",
    "model": "Altima",
    "model_year": "2012",
    "price": "123",
    "state": "Missouri",
    "image": 1,
    "color": "#FADA5E"
  },
  {
    "id": 14,
    "make": "Toyota",
    "model": "Tundra Regular Cab",
    "model_year": "2006",
    "price": "64",
    "state": "Virginia",
    "image": 0,
    "color": "#00FA9A"
  },
  {
    "id": 15,
    "make": "Bentley",
    "model": "Flying Spur",
    "model_year": "2014",
    "price": "103.95",
    "state": "Kentucky",
    "image": 1,
    "color": "#1974D2"
  },
  {
    "id": 16,
    "make": "Hyundai",
    "model": "Veracruz",
    "model_year": "2009",
    "price": "157",
    "state": "Virginia",
    "image": 1,
    "color": "#B784A7"
  },
  {
    "id": 17,
    "make": "Chevrolet",
    "model": "Silverado 3500 HD Extended Cab",
    "model_year": "2009",
    "price": "16",
    "state": "New Jersey",
    "image": 0,
    "color": "#E3F988"
  },
  {
    "id": 18,
    "make": "GMC",
    "model": "Sonoma Club Coupe Cab",
    "model_year": "1998",
    "price": "140.99",
    "state": "Arkansas",
    "image": 0,
    "color": "#F0F8FF"
  },
  {
    "id": 19,
    "make": "INFINITI",
    "model": "EX",
    "model_year": "2010",
    "price": "39.99",
    "state": "Illinois",
    "image": 1,
    "color": "#F19CBB"
  },
  {
    "id": 20,
    "make": "Toyota",
    "model": "Prius",
    "model_year": "2014",
    "price": "27.99",
    "state": "Alabama",
    "image": 0,
    "color": "#D92121"
  },
  {
    "id": 21,
    "make": "Lexus",
    "model": "ES",
    "model_year": "2007",
    "price": "101.99",
    "state": "Indiana",
    "image": 1,
    "color": "#ADD8E6"
  },
  {
    "id": 22,
    "make": "Kia",
    "model": "Soul EV",
    "model_year": "2018",
    "price": "99.95",
    "state": "New Jersey",
    "image": 0,
    "color": "#008080"
  },
  {
    "id": 23,
    "make": "Chrysler",
    "model": "Pacifica Hybrid",
    "model_year": "2017",
    "price": "121",
    "state": "Arkansas",
    "image": 1,
    "color": "#C04000"
  },
  {
    "id": 24,
    "make": "Honda",
    "model": "Civic",
    "model_year": "2012",
    "price": "26.95",
    "state": "Arkansas",
    "image": 1,
    "color": "#6C541E"
  },
  {
    "id": 25,
    "make": "Chevrolet",
    "model": "Silverado 1500 Regular Cab",
    "model_year": "2007",
    "price": "180.99",
    "state": "Pennsylvania",
    "image": 0,
    "color": "#40826D"
  },
  {
    "id": 26,
    "make": "GMC",
    "model": "2500 Club Coupe",
    "model_year": "1997",
    "price": "100.99",
    "state": "Idaho",
    "image": 0,
    "color": "#86608E"
  },
  {
    "id": 27,
    "make": "Bentley",
    "model": "Continental",
    "model_year": "2016",
    "price": "56",
    "state": "New Hampshire",
    "image": 1,
    "color": "#D70040"
  },
  {
    "id": 28,
    "make": "Lamborghini",
    "model": "Aventador",
    "model_year": "2012",
    "price": "49.99",
    "state": "Kansas",
    "image": 1,
    "color": "#4B0082"
  },
  {
    "id": 29,
    "make": "Volkswagen",
    "model": "New Beetle",
    "model_year": "2005",
    "price": "122.95",
    "state": "New Jersey",
    "image": 1,
    "color": "#1CAC78"
  },
  {
    "id": 30,
    "make": "Audi",
    "model": "Q7",
    "model_year": "2018",
    "price": "148.95",
    "state": "North Carolina",
    "image": 0,
    "color": "#7B68EE"
  },
  {
    "id": 31,
    "make": "Ford",
    "model": "F350 Super Duty Crew Cab",
    "model_year": "2015",
    "price": "175.95",
    "state": "Pennsylvania",
    "image": 1,
    "color": "#E8CCD7"
  },
  {
    "id": 32,
    "make": "BMW",
    "model": "i8",
    "model_year": "2015",
    "price": "173.95",
    "state": "Indiana",
    "image": 1,
    "color": "#002147"
  },
  {
    "id": 33,
    "make": "Ford",
    "model": "Focus",
    "model_year": "2014",
    "price": "167",
    "state": "New York",
    "image": 1,
    "color": "#C21E56"
  },
  {
    "id": 34,
    "make": "Chrysler",
    "model": "200",
    "model_year": "2014",
    "price": "139.95",
    "state": "Texas",
    "image": 0,
    "color": "#826644"
  },
  {
    "id": 35,
    "make": "GMC",
    "model": "Sonoma Extended Cab",
    "model_year": "1999",
    "price": "40.95",
    "state": "New York",
    "image": 0,
    "color": "#1034A6"
  },
  {
    "id": 36,
    "make": "Nissan",
    "model": "Titan Crew Cab",
    "model_year": "2010",
    "price": "154.99",
    "state": "Indiana",
    "image": 1,
    "color": "#663399"
  },
  {
    "id": 37,
    "make": "Mercedes-Benz",
    "model": "Sprinter 2500 Cargo",
    "model_year": "2013",
    "price": "186",
    "state": "Illinois",
    "image": 0,
    "color": "#555D50"
  },
  {
    "id": 38,
    "make": "Ford",
    "model": "Focus",
    "model_year": "2009",
    "price": "187",
    "state": "Arkansas",
    "image": 1,
    "color": "#C95A49"
  },
  {
    "id": 39,
    "make": "Chevrolet",
    "model": "Silverado 3500 Regular Cab",
    "model_year": "2004",
    "price": "175",
    "state": "Ohio",
    "image": 1,
    "color": "#FFDAE9"
  },
  {
    "id": 40,
    "make": "Audi",
    "model": "A4 allroad",
    "model_year": "2017",
    "price": "195",
    "state": "Wisconsin",
    "image": 1,
    "color": "#FFF5EE"
  },
  {
    "id": 41,
    "make": "Ford",
    "model": "F250 Regular Cab",
    "model_year": "1995",
    "price": "45.99",
    "state": "Louisiana",
    "image": 0,
    "color": "#7B68EE"
  },
  {
    "id": 42,
    "make": "Saab",
    "model": "9000",
    "model_year": "1996",
    "price": "91",
    "state": "Maryland",
    "image": 1,
    "color": "#914E75"
  },
  {
    "id": 43,
    "make": "Dodge",
    "model": "Dart",
    "model_year": "2013",
    "price": "122",
    "state": "New Jersey",
    "image": 0,
    "color": "#DE6FA1"
  },
  {
    "id": 44,
    "make": "GMC",
    "model": "Sierra 2500 HD Regular Cab",
    "model_year": "2000",
    "price": "64.99",
    "state": "Florida",
    "image": 1,
    "color": "#E34234"
  },
  {
    "id": 45,
    "make": "Chevrolet",
    "model": "Malibu",
    "model_year": "2017",
    "price": "53.95",
    "state": "Massachusetts",
    "image": 1,
    "color": "#FAF0BE"
  },
  {
    "id": 46,
    "make": "Chrysler",
    "model": "LHS",
    "model_year": "2000",
    "price": "94.99",
    "state": "Illinois",
    "image": 1,
    "color": "#A8C3BC"
  },
  {
    "id": 47,
    "make": "Chevrolet",
    "model": "G-Series 1500",
    "model_year": "1996",
    "price": "186.99",
    "state": "Georgia",
    "image": 0,
    "color": "#FFFFE0"
  },
  {
    "id": 48,
    "make": "Ford",
    "model": "F350 Super Duty Regular Cab",
    "model_year": "2008",
    "price": "180.95",
    "state": "Vermont",
    "image": 0,
    "color": "#FC6C85"
  },
  {
    "id": 49,
    "make": "Ferrari",
    "model": "F430",
    "model_year": "2008",
    "price": "118",
    "state": "California",
    "image": 0,
    "color": "#F3E5AB"
  },
  {
    "id": 50,
    "make": "Toyota",
    "model": "Prius v",
    "model_year": "2015",
    "price": "80",
    "state": "California",
    "image": 0,
    "color": "#002387"
  },
  {
    "id": 51,
    "make": "Nissan",
    "model": "Rogue",
    "model_year": "2020",
    "price": "96",
    "state": "Alabama",
    "image": 0,
    "color": "#CD7F32"
  },
  {
    "id": 52,
    "make": "Nissan",
    "model": "370Z",
    "model_year": "2011",
    "price": "64",
    "state": "Nevada",
    "image": 0,
    "color": "#CAE00D"
  },
  {
    "id": 53,
    "make": "Acura",
    "model": "ZDX",
    "model_year": "2012",
    "price": "59.99",
    "state": "Illinois",
    "image": 0,
    "color": "#F400A1"
  },
  {
    "id": 54,
    "make": "Ford",
    "model": "Thunderbird",
    "model_year": "2002",
    "price": "68.99",
    "state": "Virginia",
    "image": 1,
    "color": "#ACBF60"
  },
  {
    "id": 55,
    "make": "Mitsubishi",
    "model": "Galant",
    "model_year": "2003",
    "price": "183.95",
    "state": "Vermont",
    "image": 0,
    "color": "#CD5700"
  },
  {
    "id": 56,
    "make": "Chevrolet",
    "model": "Uplander Cargo",
    "model_year": "2005",
    "price": "129.95",
    "state": "New York",
    "image": 0,
    "color": "#FF9966"
  },
  {
    "id": 57,
    "make": "Nissan",
    "model": "TITAN XD King Cab",
    "model_year": "2017",
    "price": "99.99",
    "state": "Wisconsin",
    "image": 0,
    "color": "#FF9933"
  },
  {
    "id": 58,
    "make": "Toyota",
    "model": "Prius",
    "model_year": "2019",
    "price": "162.95",
    "state": "Pennsylvania",
    "image": 1,
    "color": "#DF73FF"
  },
  {
    "id": 59,
    "make": "GMC",
    "model": "Sierra (Classic) 2500 Crew Cab",
    "model_year": "2000",
    "price": "112.99",
    "state": "Alabama",
    "image": 0,
    "color": "#E97451"
  },
  {
    "id": 60,
    "make": "Chrysler",
    "model": "Concorde",
    "model_year": "2000",
    "price": "181",
    "state": "Virginia",
    "image": 0,
    "color": "#1B4D3E"
  },
  {
    "id": 61,
    "make": "Lexus",
    "model": "LS",
    "model_year": "1993",
    "price": "39.99",
    "state": "Washington",
    "image": 1,
    "color": "#FAF0BE"
  },
  {
    "id": 62,
    "make": "GMC",
    "model": "Sierra 1500 Crew Cab",
    "model_year": "2012",
    "price": "16.95",
    "state": "Minnesota",
    "image": 1,
    "color": "#FCC200"
  },
  {
    "id": 63,
    "make": "GMC",
    "model": "Savana 3500 Cargo",
    "model_year": "2008",
    "price": "132",
    "state": "Florida",
    "image": 1,
    "color": "#FED8B1"
  },
  {
    "id": 64,
    "make": "Nissan",
    "model": "Quest",
    "model_year": "2012",
    "price": "27.99",
    "state": "California",
    "image": 1,
    "color": "#126180"
  },
  {
    "id": 65,
    "make": "Acura",
    "model": "MDX",
    "model_year": "2008",
    "price": "131.99",
    "state": "New York",
    "image": 1,
    "color": "#FFEF00"
  },
  {
    "id": 66,
    "make": "Buick",
    "model": "Encore",
    "model_year": "2019",
    "price": "74.95",
    "state": "South Carolina",
    "image": 1,
    "color": "#727472"
  },
  {
    "id": 67,
    "make": "Lexus",
    "model": "SC",
    "model_year": "2007",
    "price": "36.95",
    "state": "Florida",
    "image": 1,
    "color": "#EEED09"
  },
  {
    "id": 68,
    "make": "Mercedes-Benz",
    "model": "SL-Class",
    "model_year": "2003",
    "price": "73.95",
    "state": "Washington",
    "image": 1,
    "color": "#EAA221"
  },
  {
    "id": 69,
    "make": "Land Rover",
    "model": "Range Rover Sport",
    "model_year": "2012",
    "price": "98.99",
    "state": "Wisconsin",
    "image": 0,
    "color": "#8B0000"
  },
  {
    "id": 70,
    "make": "BMW",
    "model": "M2",
    "model_year": "2016",
    "price": "12.95",
    "state": "Iowa",
    "image": 0,
    "color": "#CF71AF"
  },
  {
    "id": 71,
    "make": "Chevrolet",
    "model": "Express 2500 Cargo",
    "model_year": "2015",
    "price": "40.95",
    "state": "New Jersey",
    "image": 1,
    "color": "#010B13"
  },
  {
    "id": 72,
    "make": "Chrysler",
    "model": "200",
    "model_year": "2015",
    "price": "185",
    "state": "New Hampshire",
    "image": 0,
    "color": "#89CFF0"
  },
  {
    "id": 73,
    "make": "GMC",
    "model": "Yukon",
    "model_year": "2017",
    "price": "81",
    "state": "Kentucky",
    "image": 0,
    "color": "#E0FFFF"
  },
  {
    "id": 74,
    "make": "Toyota",
    "model": "Prius",
    "model_year": "2003",
    "price": "165.99",
    "state": "Colorado",
    "image": 0,
    "color": "#CF6BA9"
  },
  {
    "id": 75,
    "make": "Mercedes-Benz",
    "model": "S-Class",
    "model_year": "2005",
    "price": "122",
    "state": "New Hampshire",
    "image": 1,
    "color": "#318CE7"
  },
  {
    "id": 76,
    "make": "MAZDA",
    "model": "B-Series Cab Plus",
    "model_year": "2000",
    "price": "116",
    "state": "Georgia",
    "image": 0,
    "color": "#1974D2"
  },
  {
    "id": 77,
    "make": "Subaru",
    "model": "Forester",
    "model_year": "2011",
    "price": "28.99",
    "state": "Mississippi",
    "image": 0,
    "color": "#00AB66"
  },
  {
    "id": 78,
    "make": "Nissan",
    "model": "Rogue",
    "model_year": "2020",
    "price": "30",
    "state": "Minnesota",
    "image": 0,
    "color": "#006DB0"
  },
  {
    "id": 79,
    "make": "Aston Martin",
    "model": "Vantage",
    "model_year": "2006",
    "price": "75.99",
    "state": "Virginia",
    "image": 1,
    "color": "#E95C4B"
  },
  {
    "id": 80,
    "make": "Volvo",
    "model": "S60",
    "model_year": "2002",
    "price": "33",
    "state": "Kansas",
    "image": 0,
    "color": "#064E40"
  },
  {
    "id": 81,
    "make": "Chevrolet",
    "model": "Lumina",
    "model_year": "1994",
    "price": "41.95",
    "state": "New York",
    "image": 1,
    "color": "#7B1113"
  },
  {
    "id": 82,
    "make": "Isuzu",
    "model": "Amigo",
    "model_year": "1998",
    "price": "184.95",
    "state": "South Dakota",
    "image": 0,
    "color": "#3B7A57"
  },
  {
    "id": 83,
    "make": "Suzuki",
    "model": "XL-7",
    "model_year": "2002",
    "price": "106",
    "state": "Texas",
    "image": 0,
    "color": "#15F4EE"
  },
  {
    "id": 84,
    "make": "Dodge",
    "model": "Charger",
    "model_year": "2007",
    "price": "19.95",
    "state": "Maryland",
    "image": 0,
    "color": "#D2691E"
  },
  {
    "id": 85,
    "make": "Plymouth",
    "model": "Colt",
    "model_year": "1992",
    "price": "22.99",
    "state": "North Dakota",
    "image": 0,
    "color": "#963D7F"
  },
  {
    "id": 86,
    "make": "GMC",
    "model": "Sonoma Crew Cab",
    "model_year": "2001",
    "price": "150",
    "state": "Alaska",
    "image": 0,
    "color": "#246BCE"
  },
  {
    "id": 87,
    "make": "Lincoln",
    "model": "MKX",
    "model_year": "2010",
    "price": "122",
    "state": "Minnesota",
    "image": 0,
    "color": "#8B8589"
  },
  {
    "id": 88,
    "make": "Rolls-Royce",
    "model": "Dawn",
    "model_year": "2016",
    "price": "87",
    "state": "Wisconsin",
    "image": 1,
    "color": "#8C92AC"
  },
  {
    "id": 89,
    "make": "Land Rover",
    "model": "Discovery",
    "model_year": "1998",
    "price": "165.99",
    "state": "Michigan",
    "image": 1,
    "color": "#F0FFFF"
  },
  {
    "id": 90,
    "make": "Nissan",
    "model": "Altima",
    "model_year": "1993",
    "price": "39",
    "state": "Oklahoma",
    "image": 1,
    "color": "#DAA520"
  },
  {
    "id": 91,
    "make": "Ford",
    "model": "F150 Super Cab",
    "model_year": "2012",
    "price": "57.95",
    "state": "Iowa",
    "image": 1,
    "color": "#A83731"
  },
  {
    "id": 92,
    "make": "BMW",
    "model": "7 Series",
    "model_year": "2011",
    "price": "86",
    "state": "California",
    "image": 0,
    "color": "#3CB371"
  },
  {
    "id": 93,
    "make": "Nissan",
    "model": "Pathfinder",
    "model_year": "2003",
    "price": "11.95",
    "state": "Iowa",
    "image": 1,
    "color": "#72A0C1"
  },
  {
    "id": 94,
    "make": "Dodge",
    "model": "D350 Regular Cab",
    "model_year": "1993",
    "price": "23.99",
    "state": "West Virginia",
    "image": 0,
    "color": "#C0448F"
  },
  {
    "id": 95,
    "make": "Volkswagen",
    "model": "Jetta III",
    "model_year": "1994",
    "price": "52",
    "state": "Iowa",
    "image": 1,
    "color": "#C8AD7F"
  },
  {
    "id": 96,
    "make": "BMW",
    "model": "X5 M",
    "model_year": "2015",
    "price": "154",
    "state": "Pennsylvania",
    "image": 0,
    "color": "#7CB9E8"
  },
  {
    "id": 97,
    "make": "Ford",
    "model": "Transit Connect Passenger",
    "model_year": "2017",
    "price": "108",
    "state": "Mississippi",
    "image": 1,
    "color": "#98817B"
  },
  {
    "id": 98,
    "make": "Chrysler",
    "model": "Crossfire",
    "model_year": "2008",
    "price": "82.95",
    "state": "Pennsylvania",
    "image": 0,
    "color": "#9C7C38"
  },
  {
    "id": 99,
    "make": "BMW",
    "model": "2 Series",
    "model_year": "2019",
    "price": "190",
    "state": "Louisiana",
    "image": 0,
    "color": "#534B4F"
  },
  {
    "id": 100,
    "make": "Volkswagen",
    "model": "Golf",
    "model_year": "2019",
    "price": "90",
    "state": "North Dakota",
    "image": 1,
    "color": "#5F8A8B"
  }
]

export default mock;