import { useState, useEffect } from "react";
import { Button, Form, InputGroup, Stack } from "react-bootstrap";

const GoTo = ({ page, totalPages, goToPage }) => {
  const [goTo, setGoTo] = useState(String(page));

  useEffect(() => {
    setGoTo(String(page));
  }, [page]);

  const handleChange = ({ target: { value } }) => {
    if (/^\d*$/.test(value)) {
      const numeric = Number(value);
      if (value === "" || (numeric > 0 && numeric <= totalPages)) {
        setGoTo(value);
      }
    }
  };

  const onGoTo = () => {
    const value = Number(goTo);
    if (value > 0 && value <= totalPages) {
      goToPage(value);
    }
  };

  return (
    <InputGroup className="region">
      <InputGroup.Text>Ir a</InputGroup.Text>
      <Form.Control type="text" inputMode="numeric" pattern="\d*" value={goTo} onChange={handleChange} />
      <Button variant="outline-secondary" onClick={onGoTo}>{">"}</Button>
    </InputGroup>
  );
};

const Paginator = ({ page, limit, totalPages, goToPage, changeLimit }) => {
  const onPrev = () => {
    if (page && page > 1) goToPage(page - 1);
  };

  const onNext = () => {
    if (page && page < totalPages) goToPage(page + 1);
  };

  const onLimit = ({ target: { value } }) => {
    changeLimit(parseInt(value));
  };

  if (!page || !totalPages || totalPages < 1) return <></>;

  return (
    <Stack className="paginator flex-column flex-sm-row" gap={3}>

      <InputGroup className="region">
        <InputGroup.Text>Limite</InputGroup.Text>
        <Form.Select value={limit} onChange={onLimit}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </Form.Select>
      </InputGroup>

      <InputGroup className="region mx-auto">
        <Button variant="outline-secondary" onClick={onPrev}>{"<"}</Button>
        <Form.Control as="label" className="text-center">{page}/{totalPages}</Form.Control>
        <Button variant="outline-secondary" onClick={onNext}>{">"}</Button>
      </InputGroup>

      <GoTo page={page} totalPages={totalPages} goToPage={goToPage} />
    </Stack>
  );
};

export default Paginator;