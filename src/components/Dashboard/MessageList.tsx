import React from "react";
import { Box, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import messageImg from "../../assets/MessageImg.png"
import { CustomBox } from "../MyCustom/CustomBox";

interface Message {
  serialNo?: string;
  senderName?: string;
  messageText?: string;
  icon?: string;
}

interface Message {}

export const MessageList: React.FC<Message> = ({
  senderName,
  messageText,
  serialNo,
  icon,
}) => {
  const messageData: Message[] = [
    {
   
      icon: messageImg,
      senderName: "Deepak Kumar",
      messageText: "Lorem Ipsum is simply dummy... ahgdasdsdh nsdha adhasndasdhadn asdahdabndajhdbamdah ajdasdaj dhas ",
    },
    {
     
      icon: messageImg,
      senderName: "Deepak Kumar",
      messageText: "Lorem Ipsum is simply dummy...",
    },
    {
     
      icon: messageImg,
      senderName: "Deepak Kumar",
      messageText: "Lorem Ipsum is simply dummy...",
    },
    {
      
      icon: messageImg,
      senderName: "Deepak Kumar",
      messageText: "Lorem Ipsum is simply dummy...",
    },
    {
        
        icon: messageImg,
        senderName: "Deepak Kumar",
        messageText: "Lorem Ipsum is simply dummy...",
      },
      {
        
        icon: messageImg,
        senderName: "Deepak Kumar",
        messageText: "Lorem Ipsum is simply dummy...",
      },
  ];

  return (
    <CustomBox style={{height: "100%"}}
    >
      <Box>
        <Typography
          sx={{
            justifyContent: "left",
            color: "#202020",
            fontWeight: "600",
            fontSize: { xs: "14px", md: "20px" },
          }}
        >
          Message
        </Typography>
        {messageData.length > 0 &&
          messageData.map((item, index) => {
            return (
              <Box key={index}>
                <Box sx={{ display: "flex", gap: "1px", marginTop: "10px" }} >
                  <ListItemAvatar>
                    <Avatar>
                      <img src={item.icon} alt=""></img>
                    </Avatar>
                  </ListItemAvatar>
                  <Box>
                    <Typography
                      sx={{
                        color: "#202020",
                        fontWeight: "500",
                        fontSize: "12px",
                      }}
                    >
                      {item.senderName}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#898989",
                        fontWeight: "400",
                        fontSize: "10px",
                      }}
                    >
                      {item.messageText}
                    </Typography>
                  </Box>
                </Box>
                <Divider />
              </Box>
            );
          })}
      </Box>
    </CustomBox>
  );
};
