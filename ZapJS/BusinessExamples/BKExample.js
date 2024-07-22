// ideally i would like to use a database like mySQL or smthn but for now i am testing with this

// example course section only
export let exampleCourseSections = [
    {
      courseSectionTitle: "Whoppers",
      courses: [
        {
          id: "King-Whopper",
          title: "King Whopper",
          imageUrl: "FoodImages/KingWhopper.jpeg",
          price: "$4.20",
        },
        {
          id: "Donut-Whopper",
          title: "Donut Whopper",
          imageUrl: "FoodImages/DonutWhopper.jpeg",
          price: "$6.69",
        },
        {
          id: "Cheese-Whopper",
          title: "Cheese Whopper",
          imageUrl: "FoodImages/CheeseWhopper.jpeg",
          price: "$3.69",
        },
      ],
    },
    {
      courseSectionTitle: "Sides",
      courses: [
        {
          id: "French-Fries",
          title: "French Fries",
          imageUrl: "FoodImages/FrenchFries.jpeg",
          price: "$3.69",
        },
        {
          id: "Onion-Rings",
          title: "Onion Rings",
          imageUrl: "FoodImages/OnionRings.jpeg",
          price: "$4.69",
        },
        {
          id: "Cheese-Sticks",
          title: "Cheese Sticks",
          imageUrl: "FoodImages/CheeseSticks.jpeg",
          price: "$5.69",
        },
      ],
    },
    {
      courseSectionTitle: "Drinks",
      courses: [
        {
          id: "7Up-Can",
          title: "7 Up 330ml",
          imageUrl: "FoodImages/7UpCan.jpeg",
          price: "$2.20",
        },
        {
          id: "Fanta-Can",
          title: "Fanta Can",
          imageUrl: "FoodImages/FantaCan.jpeg",
          price: "$2.69",
        },
        {
          id: "Blue-Spirit",
          title: "Blue Spirit",
          imageUrl: "FoodImages/BlueSpirit.jpeg",
          price: "$6.69",
        },
      ],
    },
  ];

// these are only examples of courses and will be removed for auto generation
export let courses = [
    "Whoppers",
    "Sides",
    "Drinks",
  ];