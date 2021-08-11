import './search.css';

const Search = ({handleSearch, label}) => {
  return (
    <label className="search-label">
      {label}
      <input
        type="text"
        placeholder="Rechercher..."
        onChange={(e) => handleSearch(e)}
        className="search-input"
      />
    </label>
  );
};

export default Search;