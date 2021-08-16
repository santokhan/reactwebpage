// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './footer.css';
import fbOpenSrc from './facebook-open-source.png';
export default function Banner() {
    const link = "https://reactjs.org";
    return (
        <div className="row footer p-lg-5">
            <div className="col-lg-4 p-lg-5 p-3 order-lg-1 order-3 text-lg-left text-center">
                <div className="p-4"><img src={fbOpenSrc} alt="facebook-open-source" width="200px" /></div>
            </div>
            <div className="col-lg-4 p-lg-5 p-3 text-light order-lg-2 order-1">
                <div className="text-center text-lg-left p-4">
                    <h5>Docs</h5>
                    <ul className="list-unstyled">
                        <li><a href={link}>Installation</a></li>
                        <li><a href={link}>Main Concepts</a></li>
                        <li><a href={link}>Advanced Guide</a></li>
                        <li><a href={link}>API Reference</a></li>
                        <li><a href={link}>Hooks</a></li>
                        <li><a href={link}>Testing</a></li>
                        <li><a href={link}>Concurrent Mode (Experimental)</a></li>
                        <li><a href={link}>Contributing</a></li>
                        <li><a href={link}>FAQ</a></li>
                    </ul>
                </div>
                <div className="text-center text-lg-left py-lg-5 p-4">
                    <h5>COMMUNITY</h5>
                    <ul className="list-unstyled">
                        <li><a href={link}>Code of Conduct</a></li>
                        <li><a href={link}>Community Resources</a></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-4 p-lg-5 p-3 text-light order-lg-3 order-2">
                <div className="text-center text-lg-left p-4">
                    <h5>Docs</h5>
                    <ul className="list-unstyled">
                        <li>Installation</li>
                        <li>Main Concepts</li>
                        <li>Advanced Guide</li>
                        <li>API Reference</li>
                        <li>Hooks</li>
                        <li>Testing</li>
                        <li>Concurrent Mode (Experimental)</li>
                        <li>Contributing</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className="text-center text-lg-left py-lg-5 p-4">
                    <h5>Docs</h5>
                    <ul className="list-unstyled">
                        <li>Installation</li>
                        <li>Main Concepts</li>
                        <li>Advanced Guide</li>
                        <li>API Reference</li>
                        <li>Hooks</li>
                        <li>Testing</li>
                        <li>Concurrent Mode (Experimental)</li>
                        <li>Contributing</li>
                        <li>FAQ</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}