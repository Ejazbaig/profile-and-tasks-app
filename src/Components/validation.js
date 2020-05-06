export const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (!/^[a-zA-Z-, ]+(\s{0,1}[a-zA-Z-, ])*$/.test(values.name)) {
    errors.name = "Only text Allowed";
  } else if (values.name.length > 30) {
    errors.name = "Character limit exceeded";
  }
  if (!values.dob) {
    errors.dob = "Required";
  } else if (!/^([0-9]{2})-([0-9]{2})-([0-9]{4})$/.test(values.dob)) {
    errors.dob = "Invalid DOB";
  }
  if (!values.profession) {
    errors.profession = "Required";
  } else if (!/^[a-zA-Z-, ]+(\s{0,1}[a-zA-Z-, ])*$/.test(values.profession)) {
    errors.profession = "Only text Allowed";
  } else if (values.name.length > 30) {
    errors.name = "Character limit exceeded";
  }
  if (!values.designation) {
    errors.designation = "Required";
  } else if (!/^[a-zA-Z-, ]+(\s{0,1}[a-zA-Z-, ])*$/.test(values.designation)) {
    errors.designation = "Only text Allowed";
  } else if (values.name.length > 30) {
    errors.name = "Character limit exceeded";
  }
  return errors;
};
