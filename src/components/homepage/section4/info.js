import './info.css';

export default function Info() {
    return (
        <div>
            <h3>A Stateful Component</h3>
            <p>In addition to taking input data (accessed via this.props), a component can maintain internal state data (accessed via this.state). When a component’s state data changes, the rendered markup will be updated by re-invoking render().</p>
        </div>
    );
}
