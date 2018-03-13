import React, {Component} from 'react';
import css from '../styles/layout.scss';

interface State {
    color: string;
}

class Index extends Component<{}, State>
{
    public state: State = {
        color: 'red',
    };

    constructor(props: any)
    {
        super(props);

        this.changeToBlue = this.changeToBlue.bind(this);
    }    

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
        </div>;
    }
}

export default Index;
