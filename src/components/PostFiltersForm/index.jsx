import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

PostFiltersForm.propTypes = {
  onSubmit: PropTypes.func,
};

PostFiltersForm.defaultProps = {
  onSubmit: null,
};

function PostFiltersForm(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");
  //   Khai báo 1 biến tạm giữ nguyên giá trị sau mỗi lần render
  const typingTimeoutRef = useRef(null);

  function handleSearchTermChange(e) {
    setSearchTerm(e.target.value);

    if (!onSubmit) return;

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: e.target.value,
      };
      onSubmit(formValues);
    }, 500);
  }

  return (
    <form>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
    </form>
  );
}

export default PostFiltersForm;
