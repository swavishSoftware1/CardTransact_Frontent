import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Header } from "../../components/Dashboard/Header";
import { CustomBox } from "../../components/MyCustom/CustomBox";
import { CommonHeader } from "../../components/CommonHeader";
import { Colors } from "../../utils/Colors";
import BasicSelect from "../../components/BasicSelect";
import CustomFileInput from "../../components/CustomFileInput";
import { LoadButton } from "../../components/LoadButton";
import CustomButton from "../../components/CustomButton";
import CurrencyPoundIcon from "@mui/icons-material/CurrencyPound";
import { Grid } from "@mui/material";
// import { makeStyles } from "@mui/styles";
import { Preview } from "../../components/Commission/Preview";
import { useNavigate } from "react-router-dom";



 const AddCommissionStructure = () => {
  const navigate = useNavigate();
  const [selectedAquire, setSelectedAquire] = useState("");
  const [selectedTier, setSelectedTier] = useState("");
  const [openPreview, setOpenPreview] = useState(false);

  const handleOpenPreview = () => {
    setOpenPreview(true);
  };

  const handlePreviewClose = () => {
    setOpenPreview(false);
  };

  const handleChange = (event: any) => {
    setSelectedAquire(event.target.value);
  };
  const handleChangeTire = (event: any) => {
    setSelectedTier(event.target.value);
  };

  const handleConfirm = () => {
    navigate("/commission/addCommissionStructure/viewCommission");
  };

  const aquirer = [
    { value: "aquirer", label: "aquirer" },
    { value: "aquirer1", label: "aquirer1" },
    { value: "aquirer2", label: "aquirer2" },
  ];

  const tier = [
    { value: "tier1", label: "tier" },
    { value: "tier2", label: "tier2" },
    { value: "tier3", label: "tier3" },
  ];
  return (
    <Box sx={{ marginTop: "2rem", width: "100%" }}>
      <Header />
      <CustomBox>
        <CommonHeader header="Add Commission Structure" />
        <CustomBox
          style={{
            border: `1px solid ${Colors.LinkColor}`,
            marginTop: "2rem",
          }}
        >
          <Grid container rowSpacing={4} columnSpacing={2}>
            <Grid item xs={12} md={5}>
              <BasicSelect
                label="Select Aquirer"
                sx={{
                  border: "1px solid #898989",
                  height: "2rem",
                  padding: 2,
                  width: "100%",
                }}
                placeholder="Select Aquirer"
                name={"selectedValue"}
                value={selectedAquire}
                handleChange={handleChange}
                size="small"
                items={aquirer}
              />
            </Grid>
            <Grid item xs={12} md={5}>
              <BasicSelect
                label="Select Tier"
                sx={{
                  border: "1px solid #898989",
                  height: "2rem",
                  padding: 2,
                  width: "100%",
                }}
                placeholder="Select Aquirer"
                name={"selectedValue"}
                value={selectedTier}
                handleChange={handleChangeTire}
                size="small"
                items={tier}
              />
            </Grid>
            <Grid item xs={12} md={7}>
              <CustomFileInput
                label="Upload File"
                labelStyle={{ marginTop: "1.2rem" }}
                style={{}}
              />
            </Grid>
          </Grid>
        </CustomBox>
        {!openPreview && (
          <Box sx={{ marginTop: "2rem", display: "flex", gap: 2 }}>
            <LoadButton style={{ width: "20%" }}>Add</LoadButton>
            <CustomButton
              label="Preview"
              onClick={handleOpenPreview}
              style={{
                width: "20%",
                height: "2.4rem",
                fontSize: "15px",
                fontWeight: "700",
                border: "0.94px solid rgba(224, 224, 224, 1)",
                color: "rgba(224, 224, 224, 1)",
              }}
            />
          </Box>
        )}
        {openPreview && (
          <CustomBox
            style={{
              border: `1px solid ${Colors.LinkColor}`,
              marginTop: "2rem",
            }}
          >
            <Typography
              sx={{
                color: "rgba(32, 32, 32, 1)",
                fontSize: "1.2rem",
                fontWeight: "600",
              }}
            >
              Preview
            </Typography>
            <Preview />
            {/* <Preview />
            <Preview /> */}
            <Box sx={{ display: "flex", gap: 1, marginTop: "1.5rem" }}>
              <CustomButton
                label="Cancel"
                onClick={handlePreviewClose}
                hoverColor={Colors.deletebtnColor}
                style={{
                  width: "20%",
                  height: "2.3rem",
                  fontSize: "15px",
                  boxShadow: "5.625px 7.5px 9.375px 0px rgba(0, 0, 0, 0.24)",
                  backgroundColor: Colors.deletebtnColor,
                  color: "#ffffff",
                }}
              />
              <CustomButton
                label="Confirm"
                onClick={handleConfirm}
                hoverColor={Colors.successColor}
                style={{
                  width: "20%",
                  height: "2.3rem",
                  fontSize: "15px",
                  boxShadow: "5.625px 7.5px 9.375px 0px rgba(0, 0, 0, 0.24)",
                  backgroundColor: Colors.successColor,
                  color: "#ffffff",
                }}
              />
            </Box>
          </CustomBox>
        )}
      </CustomBox>
    </Box>
  );
};

export default AddCommissionStructure;
