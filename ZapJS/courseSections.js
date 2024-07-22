import { addDisplayOnClick } from "./PopupDisplay.js";

const createCourseSection = (course) => {
  const { id, title, imageUrl, price } = course;
  
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

  // Add click event listener to sectionDiv
  addDisplayOnClick(sectionDiv, course);

  return sectionDiv;
};

export const createCourseSectionScroller = (course) => {
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
    const section = createCourseSection(course);
    courseScrollerDiv.appendChild(section);
  });

  // Append the course title and scroller to the main course-sections div
  courseSectionsDiv.appendChild(courseTitleH4);
  courseSectionsDiv.appendChild(courseScrollerDiv);

  // Append the course-sections div to the course-sections-body container
  courseSectionsBody.appendChild(courseSectionsDiv);
};
