/* eslint-disable react/prop-types */
const FilterForm = ({ searchTerm,  setSearchTerm }) => {
    const handleFilterChange = (event) => {
        setSearchTerm(event.target.value);
      };
  return (
    <div>
      <div>
        <input value={searchTerm} onChange={handleFilterChange} />
      </div>
    </div>
  );
}

export default FilterForm;