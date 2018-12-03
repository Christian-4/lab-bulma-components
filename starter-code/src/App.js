import React from "react";
import Navbar from "./components/Navbar/Navbar.js";
import FormField from "./components/FormField/FormField.js";
import CoolButton from "./components/CoolButton/CoolButton.js";

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
                <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
                <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
                <CoolButton isSmall isSuccess>Button 2</CoolButton>
            </div>
        );
    }
}

export default App;