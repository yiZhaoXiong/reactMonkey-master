import React from 'react';
import {Link} from 'react-router'


export  default  class Menu extends React.Component {
    handleClick = ()=> {
        this.props.act && this.props.act();
    }

    render() {
        let p = <p style={{display: 'none'}}>{this.props.data.menuName}</p>;
        if (this.props.data.active) {
            p = <p onClick={this.handleClick}>{this.props.data.menuName}</p>;
        }
        return (
            <div>
                {p}
                <ul>
                    {this.props.data.subMenu.map(m=> {
                            return m.active && <li className='checked'><Link to={m.url}>{m.name}</Link></li>
                            !m.active && <li><Link to={m.url}>{m.name}</Link></li>
                        }
                    )}
                </ul>
            </div>
        )
    }
}

