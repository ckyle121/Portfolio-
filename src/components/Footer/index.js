import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import resume from '../../assets/resume/Caroline_Kyle_2022.pdf'

function Footer() {
    return(
    <footer>
        <div className="container d-flex justify-content-center">
            <a href="https://github.com/ckyle121">
                <GitHubIcon style={{ fill: 'white' }} fontSize="large" className="icon m-3" />
            </a>
            <a href="mailto:carolinekyle21@gmail.com">
                <EmailIcon style={{ fill: 'white' }} fontSize="large" className="icon m-3" />
            </a>
            <a href="https://www.linkedin.com/in/ckyle121/">
                <LinkedInIcon style={{ fill: 'white' }} fontSize="large" className="icon m-3" />
            </a>
            <a href="tel:901-326-2383">
                <PhoneEnabledIcon style={{ fill: 'white' }} fontSize="large" className="icon m-3" />
            </a>
            <a href={resume} target="_blank" rel="noopener noreferrer">
                <InsertDriveFileIcon style={{ fill: 'white' }} fontSize="large" className="icon m-3" />
            </a>      
        </div>
    </footer>
    );
}

export default Footer;