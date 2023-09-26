import { Route, Routes } from "react-router-dom";
import SignInPage from "./pages/auth/SignInPage";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/auth/SignUpPage";
import ProfilePage from "./pages/user/ProfilePage";
import { PrivateOutlet } from "./utils/auth/PrivateOutlet";
import { StudentOutlet } from "./utils/auth/StudentOutlet";
import StudentDashboardPage from "./pages/student/StudentDashBoardPage";
import { InstructorOutlet } from "./utils/auth/IntructorOutlet";
import InstructorDashBoardPage from "./pages/instructor/InstructorDashBoardPage";
import NotFoundPage from "./pages/error/NotFoundPage";
import AddCoursePage from "./pages/instructor/AddCoursePage";
import Header from "./components/layout/Header";
import InstructorCoursePage from "./pages/instructor/InstructorCoursePage";

import IAssignments from "./components/instructor/IAssignments";
import IQuizzes from "./components/instructor/IQuizzes";
import ICourseUsers from "./components/instructor/ICourseUsers";
import ICourseDetails from "./components/instructor/ICourseDetails";
import ICourseDashboard from "./components/instructor/ICourseDashboard";
import InstructorCourseModules from "./components/instructor/modules/InstructorCourseModules";
import InstructorCourseModule from "./components/instructor/modules/InstructorCourseModule";
import IAssignmentUserTabs from "./components/instructor/IAssignmentUserTabs";
import CoursesPage from "./pages/courses/CoursesPage";
import StudnetCourseDashboard from "./pages/student/StudentCourseDashboard";
import StudentModuleExplorerPage from "./pages/student/StudentModuleExplorerPage";
import SingleCoursePage from "./pages/courses/SingleCoursePage";
import NewEnrolledPage from "./pages/newEnrolledPage";
import Footer from "./components/layout/Footer";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="courses" element={<CoursesPage />} />
          <Route path="courses/:id" element={<SingleCoursePage />} />
          <Route path="profile" element={<PrivateOutlet />}>
            <Route index element={<ProfilePage />} />
          </Route>
          {/* <Route path="student" element={<StudentOutlet />}> */}
          <Route path="student" element={<StudentOutlet />}>
            <Route index element={<StudentDashboardPage />} />
            <Route
              path="enrolled/:id"
              element={<StudnetCourseDashboard />}
            ></Route>
          </Route>
          <Route path="enrolled/:id" element={<NewEnrolledPage />} />

          <Route
            path="student/enrolled/:id/module/:moduleId"
            element={<StudentModuleExplorerPage />}
          />
          {/* </Route> */}
          <Route path="instructor" element={<InstructorOutlet />}>
            <Route index element={<InstructorDashBoardPage />} />
            <Route path="addCourse" element={<AddCoursePage />} />
            <Route path="course/:id" element={<InstructorCoursePage />}>
              <Route path="dashboard" element={<ICourseDashboard />}></Route>
              <Route path="modules" element={<InstructorCourseModules />}>
                <Route
                  path=":moduleId"
                  element={<InstructorCourseModule />}
                ></Route>
              </Route>
              <Route path="assignments" element={<IAssignments />}>
                <Route
                  path=":assignmentId"
                  element={<IAssignmentUserTabs />}
                ></Route>
              </Route>
              <Route path="quizzes" element={<IQuizzes />}>
                {/* <Route
                  path=":moduleId"
                  element={<InstructorCourseModule />}
                ></Route> */}
              </Route>
              <Route path="users" element={<ICourseUsers />}>
                {/* <Route
                  path=":moduleId"
                  element={<InstructorCourseModule />}
                ></Route> */}
              </Route>
              <Route path="details" element={<ICourseDetails />}>
                {/* <Route
                  path=":moduleId"
                  element={<InstructorCourseModule />}
                ></Route> */}
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
