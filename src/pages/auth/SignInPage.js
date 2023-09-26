import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Typography,
  Alert,
} from "@mui/joy";
import { formLabelClasses } from "@mui/joy/FormLabel";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  useEnrolledCoursesQuery,
  useSigninMutation,
} from "../../redux/services/users/auth";
import { useDispatch } from "react-redux";
import {
  setCredentials,
  setEnrolledCourses,
} from "../../redux/slices/users/authSlice";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function SignInPage() {
  let navigateTo = useNavigate();

  const [signin, { isLoading, error }] = useSigninMutation();

  const dispatch = useDispatch();
  console.log(error);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum."),
    }),
    onSubmit: async (values) => {
      try {
        let data = await signin(values).unwrap();
        dispatch(setCredentials(data));
        let role = data.user.role;
        if (role === "student") navigateTo("/student", { replace: true });
        else if (role === "instructor")
          navigateTo("/instructor", { replace: true });
      } catch (error) {
        console.log(error);
      }
    },
  });
  let { user } = useAuth();
  if (user) {
    return <Navigate to={"/" + user.role} />;
  }
  return (
    <>
      <Box
        sx={(theme) => ({
          width:
            "clamp(100vw - var(--Cover-width), (var(--Collapsed-breakpoint) - 100vw) * 999, 100vw)",
          transition: "width var(--Transition-duration)",
          transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
          position: "relative",
          zIndex: 1,
          display: "flex",
          justifyContent: "flex-end",
          backdropFilter: "blur(4px)",
          backgroundColor: "rgba(255 255 255 / 0.6)",
          [theme.getColorSchemeSelector("dark")]: {
            backgroundColor: "rgba(19 19 24 / 0.4)",
          },
        })}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100dvh",
            width:
              "clamp(var(--Form-maxWidth), (var(--Collapsed-breakpoint) - 100vw) * 999, 100%)",
            maxWidth: "100%",
            px: 2,
          }}
        >
          <Box
            component="header"
            sx={{
              py: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              fontWeight="lg"
              startDecorator={
                <Box
                  component="span"
                  sx={{
                    width: 24,
                    height: 24,
                    background: (theme) =>
                      `linear-gradient(45deg, ${theme.vars.palette.primary.solidBg}, ${theme.vars.palette.primary.solidBg} 30%, ${theme.vars.palette.primary.softBg})`,
                    borderRadius: "50%",
                    boxShadow: (theme) => theme.shadow.md,
                    "--joy-shadowChannel": (theme) =>
                      theme.vars.palette.primary.mainChannel,
                  }}
                />
              }
            >
              Remotely
            </Typography>
          </Box>
          <Box
            component="main"
            sx={{
              my: "auto",
              py: 2,
              pb: 5,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              width: 400,
              maxWidth: "100%",
              mx: "auto",
              borderRadius: "sm",
              "& form": {
                display: "flex",
                flexDirection: "column",
                gap: 2,
              },
              [`& .${formLabelClasses.asterisk}`]: {
                visibility: "hidden",
              },
            }}
          >
            <div>
              <Typography component="h1" fontSize="xl2" fontWeight="lg">
                Sign in to your account
              </Typography>
              <Typography level="body-sm" sx={{ my: 1, mb: 3 }}>
                Welcome back
              </Typography>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <FormControl required>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  id="email"
                  {...formik.getFieldProps("email")}
                />
              </FormControl>
              {formik.touched.email && formik.errors.email ? (
                <Alert color="danger">{formik.errors.email}</Alert>
              ) : null}
              <FormControl required>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  id="password"
                  {...formik.getFieldProps("password")}
                />
              </FormControl>
              {formik.touched.password && formik.errors.password ? (
                <Alert color="danger">{formik.errors.password}</Alert>
              ) : null}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Link
                  style={{
                    font: "inherit",
                    textDecoration: "none",
                  }}
                  to={"/signup"}
                >
                  {"Don't"} have an account ?{" "}
                  <Button variant="plain"> Click here</Button>
                </Link>
              </Box>
              <Button loading={isLoading} type="submit" fullWidth>
                Sign in
              </Button>
              {error && (
                <Alert color="danger">
                  {error && error.data && error.data.message}
                </Alert>
              )}
            </form>
          </Box>
        </Box>
      </Box>
      <Box
        sx={(theme) => ({
          height: "100%",
          position: "fixed",
          right: 0,
          top: 0,
          bottom: 0,
          left: "clamp(0px, (100vw - var(--Collapsed-breakpoint)) * 999, 100vw - var(--Cover-width))",
          transition:
            "background-image var(--Transition-duration), left var(--Transition-duration) !important",
          transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
          backgroundColor: "background.level1",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage:
            "url(https://www.forbes.com/advisor/wp-content/uploads/2023/06/person-working-at-computer.jpeg.jpg)",
          [theme.getColorSchemeSelector("dark")]: {
            backgroundImage:
              "url(https://www.forbes.com/advisor/wp-content/uploads/2023/06/person-working-at-computer.jpeg.jpg)",
          },
        })}
      />
    </>
  );
}
