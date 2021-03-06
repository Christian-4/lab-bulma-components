import React from "react";
import Navbar from "..//Navbar/Navbar.js";
import FormField from "../FormField/FormField.js";
import CoolButton from "../CoolButton/CoolButton.js";

class Signup extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <FormField label="Password" type="password" placeholder="e.g. passwordsupersecure" />
                <CoolButton isSmall isSuccess>Sumbit</CoolButton>
            </div>
        );
    }
}

export default Signup;