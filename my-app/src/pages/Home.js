import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container/Container";
import Table from "../components/Table/Table";

class Home extends Component {
    state = {
        results: [],
        currentSort: "desc",
        error: ""
    };

    componentDidMount() {
        API.employeesSearch()
            .then(res => {
                this.setState({ results: res.data.results })
            })
            .catch(err => console.log(err));
    }

    sortByName = () => {
        const sortDesc = [].concat(this.state.results)
        .sort((a, b) => b.name.first > a.name.first ? 1 : -1);
        const sortAsc = [].concat(this.state.results)
        .sort((a, b) => a.name.first > b.name.first ? 1 : -1);
        
        switch (this.state.currentSort) {
            case "desc":
                this.setState({ results: sortAsc, currentSort: "asc" });
                break;
            case "asc":
                this.setState({ results: sortDesc, currentSort: "desc" });
                break;
        }
    }

    render() {
        return (
            <Container>
                <Table 
                results={this.state.results}
                sortByName={this.sortByName}
                >
                </Table>
            </Container >
        )
    }

}

export default Home;