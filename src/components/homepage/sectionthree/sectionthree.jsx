import './sectionthree.css';
export default function SectionThree() {
    return (<div className="row p-lg-5 p-3 mx-lg-5 my-5 section-three">
        <div className="col-lg-4 px-lg-4">
            <h3>A Stateful Component</h3>
            <p className="text-justify">In addition to taking input data (accessed via this.props), a component
            can maintain internal state data (accessed via this.state). When a component’s state data changes,
            the rendered markup will be updated by re-invoking render().</p>
        </div>
        <div className="col-lg-8 px-lg-4"></div>
    </div>);
}