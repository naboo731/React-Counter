import { Fragment, Component } from 'react';

class Counter extends Component {
    state = {
        count: this.props.value
    }
    formatCount() {
        const { count } = this.state
        return count === 0 ? 'Zero' : count
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-"
        classes += (this.state.count === 0) ? 'warning' : 'primary'
        return classes
    }

    // constructor() {
    //     super()
    //     this.handleIncrementBtn = this.handleIncrementBtn.bind(this)
    // }
    // renderTags() {
    //     if (this.state.tags.length === 0) {
    //         return <p>There are no tags</p>
    //     } else {
    //        return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
    //     }
    // }

    handleIncrementBtn = () => {
        this.setState({count: this.state.count + 1})
    }

    render() { 
        return (
            <Fragment>
                <h4>{this.props.id}</h4>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrementBtn} 
                className='btn btn-secondary btn-sm'>Increment</button>
                <button onClick={() => this.props.onDelete(this.props.id)} className='btn btn-danger btn-sm m-2'>Delete</button>
            </Fragment>
            
        );
    }
}
 
export default Counter;