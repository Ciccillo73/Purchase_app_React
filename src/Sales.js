import React, {Component} from 'react';

class Sales extends Component {
    constructor(props) {
        super(props);

    this.state = {
        total:0
    };

    }


    render() {
        console.log(this.props.items);
        return (

            <div>
                I am from course sales
            </div>
        );
    }
}

export default Sales;