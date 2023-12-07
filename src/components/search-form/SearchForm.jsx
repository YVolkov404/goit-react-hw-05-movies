import { Formik } from 'formik';
import { Form, Input, ErrorMsg, SubmitBtn, Icon } from './SearchForm.styled';
import * as Yup from 'yup';

const ContactFormSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, 'Query too short!')
    .max(27, 'Query too long!')
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
        <ErrorMsg name="title" component="span" />

        <SubmitBtn type="submit">
          <Icon size="42" />
        </SubmitBtn>
      </Form>
    </Formik>
  );
};
