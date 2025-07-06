import { useState } from "react";
import { Form, InputGroup, Spinner } from "react-bootstrap";
import { useDebounced } from "../hooks/use_debounced";

const SearchBar = ({ query, loaded, onChange }) => {
  const [value, setValue] = useState(query ?? "");
  const debounced = useDebounced();

  const onChangeValue = ({ target: { value } }) => {
    setValue(value);
    debounced(onChange, value);
  };

  return (
    <Form role='search' className="search-bar my-2">
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
          value={value}
          onChange={onChangeValue}
        />
      </InputGroup>
    </Form>
  );
};

export default SearchBar;