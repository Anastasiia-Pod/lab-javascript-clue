// ITERATION 1

// Suspects Array

const suspectsArray = [
    {
        firstName: "Anna",
        lastName: "Smith",
        occupation: "Human Resources Director",
        age: 42,
        description: "Adopted daughter of Mr. Jones", 
        image: "https://unsplash.com/photos/mQtcrK22CN8",
        color: "white"
    },
    {
        firstName: "Max",
        lastName: "Jones",
        occupation: "Dentist",
        age: 31,
        description: "He has a lot of connections",
        image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
        color: "blue"
    },
    {
        firstName: "Bob",
        lastName: "Taylor",
        occupation: "University Professor",
        age: 78,
        description: "He is a very noisy", 
        image: "https://www.istockphoto.com/de/foto/old-lehrer-lecturing-gm156306592-20009180?phrase=old+man+beard+professor&searchscope=image%2Cfilm",
        color: "green"
    },
    {
        firstName: "Susan",
        lastName: "	Brown",
        occupation: "Teacher",
        age: 26,
        description: "She is teacher with a dark past",
        image: "https://unsplash.com/photos/FcLyt7lW5wg",
        color: "brown"
    },
    {
        firstName: "Tom",
        lastName: "Williams",
        occupation: "Homeless",
        age: 57,
        description: "He has an awful scar on his left arm",
        image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
        color: "black"
    },
    {
        firstName: "Alice",
        lastName: "Davies",
        occupation: "Psychiatrist",
        age: 39,
        description: "She is from a wealthy family and uses her status and money to earn popularity",
        image: "https://www.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1625209.htm#query=female%20doctor&position=2&from_view=keyword&track=ais",
        color: "gold"
    }

];

// Rooms Array

const roomsArray = [
    {
        name: "Dining Room"
    },
    {
        name: "Conservatory"
    },
    {
        name: "Kitchen"
    },
    {
        name: "Study"
    },
    {
        name: "Library"
    },
    {
        name: "Billiard Room"
    },
    {
        name: "Lounge"
    },
    {
        name: "Ballroom"
    },
    {
        name: "Hall"
    },
    {
        name: "Spa"
    },
    {
        name: "Living Room"
    },
    {
        name: "Observatory"
    },
    {
        name: "Theater"
    },
    {
        name: "Guest House"
    },
    {
        name: "Patio"
    }
];

// Weapons Array

const weaponsArray = [
    {
        name: "rope",
        weight: 10  
    },
    {
        name: "knife",
        weight: 8
    },
    {
        name: "candlestick",
        weight: 2
    },
    {
        name: "dumbbell",
        weight: 30
    },
    {
        name: "poison",
        weight: 2
    },
    {
        name: "axe",
        weight: 15
    },
    {
        name: "bat",
        weight: 13
    },
    {
        name: "trophy",
        weight: 25
    },
    {
        name: "pistol",
        weight: 20
    }
];


// ITERATION 2

function selectRandom(array) {
    const random= Math.floor(Math.random() * array.length);    
    return array[random]; 
}

function pickMystery() {
    return {
    suspect: function() {
            const suspect = Math.floor(Math.random() * suspectsArray.length);
            return suspectsArray[suspect];
        },
    weapon: function () {
    const weapon = Math.floor(Math.random() * weaponsArray.length);    
    return weaponsArray[weapon]; 
    },
    room: function () {
    const room = Math.floor(Math.random() * roomsArray.length);    
    return roomsArray[room]; 
    }
    };
}

// ITERATION 3

function revealMystery() {
    const mystery = pickMystery();
    const { firstName, lastName } = mystery.suspect();
    const weapon = mystery.weapon().name;
    const room = mystery.room().name;
    const upperCaseFirstName = firstName.toUpperCase();
    const upperCaseLastName = lastName.toUpperCase();
    const upperCaseWeapon = weapon.toUpperCase();
    const upperCaseRoom = room.toUpperCase();
    return `${upperCaseFirstName} ${upperCaseLastName} killed Mr. Boddy using the ${upperCaseWeapon} in the ${upperCaseRoom}!`
}
console.log(revealMystery());
