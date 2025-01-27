import { useSearchParams } from "react-router"
import Select from "./Select"

/* eslint-disable react/prop-types */
function SortBy({options}) {
    const [searchParams, setSearchParams] = useSearchParams();
    const sortBy = searchParams.get('sortBy') || '';

    function handleChange(e) {
        searchParams.set('sortBy', e.target.value);
        setSearchParams(searchParams);
    }

    return (
        <Select value={sortBy} options={options} onChange={handleChange} type='white' />
    )
}

export default SortBy
