import React, { useEffect, useState } from 'react';



const MyComponent = props => {

    const [state, setState] = useState({
        lista: [
            'Cras justo odio',
            'Dapibus ac facilisis in',
            'Morbi leo risus',
            'Porta ac consectetur ac',
            'Vestibulum at eros'
        ],
        todos: [],
        posts: []
    })


    useEffect(() => {
        // Hooks para componentDidMount
        //getTodo("https://jsonplaceholder.typicode.com/todos")
        //getTodo2("https://jsonplaceholder.typicode.com/posts")
        getData();

    }, [])


    const getData = async () => {

        const responses = await Promise.all([
            fetch("https://jsonplaceholder.typicode.com/todos"),
            fetch("https://jsonplaceholder.typicode.com/posts")
        ]);

        const data = await Promise.all(
            responses.map(response => response.json())
        );

        const [dataTodos, dataPosts] = data;

        setState({
            ...state,
            todos: dataTodos,
            posts: dataPosts
        })

    }

    const getTodo = async url => {
        /* fetch(url)
            .then((response) => {
                console.log(response.status)
                return response.json()
            })
            .then((data) => {
                console.log(data);
                setState({
                    ...state,
                    todos: data
                })
            }) */

        const response = await fetch(url);
        const data = await response.json();
        setState({
            ...state,
            todos: data
        })

    }

    const getTodo2 = url => {
        fetch(url)
            .then((response) => {
                console.log(response.status)
                return response.json()
            })
            .then((data) => {
                console.log(data);
                setState({
                    ...state,
                    todos2: data
                })
            })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">

                    <ul className="list-group">

                        {
                            state.lista.map((item, i) => {
                                return (
                                    <li key={i} className="list-group-item">{item}</li>
                                )
                            })
                        }

                    </ul>

                    <button onClick={() => {
                        /* setState({
                            todos: []
                        }) */
                        getTodo("https://jsonplaceholder.typicode.com/todos")
                    }}>Click</button>
                </div>
            </div>
        </div>
    )
}

export default MyComponent;



/* class MyComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lista: [
                'Cras justo odio',
                'Dapibus ac facilisis in',
                'Morbi leo risus',
                'Porta ac consectetur ac',
                'Vestibulum at eros'
            ],
            todos: []
        }
    }

    componentDidMount(){
        console.log("Mounted Component...");
        this.setState({
            lista: this.state.lista.concat('Hola de nuevo')
        })
        this.getTodo("https://jsonplaceholder.typicode.com/todos");
    }

    getTodo = url => {
        fetch(url)
            .then((response) => {
                console.log(response.status)
                return response.json()
            })
            .then((data) => {
                console.log(data);
                this.setState({
                    todos: data
                })
            })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">

                        <ul className="list-group">

                            {
                                this.state.lista.map((item, i) => {
                                    return (
                                        <li key={i} className="list-group-item">{item}</li>
                                    )
                                })
                            }

                        </ul>

                        <button onClick={() => {
                            this.setState({
                                todos: []
                            })
                            //this.getTodo("https://jsonplaceholder.typicode.com/todos")
                        }}>Click</button>
                    </div>
                </div>
            </div>
        )
    }





}


export default MyComponent; */



















/* class Prueba extends React.Component {

    componentDidMount() {
        console.log("Componente Prueba Renderizado");
    }

    componentWillUnmount() {
        console.log("Componente Prueba Desrenderizado o Eliminado");
    }
    render(){
        return <h1>Componente Prueba</h1>
    }
}



class MyComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            active: true,
            name: ''
        }
    }


    componentWillMount() {
        console.log("Anted de Render");
    }

    componentDidMount() {
        console.log("Despues de Render");

        let name = prompt("Dame tu nombre");

        this.setState({
            name
        })
    }

    componentDidUpdate() {
        console.log("Componente Actualizado");
    }

    componentWillUnmount() {
        console.log("Componente Desrenderizado o Eliminado");
    }

    componentWillReceiveProps() {

    }

    render() {
        return (
            <>
                <h1>Componente de Clase</h1>
                {
                    this.state.active ?
                        <Prueba /> : "Inactivo"
                }
                <br />

                <button onClick={() => this.setState({
                    active: !this.state.active
                })}>
                    {
                        this.state.active ?
                            "Inactivar" : "Activar"
                    }

                </button>
            </>
        )
    }
}


export default MyComponent;



const App = props => {

    const [active, setActive] = useState(false);

    useEffect(() => {

        // componentDidMount

        return () => {
            // componentWillUnmount
        }
    }, [active])

    return (
        <h1>Componente App</h1>
    )
} */