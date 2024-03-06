import React, { useState } from "react";
import { Box } from "@mui/material";
import { LoadButton } from "../../components/LoadButton";
import { useNavigate } from "react-router-dom";
import CustomText from "../../components/CustomText";
import CustomTextInput from "../../components/CustomInput";
import AuthCustomBox from "../../components/AuthCustomBox";
import { loginSchema } from "../../utils/Validation";
import { Formik } from "formik";
import { Link } from "react-router-dom";


export const Login = () => {
  //const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  // const pageRedirect = () => {
  //   navigate("/auth/ForgetPassword");
  // };

  const handleLogin = () => {
    navigate("/auth/googleAuthentication");
  };

  return (
    <AuthCustomBox header="Login">
      <Box sx={{marginTop: "2rem"}}>
        <Formik
          initialValues={values}
          validationSchema={loginSchema}
          onSubmit={handleLogin}
        >
          {({ 
            values, errors, handleSubmit, handleChange
           }) => (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap:10
               
              }}
            >
              <CustomTextInput
                label="User Name"
                name="email"
                placeholder="Enter Your Email Address"
                value={values.email}
                onChange={handleChange}
                error={errors.email}
              />

              <CustomTextInput
                label="Password"
                name="password"
                placeholder="Enter your Password"
                value={values.password}
                error={errors.password}
                onChange={handleChange}
              />

              <Link
                to="/auth/ForgetPassword"
                style={{
                  color: "#589E58",
                  textDecoration: "none",
                  fontSize: "13px",
                  fontWeight: "600",
                  cursor: "pointer",
                  textAlign: "left",
                  display: "inline",
                  width: "30%"
                  
                }}
              >
                Forgot Password?
              </Link>

              <LoadButton
                type="submit"
                //loading={loading}
                variant="contained"
                style={{
                  width: "100%",
                  marginTop: 3,
                  textTransform: "none",
                }}
              >
                Login
              </LoadButton>
            </form>
          )}
        </Formik>
      </Box>
    </AuthCustomBox>
  );
};
