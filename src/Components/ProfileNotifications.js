import React from "react";
import { useFormik } from "formik";
import Button from "react-bootstrap/Button";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

const initialValues = {
  allAlerts: false,
  taskSuccess: false,
  taskFailed: false,
  noAlerts: false,
};

const onSubmit = (values) => {
  console.log(values);
};

function ProfileSettings() {
  const formik = useFormik({
    initialValues,
    onSubmit,
  });
  return (
    <div className="profileFormDiv">
      <label className="label">Notification</label>
      <form
        className="myForm"
        onSubmit={formik.handleSubmit}
        onReset={formik.handleReset}
      >
        <div className="form-fields">
          <label className="label">Send all alerts</label>
          <BootstrapSwitchButton
            checked={formik.values.allAlerts}
            onChange={() =>
              (formik.values.allAlerts = !formik.values.allAlerts)
            }
          />
        </div>
        <div className="form-fields">
          <label className="label">Alerts only task success</label>
          <BootstrapSwitchButton
            checked={formik.values.taskSuccess}
            onChange={() =>
              (formik.values.taskSuccess = !formik.values.taskSuccess)
            }
          />
        </div>
        <div className="form-fields">
          <label className="label">Alerts only for failed tasks</label>
          <BootstrapSwitchButton
            checked={formik.values.taskFailed}
            onChange={() =>
              (formik.values.taskFailed = !formik.values.taskFailed)
            }
          />
        </div>
        <div className="form-fields">
          <label className="label">I do not want any alerts</label>
          <BootstrapSwitchButton
            checked={formik.values.noAlerts}
            onChange={() => (formik.values.noAlerts = !formik.values.noAlerts)}
          />
        </div>
        <Button
          type="reset"
          variant="danger"
          onClick={() => {
            formik.values.allAlerts = false;
            formik.values.taskSuccess = false;
            formik.values.taskFailed = false;
            formik.values.noAlerts = false;
          }}
        >
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
