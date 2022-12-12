const SearchForm = () => (
  <div className="tg-searchbox">
    <form
      className="tg-formtheme tg-formsearch"
      action="{{ route('books.list"
      method="get"
    >
      <fieldset>
        <input
          type="text"
          name="search"
          className="typeahead form-control"
          placeholder="Search by title, author, genre, keyword, ISBN..."
          value="mm"
        />
        <button type="submit">
          <i className="icon-magnifier"></i>
        </button>
      </fieldset>
    </form>
  </div>
);

export default SearchForm;
