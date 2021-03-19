import React from "react";
import {render} from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from 'styled-components'
import theme from './theme'
// this gets injected to html to the id of root
render(
<ThemeProvider theme={theme}>
    <App />
</ThemeProvider>,
document.getElementById("root")
);