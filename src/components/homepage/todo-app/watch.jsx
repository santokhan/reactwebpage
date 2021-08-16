import { useeffect, useState } from 'react';

export default function Watch() {
    const [state, setstate] = useState(new Date());
    state = { timeStamp: new Date() };

    function componentDidMount() {
        var counting = setInterval(() => {
            tick();
        }, 1000);
    }
    function componentWillUnmount() {
    }
    function tick() {
        this.setState({ timeStamp: new Date() });
    }
    return (
        <div>
            <div>{new Date().toLocaleTimeString()}</div>
        </div>
    );
}