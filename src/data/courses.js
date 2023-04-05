import { imgData } from "./imgData";
import { lessonsData } from "./lessons";
import { createUser } from "./users";

export const courses = [
  createCourse(
    1,
    "Introduction to Web Development",
    "/imgs/courses/course1.png",
    70
  ),
  createCourse(
    2,
    "Introduction to Data Structure and Alorithms",
    "/imgs/courses/course3.jpg",
    0
  ),
  createCourse(
    3,
    "Introduction to Data Science",
    "/imgs/courses/course2.png",
    70
  ),
  createCourse(
    4,
    "Introduction to Data Analysis",
    "/imgs/courses/course4.webp",
    70
  ),
];

function createCourse(id, title, imgUrl, price) {
  return {
    id,
    title,
    img: imgUrl,
    coverImg: imgUrl,
    price,
    tag: ["computer science", "software engineering", "algorithms"],
    category: "Technology",
    ratings: [],
    modules: [
      {
        id: 1,
        no: 1,
        title: "The Browser",
        description:
          "In the internet browser is the only thing that we used frequenty. To access internet we need to use browser. So we cover's everything about browser.",
        lessons: lessonsData,
      },
      {
        id: 2,
        no: 2,
        title: "The Javascript Fundementals",
        description:
          "Javascript is the language of the browser. It allows us to make interactive in the web.",
        lessons: lessonsData,
      },
      {
        id: 3,
        no: 3,
        title: "The Functional Javascript",
        description:
          "Men that is working is the only thing that we used frequenty. To access internet we need to use browser. So we cover's everything about browser.",
        lessons: lessonsData,
      },
      {
        id: 4,
        no: 4,
        title: "Object Oriented Javascript",
        description:
          "Object orietend javascript is everywhere. To access internet we need to use browser. So we cover's everything about browser.",
        lessons: lessonsData,
      },
      {
        id: 5,
        no: 5,
        title: "Aynchonus Javascript",
        description:
          "Javascript is a single threaded language but allows us to do multiple things at teh same time. To access internet we need to use browser. So we cover's everything about browser.",
        lessons: lessonsData,
      },
      {
        id: 6,
        no: 6,
        title: "The HTTP",
        description:
          "Http is the only thing that we used frequenty. To access internet we need to use browser. So we cover's everything about browser.",
        lessons: lessonsData,
      },
      {
        id: 7,
        no: 7,
        title: "The Node.js",
        description:
          "Nodejs is everything in peoples eyes. To access internet we need to use browser. So we cover's everything about browser.",
        lessons: lessonsData,
      },
    ],
    description: `
    <h2>About this course</h2>
<p>
This course is designed to provide a comprehensive introduction to the field of digital marketing. Students will learn the basic concepts and principles of digital marketing and how to create and implement effective digital marketing strategies. The course will cover a range of topics, including social media marketing, search engine optimization, email marketing, content marketing, and mobile marketing.</p>
<h2>Course Format</h2>
<p>
The course will be delivered online through a combination of pre-recorded video lectures, readings, and interactive assignments. Students will be able to access the course material at their own pace and will be required to complete quizzes and assignments to demonstrate their understanding of the concepts taught in each module. There will also be opportunities for students to engage in discussion forums and receive feedback from instructors.
</p>
<h2>What you will learn ?</h2>
<ul>
  <li>The basic of Internet</li>
  <li>Html</li>
  <li>Css3</li>
  <li>Javascript</li>
  <li>Node.js</li>
  <li>Document Object Model</li>
  <li>Canvas</li>
  <li>Responsive Web Design and many more</li>
</ul>
<p>
  <br>
</p>
<h2>Requirements</h2>
<ul>
  <li>
      Basic knowledge about computer</li>
  <li>
      A Laptop and that's it.</li>
</ul>`,
    shortDescription:
      "This course will teach you fundemental of the all parts in the respected field",
    syllabus: `<p>
<strong style="font-size: large;">You don't need to study hard here</strong>
</p>

</p>



</p>`,
    authors: [
      createUser(
        Date.now() + Math.random() * 1000 + id,
        "Jon",
        "Doe",
        "jondeo@gmail.com",
        "teacher"
      ),
    ],
    students: [
      createUser(
        Date.now() + Math.random() * 1000 + id,
        "Mang",
        "Yu",
        "mangyu@gmail.com",
        "student"
      ),
    ],
    createdAt: Date.now(),
  };
}
