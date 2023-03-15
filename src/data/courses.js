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
          "In the internet browser is the only thing that we used frequenty. To access internet we need to use browser. So we cover's everything about browser.",
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
        title: "The Browser",
        description:
          "In the internet browser is the only thing that we used frequenty. To access internet we need to use browser. So we cover's everything about browser.",
        lessons: lessonsData,
      },
      {
        id: 5,
        no: 5,
        title: "The Browser",
        description:
          "In the internet browser is the only thing that we used frequenty. To access internet we need to use browser. So we cover's everything about browser.",
        lessons: lessonsData,
      },
      {
        id: 6,
        no: 6,
        title: "The Browser",
        description:
          "In the internet browser is the only thing that we used frequenty. To access internet we need to use browser. So we cover's everything about browser.",
        lessons: lessonsData,
      },
      {
        id: 7,
        no: 7,
        title: "The Browser",
        description:
          "In the internet browser is the only thing that we used frequenty. To access internet we need to use browser. So we cover's everything about browser.",
        lessons: lessonsData,
      },
    ],
    description: `
<p>
  <strong style="font-size: large;">Features</strong>
</p>
<ul>
  <li>Fast and lightweight</li>
  <li>Semantic markup</li>
  <li>Standardized HTML between browsers</li>
  <li>Cross browser support including Chrome, Firefox, Safari, and IE 9+</li>
</ul>
<p>
  <br>
</p>
<p>
  <strong style="font-size: large;">Audience</strong>
</p>
<ul>
  <li>
      <a href="https://quilljs.com" target="_blank">Quill.js</a>, the free, open source WYSIWYG editor</li>
  <li>
      <a href="https://zenoamaro.github.io/react-quill" target="_blank">React-quill</a>, a React component that wraps Quill.js</li>
</ul>`,
    shortDescription:
      "This course will teach you fundemental of the all parts in the respected field",
    syllabus: `<p>
<strong style="font-size: large;">You don't need to study hard here</strong>
</p>

<ul>
<li>Javascript</li>
<li>CSs</li>
<li>Standardized HTML between browsers</li>
<li>Cross browser support including Chrome, Firefox, Safari, and IE 9+</li>
</ul>
<p>
<strong style="font-size: large;">Audience</strong>
</p>
<ul>
<li>
    <a href="https://quilljs.com" target="_blank">Quill.js</a>, the free, open source WYSIWYG editor</li>
<li>
    <a href="https://zenoamaro.github.io/react-quill" target="_blank">React-quill</a>, a React component that wraps Quill.js</li>
</ul></p>
<p>
<strong style="font-size: large;">You don't need to study hard here</strong>
</p>

<ul>
<li>Javascript</li>
<li>CSs</li>
<li>Standardized HTML between browsers</li>
<li>Cross browser support including Chrome, Firefox, Safari, and IE 9+</li>
</ul>
<p>
<strong style="font-size: large;">Audience</strong>
</p>
<ul>
<li>
    <a href="https://quilljs.com" target="_blank">Quill.js</a>, the free, open source WYSIWYG editor</li>
<li>
    <a href="https://zenoamaro.github.io/react-quill" target="_blank">React-quill</a>, a React component that wraps Quill.js</li>
</ul></p>
<p>
<strong style="font-size: large;">You don't need to study hard here</strong>
</p>

<ul>
<li>Javascript</li>
<li>CSs</li>
<li>Standardized HTML between browsers</li>
<li>Cross browser support including Chrome, Firefox, Safari, and IE 9+</li>
</ul>
<p>
<strong style="font-size: large;">Audience</strong>
</p>
<ul>
<li>
    <a href="https://quilljs.com" target="_blank">Quill.js</a>, the free, open source WYSIWYG editor</li>
<li>
    <a href="https://zenoamaro.github.io/react-quill" target="_blank">React-quill</a>, a React component that wraps Quill.js</li>
</ul></p>`,
    authors: [
      createUser(
        Date.now() + Math.random() * 1000 + id,
        "Jon",
        "Doe",
        "jondeo@gmail.com",
        "teacher"
      ),
      createUser(
        Date.now() + Math.random() * 1000 + id,
        "Duke",
        "Me",
        "dukeme@gmail.com",
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
