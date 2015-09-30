import React from 'react';
import BaseComponent from '../../BaseComponent.js';

class Menu extends BaseComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const children = this.props.children || [];

        return (
            <ul>
                { /* top elements */ }
                {
                    this.props.children.map(e => {
                        if (!e.props.isStickBottom) {
                            return e;
                        }
                    })
                }

                { /* bottom sticky elements */ }
                <div className="bottom">
                    {
                        children.map(e => {
                            if (e.props.isStickBottom) {
                                return e;
                            }
                        })
                    }
                </div>
            </ul>
        );
    }
}

export default Menu;