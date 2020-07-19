import React, {Component} from 'react';
import Sales from './Sales'

class App extends Component {
    render() {
        var sales = [
        {name: 'Complete iso dev course', price : 100},
        {name: 'Complete front end dev course', price : 199},
        {name: 'Complete full stack course', price : 146},
        {name: 'Complete python course', price : 189}
    ];
        return (
            <div>
                <Sales />
            </div>
        );
    }
}

export default App;
