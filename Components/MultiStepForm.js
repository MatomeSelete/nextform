import { useState } from 'react';
import styles from "../styles/Home.module.css"

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    // Handle form submission here. You can send the formData to an API or perform other actions.
    console.log(formData)
  };

  return (
    <div className={`${styles.formMain}`}>
      <div className={`${styles.inputLabel}`}>
        <h1>Multi-Step Form - Step {step}</h1>
        {step === 1 && (
          <div>
            <label>First, let's start with your name. What's your first name?</label>
            <br />
            <input
            className={`${styles.inputForm}`}
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
        )}
      

      {step === 2 && (
        <div>
          <label>Great, {formData.firstName} . Now, what's your last name?:</label>
          <br />
          <input
          className={`${styles.inputForm}`}
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
      )}
      {step === 3 && (
        <div>
          <br />
          <label>Excellent, {formData.firstName} {formData.lastName}. We'll need to get in touch with you. What's your email address?:</label>
          <input
          className={`${styles.inputForm}`}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
      )}
      {step === 4 && (
        <div>
          <br />
          <label>Almost there, {formData.firstName}. In case we need to reach you by phone, what's your phone number?:</label>
          <input
          className={`${styles.inputForm}`}
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
      )}
      <div>
        <br />
        {step >  (
          <button onClick={handlePrevStep}>Previous</button>
        )}
        {step < 4 ? (
          <button onClick={handleNextStep}>Let's Do it</button>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
      </div>
    </div>
  );
}
