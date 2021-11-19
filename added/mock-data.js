let mock = [
  {
    "make": "BMW",
    "model": "7 Series",
    "model_year": "1994",
    "image": 1,
    "state": "Wisconsin"
  },
  {
    "make": "Audi",
    "model": "80",
    "model_year": "1992",
    "image": 1,
    "state": "South Dakota"
  },
  {
    "make": "Nissan",
    "model": "NV3500 HD Cargo",
    "model_year": "2018",
    "image": 1,
    "state": "Vermont"
  },
  {
    "make": "Suzuki",
    "model": "XL-7",
    "model_year": "2004",
    "image": 1,
    "state": "Maryland"
  },
  {
    "make": "MAZDA",
    "model": "MAZDA3",
    "model_year": "2014",
    "image": 0,
    "state": "Massachusetts"
  },
  {
    "make": "FIAT",
    "model": "500L",
    "model_year": "2018",
    "image": 0,
    "state": "Wisconsin"
  },
  {
    "make": "GMC",
    "model": "1500 Club Coupe",
    "model_year": "1998",
    "image": 0,
    "state": "Ohio"
  },
  {
    "make": "Pontiac",
    "model": "Vibe",
    "model_year": "2006",
    "image": 0,
    "state": "Florida"
  },
  {
    "make": "Pontiac",
    "model": "Grand Am",
    "model_year": "1998",
    "image": 0,
    "state": "New York"
  },
  {
    "make": "Mitsubishi",
    "model": "Expo",
    "model_year": "1993",
    "image": 0,
    "state": "Illinois"
  },
  {
    "make": "Audi",
    "model": "Q7",
    "model_year": "2012",
    "image": 1,
    "state": "Michigan"
  },
  {
    "make": "Audi",
    "model": "S8",
    "model_year": "2017",
    "image": 1,
    "state": "New Mexico"
  },
  {
    "make": "Nissan",
    "model": "Altima",
    "model_year": "2012",
    "image": 1,
    "state": "Missouri"
  },
  {
    "make": "Toyota",
    "model": "Tundra Regular Cab",
    "model_year": "2006",
    "image": 0,
    "state": "Virginia"
  },
  {
    "make": "Bentley",
    "model": "Flying Spur",
    "model_year": "2014",
    "image": 1,
    "state": "Kentucky"
  },
  {
    "make": "Hyundai",
    "model": "Veracruz",
    "model_year": "2009",
    "image": 1,
    "state": "Virginia"
  },
  {
    "make": "Chevrolet",
    "model": "Silverado 3500 HD Extended Cab",
    "model_year": "2009",
    "image": 0,
    "state": "New Jersey"
  },
  {
    "make": "GMC",
    "model": "Sonoma Club Coupe Cab",
    "model_year": "1998",
    "image": 0,
    "state": "Arkansas"
  },
  {
    "make": "INFINITI",
    "model": "EX",
    "model_year": "2010",
    "image": 1,
    "state": "Illinois"
  },
  {
    "make": "Toyota",
    "model": "Prius",
    "model_year": "2014",
    "image": 0,
    "state": "Alabama"
  },
  {
    "make": "Lexus",
    "model": "ES",
    "model_year": "2007",
    "image": 1,
    "state": "Indiana"
  },
  {
    "make": "Kia",
    "model": "Soul EV",
    "model_year": "2018",
    "image": 0,
    "state": "New Jersey"
  },
  {
    "make": "Chrysler",
    "model": "Pacifica Hybrid",
    "model_year": "2017",
    "image": 1,
    "state": "Arkansas"
  },
  {
    "make": "Honda",
    "model": "Civic",
    "model_year": "2012",
    "image": 1,
    "state": "Arkansas"
  },
  {
    "make": "Chevrolet",
    "model": "Silverado 1500 Regular Cab",
    "model_year": "2007",
    "image": 0,
    "state": "Pennsylvania"
  },
  {
    "make": "GMC",
    "model": "2500 Club Coupe",
    "model_year": "1997",
    "image": 0,
    "state": "Idaho"
  },
  {
    "make": "Bentley",
    "model": "Continental",
    "model_year": "2016",
    "image": 1,
    "state": "New Hampshire"
  },
  {
    "make": "Lamborghini",
    "model": "Aventador",
    "model_year": "2012",
    "image": 1,
    "state": "Kansas"
  },
  {
    "make": "Volkswagen",
    "model": "New Beetle",
    "model_year": "2005",
    "image": 1,
    "state": "New Jersey"
  },
  {
    "make": "Audi",
    "model": "Q7",
    "model_year": "2018",
    "image": 0,
    "state": "North Carolina"
  },
  {
    "make": "Ford",
    "model": "F350 Super Duty Crew Cab",
    "model_year": "2015",
    "image": 1,
    "state": "Pennsylvania"
  },
  {
    "make": "BMW",
    "model": "i8",
    "model_year": "2015",
    "image": 1,
    "state": "Indiana"
  },
  {
    "make": "Ford",
    "model": "Focus",
    "model_year": "2014",
    "image": 1,
    "state": "New York"
  },
  {
    "make": "Chrysler",
    "model": "200",
    "model_year": "2014",
    "image": 0,
    "state": "Texas"
  },
  {
    "make": "GMC",
    "model": "Sonoma Extended Cab",
    "model_year": "1999",
    "image": 0,
    "state": "New York"
  },
  {
    "make": "Nissan",
    "model": "Titan Crew Cab",
    "model_year": "2010",
    "image": 1,
    "state": "Indiana"
  },
  {
    "make": "Mercedes-Benz",
    "model": "Sprinter 2500 Cargo",
    "model_year": "2013",
    "image": 0,
    "state": "Illinois"
  },
  {
    "make": "Ford",
    "model": "Focus",
    "model_year": "2009",
    "image": 1,
    "state": "Arkansas"
  },
  {
    "make": "Chevrolet",
    "model": "Silverado 3500 Regular Cab",
    "model_year": "2004",
    "image": 1,
    "state": "Ohio"
  },
  {
    "make": "Audi",
    "model": "A4 allroad",
    "model_year": "2017",
    "image": 1,
    "state": "Wisconsin"
  },
  {
    "make": "Ford",
    "model": "F250 Regular Cab",
    "model_year": "1995",
    "image": 0,
    "state": "Louisiana"
  },
  {
    "make": "Saab",
    "model": "9000",
    "model_year": "1996",
    "image": 1,
    "state": "Maryland"
  },
  {
    "make": "Dodge",
    "model": "Dart",
    "model_year": "2013",
    "image": 0,
    "state": "New Jersey"
  },
  {
    "make": "GMC",
    "model": "Sierra 2500 HD Regular Cab",
    "model_year": "2000",
    "image": 1,
    "state": "Florida"
  },
  {
    "make": "Chevrolet",
    "model": "Malibu",
    "model_year": "2017",
    "image": 1,
    "state": "Massachusetts"
  },
  {
    "make": "Chrysler",
    "model": "LHS",
    "model_year": "2000",
    "image": 1,
    "state": "Illinois"
  },
  {
    "make": "Chevrolet",
    "model": "G-Series 1500",
    "model_year": "1996",
    "image": 0,
    "state": "Georgia"
  },
  {
    "make": "Ford",
    "model": "F350 Super Duty Regular Cab",
    "model_year": "2008",
    "image": 0,
    "state": "Vermont"
  },
  {
    "make": "Ferrari",
    "model": "F430",
    "model_year": "2008",
    "image": 0,
    "state": "California"
  },
  {
    "make": "Toyota",
    "model": "Prius v",
    "model_year": "2015",
    "image": 0,
    "state": "California"
  },
  {
    "make": "Nissan",
    "model": "Rogue",
    "model_year": "2020",
    "image": 0,
    "state": "Alabama"
  },
  {
    "make": "Nissan",
    "model": "370Z",
    "model_year": "2011",
    "image": 0,
    "state": "Nevada"
  },
  {
    "make": "Acura",
    "model": "ZDX",
    "model_year": "2012",
    "image": 0,
    "state": "Illinois"
  },
  {
    "make": "Ford",
    "model": "Thunderbird",
    "model_year": "2002",
    "image": 1,
    "state": "Virginia"
  },
  {
    "make": "Mitsubishi",
    "model": "Galant",
    "model_year": "2003",
    "image": 0,
    "state": "Vermont"
  },
  {
    "make": "Chevrolet",
    "model": "Uplander Cargo",
    "model_year": "2005",
    "image": 0,
    "state": "New York"
  },
  {
    "make": "Nissan",
    "model": "TITAN XD King Cab",
    "model_year": "2017",
    "image": 0,
    "state": "Wisconsin"
  },
  {
    "make": "Toyota",
    "model": "Prius",
    "model_year": "2019",
    "image": 1,
    "state": "Pennsylvania"
  },
  {
    "make": "GMC",
    "model": "Sierra (Classic) 2500 Crew Cab",
    "model_year": "2000",
    "image": 0,
    "state": "Alabama"
  },
  {
    "make": "Chrysler",
    "model": "Concorde",
    "model_year": "2000",
    "image": 0,
    "state": "Virginia"
  },
  {
    "make": "Lexus",
    "model": "LS",
    "model_year": "1993",
    "image": 1,
    "state": "Washington"
  },
  {
    "make": "GMC",
    "model": "Sierra 1500 Crew Cab",
    "model_year": "2012",
    "image": 1,
    "state": "Minnesota"
  },
  {
    "make": "GMC",
    "model": "Savana 3500 Cargo",
    "model_year": "2008",
    "image": 1,
    "state": "Florida"
  },
  {
    "make": "Nissan",
    "model": "Quest",
    "model_year": "2012",
    "image": 1,
    "state": "California"
  },
  {
    "make": "Acura",
    "model": "MDX",
    "model_year": "2008",
    "image": 1,
    "state": "New York"
  },
  {
    "make": "Buick",
    "model": "Encore",
    "model_year": "2019",
    "image": 1,
    "state": "South Carolina"
  },
  {
    "make": "Lexus",
    "model": "SC",
    "model_year": "2007",
    "image": 1,
    "state": "Florida"
  },
  {
    "make": "Mercedes-Benz",
    "model": "SL-Class",
    "model_year": "2003",
    "image": 1,
    "state": "Washington"
  },
  {
    "make": "Land Rover",
    "model": "Range Rover Sport",
    "model_year": "2012",
    "image": 0,
    "state": "Wisconsin"
  },
  {
    "make": "BMW",
    "model": "M2",
    "model_year": "2016",
    "image": 0,
    "state": "Iowa"
  },
  {
    "make": "Chevrolet",
    "model": "Express 2500 Cargo",
    "model_year": "2015",
    "image": 1,
    "state": "New Jersey"
  },
  {
    "make": "Chrysler",
    "model": "200",
    "model_year": "2015",
    "image": 0,
    "state": "New Hampshire"
  },
  {
    "make": "GMC",
    "model": "Yukon",
    "model_year": "2017",
    "image": 0,
    "state": "Kentucky"
  },
  {
    "make": "Toyota",
    "model": "Prius",
    "model_year": "2003",
    "image": 0,
    "state": "Colorado"
  },
  {
    "make": "Mercedes-Benz",
    "model": "S-Class",
    "model_year": "2005",
    "image": 1,
    "state": "New Hampshire"
  },
  {
    "make": "MAZDA",
    "model": "B-Series Cab Plus",
    "model_year": "2000",
    "image": 0,
    "state": "Georgia"
  },
  {
    "make": "Subaru",
    "model": "Forester",
    "model_year": "2011",
    "image": 0,
    "state": "Mississippi"
  },
  {
    "make": "Nissan",
    "model": "Rogue",
    "model_year": "2020",
    "image": 0,
    "state": "Minnesota"
  },
  {
    "make": "Aston Martin",
    "model": "Vantage",
    "model_year": "2006",
    "image": 1,
    "state": "Virginia"
  },
  {
    "make": "Volvo",
    "model": "S60",
    "model_year": "2002",
    "image": 0,
    "state": "Kansas"
  },
  {
    "make": "Chevrolet",
    "model": "Lumina",
    "model_year": "1994",
    "image": 1,
    "state": "New York"
  },
  {
    "make": "Isuzu",
    "model": "Amigo",
    "model_year": "1998",
    "image": 0,
    "state": "South Dakota"
  },
  {
    "make": "Suzuki",
    "model": "XL-7",
    "model_year": "2002",
    "image": 0,
    "state": "Texas"
  },
  {
    "make": "Dodge",
    "model": "Charger",
    "model_year": "2007",
    "image": 0,
    "state": "Maryland"
  },
  {
    "make": "Plymouth",
    "model": "Colt",
    "model_year": "1992",
    "image": 0,
    "state": "North Dakota"
  },
  {
    "make": "GMC",
    "model": "Sonoma Crew Cab",
    "model_year": "2001",
    "image": 0,
    "state": "Alaska"
  },
  {
    "make": "Lincoln",
    "model": "MKX",
    "model_year": "2010",
    "image": 0,
    "state": "Minnesota"
  },
  {
    "make": "Rolls-Royce",
    "model": "Dawn",
    "model_year": "2016",
    "image": 1,
    "state": "Wisconsin"
  },
  {
    "make": "Land Rover",
    "model": "Discovery",
    "model_year": "1998",
    "image": 1,
    "state": "Michigan"
  },
  {
    "make": "Nissan",
    "model": "Altima",
    "model_year": "1993",
    "image": 1,
    "state": "Oklahoma"
  },
  {
    "make": "Ford",
    "model": "F150 Super Cab",
    "model_year": "2012",
    "image": 1,
    "state": "Iowa"
  },
  {
    "make": "BMW",
    "model": "7 Series",
    "model_year": "2011",
    "image": 0,
    "state": "California"
  },
  {
    "make": "Nissan",
    "model": "Pathfinder",
    "model_year": "2003",
    "image": 1,
    "state": "Iowa"
  },
  {
    "make": "Dodge",
    "model": "D350 Regular Cab",
    "model_year": "1993",
    "image": 0,
    "state": "West Virginia"
  },
  {
    "make": "Volkswagen",
    "model": "Jetta III",
    "model_year": "1994",
    "image": 1,
    "state": "Iowa"
  },
  {
    "make": "BMW",
    "model": "X5 M",
    "model_year": "2015",
    "image": 0,
    "state": "Pennsylvania"
  },
  {
    "make": "Ford",
    "model": "Transit Connect Passenger",
    "model_year": "2017",
    "image": 1,
    "state": "Mississippi"
  },
  {
    "make": "Chrysler",
    "model": "Crossfire",
    "model_year": "2008",
    "image": 0,
    "state": "Pennsylvania"
  },
  {
    "make": "BMW",
    "model": "2 Series",
    "model_year": "2019",
    "image": 0,
    "state": "Louisiana"
  },
  {
    "make": "Volkswagen",
    "model": "Golf",
    "model_year": "2019",
    "image": 1,
    "state": "North Dakota"
  }
]

export default mock;