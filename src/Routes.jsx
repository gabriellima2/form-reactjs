import {
    BrowserRouter as Router,
    Routes,
    Route
}
from "react-router-dom";

import Home from "./pages/Home";
import CreateAccount from "./pages/CreateAccount";

import FormContextProvider from "./FormContext/Provider";

export default function AppRoutes() {
    return (
        <FormContextProvider>
            <Router>
                <Routes>
                    <Route path="/" exact element={<Home />}/>
                    <Route path="/createaccount" element={<CreateAccount />}/>
                </Routes>
            </Router>
        </FormContextProvider>
    );
}
