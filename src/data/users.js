export function createUser(id, firstname, lastname, email, role) {
  return {
    id,
    firstname,
    lastname,
    username: firstname + lastname,
    email,
    password: "jamatul542",
    role,
    avatar: "/imgs/avatar.webp",
    enrolledCourses: [],
    completedCourses: [],
    currentCourses: [],
    ownCourses: [],
    students: [],
    country: "Bangladesh",
    mobileNo: 57457473,
    currentJob: [
      {
        jobTitle: role,
        jobField: "computer science",
        jobOrganization: "Patuakhali Science and Technology University",
      },
    ],
    validated: false,
    studied: "computer science and technologies",
    progress: [],
  };
}
