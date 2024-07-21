const createCourseLinks = (courses) => {
  // Get the course-list container
  const courseList = document.querySelector(".course-list");

  // Iterate through the courses array
  courses.forEach((course) => {
    // Create a new div element
    const courseDiv = document.createElement("div");
    // Set the class to 'course'
    courseDiv.classList.add("course");

    // Create a new a element
    const courseLink = document.createElement("a");
    // Set the href attribute
    courseLink.setAttribute("href", `#${course}`);
    // Set the text content
    courseLink.textContent = course;

    // Append the a element to the div element
    courseDiv.appendChild(courseLink);

    // Append the div element to the course-list container
    courseList.appendChild(courseDiv);

    console.log(courseDiv);
  });
};

const createCourseSection = (id, title, imageUrl, price) => {
  // Create the main container div
  const sectionDiv = document.createElement("div");
  sectionDiv.classList.add("course-section");
  sectionDiv.id = id;

  // Create the img element
  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = title;

  // Create the course-text div
  const courseTextDiv = document.createElement("div");
  courseTextDiv.classList.add("course-text");

  // Create the h5 element for the title
  const titleH5 = document.createElement("h5");
  titleH5.textContent = title;

  // Create the h4 element for the price
  const priceH4 = document.createElement("h4");
  priceH4.textContent = price;

  // Append the title and price to the course-text div
  courseTextDiv.appendChild(titleH5);
  courseTextDiv.appendChild(priceH4);

  // Append the img and course-text div to the main container div
  sectionDiv.appendChild(img);
  sectionDiv.appendChild(courseTextDiv);

  return sectionDiv;
};

const createCourseSectionScroller = (course) => {
  const courseTitle = course.courseSectionTitle;
  const courses = course.courses;

  // Get the course-sections-body container
  const courseSectionsBody = document.querySelector(".course-sections-body");

  // Create the main course-sections div
  const courseSectionsDiv = document.createElement("div");
  courseSectionsDiv.classList.add("course-sections");
  courseSectionsDiv.id = courseTitle;

  // Create the h4 element for the course title
  const courseTitleH4 = document.createElement("h4");
  courseTitleH4.classList.add("course-title");
  courseTitleH4.textContent = courseTitle;

  // Create the course-sections-scroller div
  const courseScrollerDiv = document.createElement("div");
  courseScrollerDiv.classList.add("course-sections-scroller");

  // Create multiple course sections
  courses.forEach((course) => {
    console.log(course);
    const section = createCourseSection(
      course.id,
      course.title,
      course.imageUrl,
      course.price
    );
    courseScrollerDiv.appendChild(section);
  });

  // Append the course title and scroller to the main course-sections div
  courseSectionsDiv.appendChild(courseTitleH4);
  courseSectionsDiv.appendChild(courseScrollerDiv);

  // Append the course-sections div to the course-sections-body container
  courseSectionsBody.appendChild(courseSectionsDiv);
};

// example course section only
let exampleCourseSections = [
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
        id: "French Fries",
        title: "7 Up 330ml",
        imageUrl: "FoodImages/FrenchFries.jpeg",
        price: "$3.69",
      },
      {
        id: "Fanta-Can",
        title: "Fanta Can",
        imageUrl: "FoodImages/OnionRings.jpeg",
        price: "$4.69",
      },
      {
        id: "Blue-Spirit",
        title: "Blue Spirit",
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

// Execute the function to create the course sections
exampleCourseSections.forEach(courseSectionExample => {
    createCourseSectionScroller(courseSectionExample);
});

// these are only examples of courses and will be removed for auto generation
let courses = [
  "Whoop Whoop",
  "Whoppers",
  "Meals",
  "Deals",
  "Sides",
  "Drinks",
  "Deserts",
];
createCourseLinks(courses);
