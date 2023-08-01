import { FormSection, DividerForm, Form, DivForm, DivName, DivInfo } from "./styles";

function ComponentFormSection() {
  return (
    <FormSection>
      <DivForm>
        <h1>JOIN HYDRA</h1>
        <DividerForm />
        <span>Let's Build Your VR Experience</span>

        <Form>
          <DivName>
            <div>
              <input placeholder="First Name" />
            </div>
            <div>
              <input placeholder="Last Name" />
            </div>
          </DivName>
          <DivInfo>
            <div>
              <input placeholder="Email" />
            </div>
            <div>
              <input placeholder="Phone Number" />
            </div>
          </DivInfo>
          <div className="inputs">
            <input placeholder="Subject" />
            <input placeholder="Tell Us Something..." />
          </div>
        </Form>

        <button>Send to Hydra</button>

      </DivForm>
    </FormSection>
  );
}

export default ComponentFormSection;
