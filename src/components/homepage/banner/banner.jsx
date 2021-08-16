import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './banner.css';
export default function Banner() {
    const link = "/public/index.html";
    return (
        <div className="row">
            <div className="col banner p-lg-5">
                <div className="d-flex flex-column justify-content-center align-items-center py-4">
                    <h1 className="big-font-react pt-lg-5 pb-lg-3 pt-5">React</h1>
                    <p className="banner-title">A JavaScript library for building user interfaces</p>
                    <div className="py-4">
                        <a href={link} className="mx-2 btn-react">Get started</a>
                        <a href={link} className="mx-2 text-light">
                            <span>Take a tutorial</span>
                            <span className="p-4"><FontAwesomeIcon icon={faChevronRight} /></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}