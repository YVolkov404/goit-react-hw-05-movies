import { Formik } from 'formik';
import { Form, Input, ErrorMsg, SubmitBtn, Icon } from './SearchForm.styled';
import * as Yup from 'yup';

const searchSchema = Yup.object().shape({
  query: Yup.string().required('Required'),
});

export const SearchForm = ({ getQueryHandler }) => {
  return (
    <Formik
      initialValues={{ query: '' }}
      validationSchema={searchSchema}
      onSubmit={(values, actions) => {
        getQueryHandler(values);
        actions.resetForm();
      }}
    >
      <Form autoComplete="off">
        <Input
          type="text"
          name="query"
          autoFocus
          placeholder="Search for your favorite movies and series"
        />
        <ErrorMsg name="query" component={'span'} />

        <SubmitBtn type="submit">
          <Icon size="42" />
        </SubmitBtn>
      </Form>
    </Formik>
  );
};
