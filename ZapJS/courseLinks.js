export const createCourseLinks = (courses) => {
  // Get the course-list container
  const courseList = document.querySelector(".course-list");
  const coursesDisplayed = [];

  // Iterate through the courses array
  courses.forEach((course) => {
    // Check if the course is already displayed
    if (!coursesDisplayed.includes(course)) {
      const courseDiv = createCourseLink(course);
      courseList.appendChild(courseDiv);
      coursesDisplayed.push(course); // Add the course to the displayed list
    }
  });
};

const createCourseLink = (course) => {
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

  // Return the div element
  return courseDiv;
};
