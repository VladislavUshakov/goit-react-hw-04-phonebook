import { Form, ErrorMessage, LabelText, Button } from './ContactForm.styles';
import { Formik, Field } from 'formik';
import PropTypes from 'prop-types';

import * as yup from 'yup';
import 'yup-phone';

export const ContactForm = ({ onSubmit }) => {
  const initialValues = { name: '', number: '' };
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      )
      .required(),
    number: yup.string().phone('UA').required(),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <label>
          <LabelText>Name</LabelText>
          <Field name="name" placeholder="Name Surname" />
          <ErrorMessage component="p" name="name" />
        </label>
        <label>
          <LabelText>Number</LabelText>
          <Field type="tel" name="number" placeholder="380 98 000 0000" />
          <ErrorMessage component="p" name="number" />
        </label>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
