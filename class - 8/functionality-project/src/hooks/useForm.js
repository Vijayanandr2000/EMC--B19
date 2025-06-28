import { useState } from "react";
const useForm = () => {
  const [formVal, setFormVal] = useState({});

  const handleChange = (e) => {
    let value = e.target.value;
    let key = e.target.name;

    let userData = {
      ...formVal,
      [key]: value,
    };
    setFormVal(userData);
  };

  return {
    formVal,
    handleChange,
  };
};

export default useForm;
