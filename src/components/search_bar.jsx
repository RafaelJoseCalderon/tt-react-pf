import { Form, InputGroup, Spinner } from "react-bootstrap";

const SearchBar = ({ query, loaded, onChange }) => {
  return (
    <Form role='search' className="search-bar mt-3">
      <InputGroup>
        <InputGroup.Text>
          {loaded
            ? <Spinner as="span" animation="border" />
            : <i className="bi bi-search"></i>
          }
        </InputGroup.Text>
        <Form.Control
          type="search"
          placeholder="Buscar"
          readOnly={loaded}
          value={query ?? ""}
          onChange={(e) => onChange(e?.target?.value)}
        />
      </InputGroup>
    </Form>
  );
};

export default SearchBar;