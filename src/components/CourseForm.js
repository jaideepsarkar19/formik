import { Form, Formik } from "formik";
import { advancedSchema } from "../schemas";
import CustomCheckbox from "./CustomCheckbox";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const CourseForm = () => {
  return (
    <Formik
      initialValues={{ studentname: "", courseType: "", acceptedTos: false }}
      validationSchema={advancedSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <CustomInput
            label="Studentname"
            name="studentname"
            type="text"
            placeholder="Enter your name"
          />
          <CustomSelect
            label="Courses Type"
            name="courseType"
            placeholder="Please select a GUVI courses"
          >
            <option value="">Please select Guvi courses</option>
            <option value="developer">Full Stack Developer</option>
            <option value="engineer">Data Engineer</option>
            <option value="AI ML "></option>
            <option value="security">Enterprise Security</option>
          </CustomSelect>
          <CustomCheckbox type="checkbox" name="acceptedTos" />
          <button disabled={isSubmitting} type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default CourseForm;
