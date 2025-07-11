import { useEffect, useState } from "react";
import { Form, InputGroup, Spinner } from "react-bootstrap";
import { useDebounced } from "../hooks/use_debounced";

import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

const InputGroupText = styled(InputGroup.Text)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.5rem;
  height: 2.5rem;
  padding: 0;

  .spinner-border {
    border-width: 0.2rem;
    width: 1.2rem;
    height: 1.2rem;
  }
`;

const SearchBar = ({ query, loaded, onChange }) => {
  const [value, setValue] = useState("");
  const debounced = useDebounced();

  const onChangeValue = ({ target: { value } }) => {
    setValue(value);
    debounced(onChange, value);
  };

  useEffect(() => { setValue(query ?? ""); }, [query]);

  return (
    <Form role='search' className="my-2">
      <InputGroup>
        <InputGroupText>
          {loaded
            ? <Spinner as="span" animation="border" />
            : <div><BsSearch /></div>
          }
        </InputGroupText>
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