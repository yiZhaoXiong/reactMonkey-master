import React from 'react';

export  default  class Right extends React.Component {
    render() {
        return (
            <div class="body-right">
                {this.props.children}
            </div>
        )
    }
}

