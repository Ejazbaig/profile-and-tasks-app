import React from "react";
import { useFormik } from "formik";
import { Button } from "react-bootstrap";

const initialValues = {
  sourceName: "Dropdown",
  enableLogging: false,
  provideSql: "",
  targetResult: "Select",
};

const onSubmit = (values, { resetForm }) => {
  console.log(values);
  resetForm();
};

const validate = (values) => {
  let errors = {};
  if (!values.provideSql) {
    errors.provideSql = "Required";
  }
  if (values.targetResult === "Select") {
    errors.targetResult = "Required";
  }
  return errors;
};

function ProfileSettings({ name }) {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  return (
    <div className="profileFormDiv">
      <label className="label">{name}</label>
      <form
        className="myForm"
        onSubmit={formik.handleSubmit}
        onReset={formik.handleReset}
      >
        <div className="myFormDiv">
          <div className="form-fields">
            <label className="label">Source Name</label>
            <label className="dropLabel">Dropdown</label>
          </div>
          <div className="form-fields">
            <label className="label">Enable logging</label>
            <div className="pretty p-svg p-curve">
              <input type="checkbox" />
              <div className="pretty p-icon p-smooth">
                <input
                  type="checkbox"
                  onChange={() => {
                    formik.values.enableLogging = !formik.values.enableLogging;
                  }}
                />
                <div className="state p-success">
                  <i className="icon fa fa-check"></i>
                  <label></label>
                </div>
              </div>
            </div>
          </div>
          <div className="form-fields">
            <label className="label">Provide SQL</label>
            <input
              className="largeInputField"
              type="text"
              id="provideSql"
              name="provideSql"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Provide SQL here"
              value={formik.values.provideSql}
            />
            {formik.touched.provideSql && formik.errors.provideSql ? (
              <div>{formik.errors.provideSql}</div>
            ) : null}
          </div>
          <div className="form-fields myDropDown">
            <label className="label">Target Result</label>
            <select
              id="dropdownList"
              onChange={(e) => {
                formik.values.targetResult = e.target.value;
              }}
              onBlur={formik.handleBlur}
            >
              <option value="Select">Select</option>
              <option value="Result 1">Result 1 </option>
              <option value="Result 2">Result 2</option>
              <option value="Result 3">Result 3</option>
              <option value="Result 4">Result 4</option>
            </select>
            {formik.touched.targetResult && formik.errors.targetResult ? (
              <div>{formik.errors.targetResult}</div>
            ) : null}
          </div>
          <Button
            type="reset"
            variant="danger"
            onClick={() => {
              formik.values.enableLogging = false;
              formik.values.provideSql = "";
              formik.values.targetResult = "Select";
            }}
          >
            Cancel
          </Button>{" "}
          <Button type="submit" variant="success">
            Submit
          </Button>{" "}
          <Button variant="primary">Validate</Button>{" "}
        </div>
      </form>
    </div>
  );
}

export default ProfileSettings;
