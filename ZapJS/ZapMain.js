// main.js
import { createCourseLinks } from './courseLinks.js';
import { createCourseSectionScroller } from './courseSections.js';
import { exitPopupButton } from './PopupDisplay.js';

// example business template in place
import { exampleCourseSections, courses } from './BusinessExamples/BKExample.js'

// Execute the function to create the course sections
exampleCourseSections.forEach(courseSectionExample => {
    createCourseSectionScroller(courseSectionExample);
});

createCourseLinks(courses);
exitPopupButton();
