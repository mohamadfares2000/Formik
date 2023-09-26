import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import { CreatAnAcount, Create, FinalySection,  Header, Input, LeftDescription, LeftHeader, LeftSection, LeftSectionContainer, Login, PageContainer, RightSection, StyledErrorMsg } from './create.styled';




function YourPage() {

  const initialValues = {
    name: '',
    email: '',
    password: ''
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
    .required('No password provided.') 
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
    });

  const onSubmit = (values, { resetForm }) => {
    console.log(values);

    resetForm();
  };


  return (
    <PageContainer>
      <RightSection>
            <Header>
                  Create Acount
            </Header>


<Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div>
          <Input placeholder="name" type="text" id="name" name="name" />
          <StyledErrorMsg name="name" component="div" className="error" />
        </div>

        <div>
          <Input placeholder="email" type="email" id="email" name="email" />
          <StyledErrorMsg name="email" component="div" className="error" />
        </div>

        <div>
          <Input placeholder="password" type="password" id="password" name="password" />
          <StyledErrorMsg name="password" component="div" className="error" />
        </div>

        <Create type="submit">Submit</Create>
      </Form>
    </Formik>
            <CreatAnAcount ><p>Already have an account?<Login href="">Log in</Login></p></CreatAnAcount>
        </RightSection>

      <LeftSection>
      <LeftSectionContainer>
         <LeftHeader>We’re here to optimised your workflow</LeftHeader>
         <LeftDescription>
             Your docs, projects, notes and reminders.<br/>
              Together.
         </LeftDescription>
         <FinalySection>Finally, all your work in one place.</FinalySection>
      </LeftSectionContainer>
      </LeftSection>


    </PageContainer>
  );
}

export default YourPage;
