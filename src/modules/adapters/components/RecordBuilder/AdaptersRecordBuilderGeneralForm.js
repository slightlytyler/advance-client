import Form from 'common/components/Form';
import React from 'react';
import yup from 'yup';

const formSchema = yup.object({
  name: yup.string().required('is required'),
  description: yup.string(),
});

const AdaptersRecordBuilderGeneralForm = props => (
  <Form {...props} schema={formSchema}>
    <Form.Field autoFocus name="name" />
    <Form.Field name="description" />
    <Form.SubmitButton label="Save Adapter" />
  </Form>
);

export default AdaptersRecordBuilderGeneralForm;