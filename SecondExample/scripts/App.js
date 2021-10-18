class RandomOmen extends React.Component {


    state = {
        omens: ["1", "2", "3"],
        omen: null,
        value: "",
    }

    handleShowOmen = () => {
        const index = Math.floor(Math.random() * this.state.omens.length);

        this.setState({
            omen: this.state.omens[index],
        })
    }

    handleInputChange = (e) => {
        this.setState({
            value: e.target.value,
        })
    }

    handleAddOmen = () => {
        if (this.state.value === "") return alert("Wpisz coś!");
        const omens = this.state.omens.concat(this.state.value)
        this.setState({
            omens,
            value: "",
        })
        alert(`Dodano nową wróżbę! Aktualne wróżby: ${omens}`);
    }

    render() {
        console.log(this.state.omen);
        return (
            <>
                <button onClick={this.handleShowOmen}>Pokaż losową wróżbę</button>
                <input type="text" value={this.state.value} onChange={this.handleInputChange}/>
                <button onClick={this.handleAddOmen}>Dodaj wróżbę</button>
                {this.state.omen ? <h1>{this.state.omen}</h1> : null}
            </>
        )
    }


}

ReactDOM.render(<RandomOmen/>, document.getElementById('root'));