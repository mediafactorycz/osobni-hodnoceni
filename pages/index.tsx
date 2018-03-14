import React, {Component} from 'react';
import axios from 'axios';
import css from '../styles/layout.scss';

interface Props {
    users: object[];
}

interface State {
    color: string;
    users: object[];
}

interface User {
    id: number;
    name: string;
}


class Index extends Component<Props, State>
{
    public static async getInitialProps()
    {
        const res = await axios.get('http://localhost:3000/api');

        return {users: res.data};
    }

    public state: State = {
        color: 'red',
        users: [],
    };

    constructor(props: any)
    {
        super(props);

        this.changeToBlue = this.changeToBlue.bind(this);
    }

    /*
    public componentDidMount()
    {
        this.setState({
            users: this.props.users,
        });
    }
    */

    public changeToBlue(): void
    {
        this.setState({
            color: 'blue',
        });
    }

    public render()
    {
        return <div>
            <h1 className={css[this.state.color]} onClick={this.changeToBlue}>Osobní hodnocení</h1>
            <p>toto je test</p>

            <h2>Users mock</h2>

            <ul>
                {this.props.users.map((user: User) => <li key={user.id}>{user.name}</li>)}
            </ul>

        </div>;
    }
}

export default Index;
