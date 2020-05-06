import React from "react";
import { useFormik } from "formik";
import Button from "react-bootstrap/Button";
import { validate } from "./validation";

const initialValues = {
  name: "",
  dob: "",
  profession: "",
  designation: "",
};

function ProfileSettings(props) {
  const formik = useFormik({
    initialValues,
    onSubmit: props.mySubmit,
    validate,
  });

  return (
    <div className="profileFormDiv">
      <label className="label">Profile info</label>
      <form
        className="myForm"
        onSubmit={formik.handleSubmit}
        onReset={formik.handleReset}
      >
        <div className="form-fields">
          <label className="label">Name</label>
          <input
            className="inputField"
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </div>
        <div className="form-fields">
          <label className="label">DOB</label>
          <input
            className="inputField"
            type="text"
            id="dob"
            name="dob"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dob}
          />
          {formik.touched.dob && formik.errors.dob ? (
            <div>{formik.errors.dob}</div>
          ) : null}
        </div>
        <div className="form-fields">
          <label className="label">Profession</label>
          <input
            className="inputField"
            type="text"
            id="profession"
            name="profession"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.profession}
          />
          {formik.touched.profession && formik.errors.profession ? (
            <div>{formik.errors.profession}</div>
          ) : null}
        </div>
        <div className="form-fields">
          <label className="label">Designation</label>
          <input
            className="inputField"
            type="text"
            id="designation"
            name="designation"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.designation}
          />
          {formik.touched.designation && formik.errors.designation ? (
            <div>{formik.errors.designation}</div>
          ) : null}
        </div>
        <Button type="reset" variant="danger">
          Cancel
        </Button>{" "}
        <Button type="submit" variant="success">
          Submit
        </Button>{" "}
      </form>
    </div>
  );
}

export default ProfileSettings;
