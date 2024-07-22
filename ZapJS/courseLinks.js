export const createCourseLinks = (courses) => {
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
    });
  };
  