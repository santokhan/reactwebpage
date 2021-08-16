import './sectiontwo.css';
export default function SectionTwo() {
    return (<div className="row p-lg-5 p-3 mx-lg-5 my-5 section-two">
        <div className="col-lg-4 px-lg-4">
            <h3>A Simple Component</h3>
            <p className="text-justify text-dark">React components implement a render() method that takes input data and returns what
            to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can
             be accessed by render() via this.props.</p>
            <h5>JSX is optional and not required to use React.</h5>
            <p> Try the Babel REPL to see the raw JavaScript code produced by
             the JSX compilation step.</p>
        </div>
        <div className="col-lg-8 px-lg-4">
            <div className="code-editor d-lg-flex">
                <div className="code">
                    <div className="d-flex justify-content-between p-3">
                        <h6 className="title">LIVE JSX EDITOR</h6>
                        <div className="d-flex align-items-center">
                            <input type="checkbox" />
                            <h6 className="title px-2">JSX</h6>
                        </div>
                    </div>
                    <div className="bg-dark p-3">
                        <code>class HelloMessage extends React.Component</code>
                    </div>
                </div>
                <div className="result">
                    <h6 className="title p-3 bg-light border">Result</h6>
                    <div className="p-2">Hello Taylor</div>
                </div>
            </div>
        </div>
    </div>);
}