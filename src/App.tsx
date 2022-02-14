import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";

import { GlobalStyle } from "./common/styles/GlobalStyle";

export const App = () => {
    return (
        <>
            <Header />
            <Dashboard />

            <GlobalStyle />
        </>
    );
};
