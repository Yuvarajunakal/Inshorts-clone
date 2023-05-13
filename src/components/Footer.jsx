import React from "react";
import "./footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LinkIcon from "@mui/icons-material/Link";

export default function Footer() {
  return (
    <div className="footer">
      <span>This is Inshorts Clone Created By-Yuvaraj unakal</span>
      <hr />
      <div className="iconContainer">
        <InstagramIcon />
        <LinkedInIcon />
        <LinkIcon />
      </div>
    </div>
  );
}
