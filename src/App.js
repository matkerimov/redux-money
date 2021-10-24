import React from 'react';
import Header from "./components/Header";
import BalanceCards from "./components/BalanceCards";
import ExpensesForm from "./components/ExpensesForm";
import ExpensesTable from "./components/ExpensesTable";
import {Container} from "@mui/material";


const App = () => {
    return (
        <div>
            <Header/>
            <Container maxWidth="xl">
                <h1>Ваш лист расходов</h1>
                <BalanceCards/>
                <ExpensesForm/>
                <ExpensesTable/>
            </Container>

        </div>
    );
};

export default App;