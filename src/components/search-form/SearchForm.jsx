import { Formik } from 'formik';
import { Form, Input, ErrorMsg, SubmitBtn } from './SearchForm.styled';
import * as Yup from 'yup';

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Title too short!')
    .max(27, 'Title too long!')
    .required('Required'),
});

export const SearchForm = props => {
  return (
    <Formik
      initialValues={{ title: '' }}
      validationSchema={ContactFormSchema}
      onSubmit={(values, actions) => {
        props.onSubmit(values);
        actions.resetForm();
      }}
    >
      <Form autoComplete="off">
        <Input
          type="text"
          name="title"
          autoFocus
          placeholder="Search for your favorite movies and series"
        />
        <ErrorMsg name="name" component="span" />

        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </Form>
    </Formik>
  );
};
