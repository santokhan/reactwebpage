import './search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Search() {
    return (
        <div className="form-search d-lg-inline-block d-none mx-lg-4">
            <label><FontAwesomeIcon icon={faSearch} /></label>
            <input id="inputSearch" type="text" placeholder="Search" className="d-lg-block d-none" />
        </div>
    );
}