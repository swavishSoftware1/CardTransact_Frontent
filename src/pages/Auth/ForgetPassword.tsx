import React, { useState } from "react";
import { Box,Typography } from "@mui/material";
import { LoadButton } from "../../components/LoadButton";
import { useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import CustomText from "../../components/CustomText";
import CustomTextInput from "../../components/CustomInput";
import Divider from "@mui/material/Divider";
import AuthCustomBox from "../../components/AuthCustomBox";
import { Formik } from "formik";
import { forgetSchema } from "../../utils/Validation";

 const ForgetPassword = () => {
  const [otp, setOtp] = useState();
  const [email, setEmail] = useState("");
  const [emailValidated, setEmailValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
  });

  
  const redirectLogin = () => {
    navigate("/auth/login");
  };

  const handleOtpChange = (otpValue: any) => {
    setOtp(otpValue); 
  };


  const handleEmailValidation = () => {
    setEmailValidated(true);
  };

  const handleVerify = ()=>{
    navigate("/resetPassword");
  }

 
console.log('hi')

  return (
    <>
      <AuthCustomBox header="Forgot Password">
        <Box
          sx={{ padding: "0px 20px", marginTop: "2rem", textAlign: "center" }}
        >
          {emailValidated && (
            <Typography
              sx={{ color: "#000000", fontSize: "20px", fontWeight: "600" }}
            >
              OTP
            </Typography>
          )}
          <Typography
            sx={{
              color: "#000000",
              fontSize: "0.9rem",
              fontWeight: "500",
            }}
          >
            Kindly Enter your Registered Email Address To recieve An OTP For
            Varification
          </Typography>
        </Box>
        <Box sx={{ marginTop: "1.5rem" }}>
          {!emailValidated && (
            <Formik
              initialValues={values}
             validationSchema={forgetSchema}
              onSubmit={handleEmailValidation}
            >
              {({ values, errors, handleSubmit, handleChange }) => (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CustomTextInput
                    label={"Register Email Address"}
                    placeholder="Enter Your Email Address"
                    name="email"
                    value={values.email}
                    error={errors.email}
                    onChange={handleChange}
                  />
                  <LoadButton
                    type="submit"
                    loading={loading}
                    variant="contained"
                    style={{
                      width: "100%",
                      marginTop: 5,
                      textTransform: "none",
                    }}
                  >
                    Submit
                  </LoadButton>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",

                      marginTop: "1rem",
                    }}
                  >
                    <CustomText
                      text="Return To Login"
                      onClick={redirectLogin}
                      style={{
                        color: "#589E58",
                        width: "30%",
                        cursor: "pointer",
                        fontSize: "12px",
                      }}
                    />
                    <Divider
                      sx={{ width: "30%", border: "0.1px solid #589E58" }}
                    />
                  </Box>
                </form>
              )}
            </Formik>
          )}

          {emailValidated && (
           
              <form>
                <OtpInput
                  containerStyle={{
                    display: "flex",
                    gap: 10,
                    justifyContent: "center",
                    marginTop: 6,
                  }}
                  inputStyle={{
                    width: "30px",
                    height: "30px",
                    fontSize: "15px",
                    border: "0.9px solid #DCDCDC",
                    borderRadius: "7.5px",
                  }}
                  value={otp}
                  onChange={handleOtpChange}
                  numInputs={6}
                  renderInput={(props) => <input {...props} />}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "5px",
                  }}
                >
                  <CustomText
                    text="Resend"
                    style={{
                      color: "#589E58",
                      fontWeight: "500",
                      fontSize: "0.7rem",
                      marginTop: "0.5rem",
                    }}
                  ></CustomText>
                  <CustomText
                    text="in 00:45"
                    style={{
                      color: "#000000",
                      fontWeight: "500",
                      fontSize: "0.7rem",
                      marginTop: "0.5rem",
                    }}
                  ></CustomText>
                </Box>
                <LoadButton
                  //type="submit"
                  onClick={handleVerify}
                  loading={loading}
                  variant="contained"
                  style={{
                    width: "100%",
                    marginTop: 5,
                    textTransform: "none",
                  }}
                >
                  Verify
                </LoadButton>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",

                    marginTop: "1rem",
                  }}
                >
                  <CustomText
                    text="Return To Login"
                    onClick={redirectLogin}
                    style={{
                      color: "#589E58",
                      width: "30%",
                      cursor: "pointer",
                      fontSize: "12px",
                    }}
                  />
                  <Divider
                    sx={{ width: "30%", border: "0.1px solid #589E58" }}
                  />
                </Box>
              </form>
          )}
        </Box>
      </AuthCustomBox>
    </>
  );
};
export default ForgetPassword;
