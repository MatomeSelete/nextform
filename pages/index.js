// import { useState } from 'react';
import styles from '../styles/Home.module.css';


import MultiStepForm from '../components/MultiStepForm';

export default function YourPage() {
  return (
    <div>
      <MultiStepForm />
    </div>
  );
}

































// export default function FormComponent() {
//   const [currentTab, setCurrentTab] = useState(0);

//   const showTab = (n) => {
//     const tabs = document.querySelectorAll('.tab');
//     tabs.forEach((tab, index) => {
//       if (index === n) {
//         tab.style.display = 'block';
//       } else {
//         tab.style.display = 'none';
//       }
//     });

//     const prevBtn = document.getElementById('prevBtn');
//     const nextBtn = document.getElementById('nextBtn');

//     if (n === 0) {
//       prevBtn.style.display = 'none';
//     } else {
//       prevBtn.style.display = 'inline';
//     }

//     if (n === tabs.length - 1) {
//       nextBtn.innerHTML = 'Submit';
//     } else {
//       nextBtn.innerHTML = 'Next';
//     }
//     fixStepIndicator(n);
//   };

//   const nextPrev = (n) => {
//     const tabs = document.querySelectorAll('.tab');

//     if (n === 1 && !validateForm()) return false;

//     tabs[currentTab].style.display = 'none';
//     setCurrentTab(currentTab + n);

//     if (currentTab >= tabs.length) {
//       document.getElementById('regForm').submit();
//       return false;
//     }
//     showTab(currentTab);
//   };

//   const validateForm = () => {
//     const tabs = document.querySelectorAll('.tab');
//     const currentTabInputs = tabs[currentTab].getElementsByTagName('input');

//     let valid = true;

//     for (let i = 0; i < currentTabInputs.length; i++) {
//       if (currentTabInputs[i].value === '') {
//         currentTabInputs[i].className += ' ' + styles.invalid;
//         valid = false;
//       }
//     }

//     if (valid) {
//       document.querySelectorAll('.step')[currentTab].className += ' ' + styles.finish;
//     }

//     return valid;
//   };

//   const fixStepIndicator = (n) => {
//     const steps = document.querySelectorAll('.step');
//     steps.forEach((step, index) => {
//       if (index === n) {
//         step.classList.add(styles.active);
//       } else {
//         step.classList.remove(styles.active);
//       }
//     });
//   };

//   return (
//     <div className={styles.formContainer}>
//       <form id="regForm" action="/action_page.php">
//         <h1>Register:</h1>
//         <div className="tab">
//           Name:
//           <p>
//             <input
//               placeholder="First name..."
//               onInput={() => showTab(currentTab)}
//               name="fname"
//             />
//           </p>
//         </div>

//         <div className="tab">
//         <p>
//             <input
//               placeholder="Last name..."
//               onInput={() => showTab(currentTab)}
//               name="lname"
//             />
//           </p>
//         </div>

//         <div className="tab">
//           Contact Info:
//           <p>
//             <input
//               placeholder="E-mail..."
//               onInput={() => showTab(currentTab)}
//               name="email"
//             />
//           </p>
//           <p>
//             <input
//               placeholder="Phone..."
//               onInput={() => showTab(currentTab)}
//               name="phone"
//             />
//           </p>
//         </div>
//         <div className="tab">
//           Birthday:
//           <p>
//             <input
//               placeholder="dd"
//               onInput={() => showTab(currentTab)}
//               name="dd"
//             />
//           </p>
//           <p>
//             <input
//               placeholder="mm"
//               onInput={() => showTab(currentTab)}
//               name="nn"
//             />
//           </p>
//           <p>
//             <input
//               placeholder="yyyy"
//               onInput={() => showTab(currentTab)}
//               name="yyyy"
//             />
//           </p>
//         </div>
//         <div className="tab">
//           Login Info:
//           <p>
//             <input
//               placeholder="Username..."
//               onInput={() => showTab(currentTab)}
//               name="uname"
//             />
//           </p>
//           <p>
//             <input
//               placeholder="Password..."
//               onInput={() => showTab(currentTab)}
//               name="pword"
//               type="password"
//             />
//           </p>
//         </div>
//         <div style={{ overflow: 'auto' }}>
//           <div style={{ float: 'right' }}>
//             <button
//               type="button"
//               id="prevBtn"
//               onClick={() => nextPrev(-1)}
//               style={{ display: currentTab === 0 ? 'none' : 'inline' }}
//             >
//               Previous
//             </button>
//             <button
//               type="button"
//               id="nextBtn"
//               onClick={() => nextPrev(1)}
//             >
//               {currentTab === 3 ? 'Submit' : 'Next'}
//             </button>
//           </div>
//         </div>
//         <div style={{ textAlign: 'center', marginTop: '40px' }}>
//           <span className={`step ${styles.active}`}></span>
//           <span className="step"></span>
//           <span className="step"></span>
//           <span className="step"></span>
//         </div>
//       </form>
//     </div>
//   );
// }
