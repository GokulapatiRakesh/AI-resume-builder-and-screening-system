
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom"; 
import "./UserRegCandidate.css";
import registerImage from "../assets/reg-c-image.png";
import candidateImg from "../assets/candidate.png";
import recruiterImg from "../assets/recruiter.png";
import uploadImg from "../assets/upload.png";
import tickImg from "../assets/check.png";
import hidePasswordIcon from "../assets/eye-hide.png";
import showPasswordIcon from "../assets/show_password.png";

const UserRegCandidate = () => {
  const navigate = useNavigate(); 

  const [role, setRole] = useState("candidate");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    mobile: "",
    email: "",
    degree: "",
    password: "",
    confirmPassword: "",
    resume: null,
    terms: false,
  });
const OTP = "829749";

const [emailVerified, setEmailVerified] = useState(false);

const [showEmailPopup, setShowEmailPopup] = useState(false);

const [showSuccessPopup, setShowSuccessPopup] = useState(false);

const [otp, setOtp] = useState(["","","","","",""]);

const [otpVerified, setOtpVerified] = useState(false);

const inputRefs = useRef([]);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };
const openVerificationPopup = () => {
  if (!formData.email) {
    alert("Please enter email");
    return;
  }

  setOtp(["","","","","",""]);
  setOtpVerified(false);
  setShowEmailPopup(true);
};

const handleOtpChange = (value,index)=>{

  if(!/^\d?$/.test(value)) return;

  const updated=[...otp];
  updated[index]=value;

  setOtp(updated);

  if(value && index<5){
      inputRefs.current[index+1].focus();
  }
};

const verifyOtp=()=>{

   if(otp.join("")===OTP){
       setOtpVerified(true);
   }else{
       alert("Invalid OTP");
   }

};

const continueVerification=()=>{

   setShowEmailPopup(false);

   setShowSuccessPopup(true);

};

const finishVerification=()=>{

   setShowSuccessPopup(false);

   setEmailVerified(true);

};
  const validate = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!formData.userName.trim()) newErrors.userName = "User Name is required";
    if (!/^[6-9]\d{9}$/.test(formData.mobile)) newErrors.mobile = "Enter valid mobile number";
if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email))
    newErrors.email = "Enter valid email";

if (!emailVerified)
    newErrors.email = "Please verify your email";  
    if (!formData.degree.trim()) newErrors.degree = "Degree is required";
    if (formData.password.length < 8) newErrors.password = "Minimum 8 characters";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
    if (!formData.resume) newErrors.resume = "Upload Resume";
    if (!formData.terms) newErrors.terms = "Accept Terms & Conditions";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
const handleSubmit = (e) => {
  e.preventDefault();

  if (validate()) {

    // Check Email Verification
    if (!emailVerified) {
      alert("Please verify your email first.");
      return;
    }

    alert("Registration Successful");

    console.log("Submitting Candidate Context:", {
      role,
      ...formData,
    });

    // Optional: Navigate to Login Page
    // navigate("/Resume-builder/login/candidate");
  }
};

  return (
    <div className="urc-register-page-wrapper">
      <div className="urc-register-container">
        {/* LEFT SECTION */}
        <div className="urc-register-left">
          <h1 className="urc-main-title">Create your account</h1>
          <p className="urc-top-text">Register and join our platform to connect, collaborate <br /> and grow together.</p>
          <div className="urc-left-image"><img src={registerImage} alt="Register" /></div>
          <h2 className="urc-sub-title">Land your dream <br /> career.</h2>
          <p className="urc-career-text">Join the most active talent network and get discovered by <br /> top-tier employers globally.</p>
          <div className="urc-feature-list">
            <div className="urc-feature-item"><img src={tickImg} alt="tick" /><span>Find your dream job</span></div>
            <div className="urc-feature-item"><img src={tickImg} alt="tick" /><span>Get noticed by top employers</span></div>
            <div className="urc-feature-item"><img src={tickImg} alt="tick" /><span>Personalized job alerts</span></div>
            <div className="urc-feature-item"><img src={tickImg} alt="tick" /><span>Track your applications</span></div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="urc-register-right">
          <h1 className="urc-form-title">User Registration</h1>

          <form onSubmit={handleSubmit}>
            <h3 className="urc-register-label">I am Registering as</h3>

            <div className="urc-role-wrapper">
              {/* CANDIDATE CARD */}
              <div
                className={`urc-role-card ${role === "candidate" ? "urc-active" : ""}`}
                onClick={() => setRole("candidate")}
              >
                <div className="urc-radio-circle">
                  {role === "candidate" && <div className="urc-radio-dot"></div>}
                </div>
                <img src={candidateImg} alt="Candidate" />
                <h4>Candidate</h4>
                <p>Explore jobs take next step</p>
              </div>

              
              <div
                className={`urc-role-card ${role === "recruiter" ? "urc-active" : ""}`}
                onClick={() => {
                  setRole("recruiter");
                  navigate("/Resume-builder/userregrecruiter"); 
                }}
              >
                <div className="urc-radio-circle">
                  {role === "recruiter" && <div className="urc-radio-dot"></div>}
                </div>
                <img src={recruiterImg} alt="Recruiter" />
                <h4>Recruiter</h4>
                <p>Post jobs find talent and hire</p>
              </div>
            </div>

            {/* ROW 1: FULL NAME, USER NAME, MOBILE */}
            <div className="urc-form-row">
              <div className="urc-input-group">
                <label>Full Name </label>
                <input type="text" name="fullName" placeholder="Thilak" value={formData.fullName} onChange={handleChange} />
                {errors.fullName && <small className="urc-error-text">{errors.fullName}</small>}
              </div>
              <div className="urc-input-group">
                <label>User Name </label>
                <input type="text" name="userName" placeholder="Thilak0201" value={formData.userName} onChange={handleChange} />
                {errors.userName && <small className="urc-error-text">{errors.userName}</small>}
              </div>
              <div className="urc-input-group">
                <label>Mobile Number </label>
                <input type="text" name="mobile" placeholder="123467890" value={formData.mobile} onChange={handleChange} />
                {errors.mobile && <small className="urc-error-text">{errors.mobile}</small>}
              </div>
            </div>

            {/* ROW 2: DEGREE, EMAIL, PASSWORD */}
            <div className="urc-form-row">
              <div className="urc-input-group">
                <label>Degree </label>
                <input type="text" name="degree" placeholder="B.E Civil Engineer" value={formData.degree} onChange={handleChange} />
                {errors.degree && <small className="urc-error-text">{errors.degree}</small>}
              </div>
             <div className="urc-input-group">
  <label>Email Address</label>

  <div className="urc-email-wrapper">

    <input
      type="email"
      name="email"
      placeholder="reo@gmail.com"
      value={formData.email}
      onChange={handleChange}
      disabled={emailVerified}
    />

    {!emailVerified ? (
      <button
        type="button"
        className="urc-verify-btn"
        onClick={openVerificationPopup}
      >
        Verify
      </button>
    ) : (
      <button
        type="button"
        className="urc-verified-btn"
      >
        Verified
      </button>
    )}

  </div>

  {errors.email && (
    <small className="urc-error-text">
      {errors.email}
    </small>
  )}
</div>

              <div className="urc-input-group urc-password-wrapper">
                <label>Password </label>
                <div className="urc-input-with-icon">
                  <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} />
                  {formData.password && (
                    <img src={showPassword ? showPasswordIcon : hidePasswordIcon} alt="toggle" onClick={() => setShowPassword(!showPassword)} className="urc-password-toggle-icon" />
                  )}
                </div>
                {errors.password && <small className="urc-error-text">{errors.password}</small>}
              </div>
            </div>

            {/* ROW 3: CONFIRM PASSWORD */}
            <div className="urc-form-row">
              <div className="urc-input-group urc-full-width urc-password-wrapper">
                <label>Confirm Password </label>
                <div className="urc-input-with-icon">
                  <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
                  {formData.confirmPassword && (
                    <img src={showConfirmPassword ? showPasswordIcon : hidePasswordIcon} alt="toggle" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="urc-password-toggle-icon" />
                  )}
                </div>
                {errors.confirmPassword && <small className="urc-error-text">{errors.confirmPassword}</small>}
              </div>
            </div>

            {/* RESUME UPLOAD */}
            <div className="urc-input-group urc-full-width">
              <label>Upload Resume </label>
              <label className="urc-upload-box">
                <img src={uploadImg} alt="Upload" className="urc-upload-icon" />
                <p>{formData.resume ? formData.resume.name : "Click to upload or drag and drop (PDF, DOCX)"}</p>
                <input type="file" name="resume" accept=".pdf,.doc,.docx" hidden onChange={handleChange} />
              </label>
              {errors.resume && <small className="urc-error-text">{errors.resume}</small>}
            </div>

            {/* TERMS */}
            <div className="urc-terms-wrapper-block">
              <div className="urc-terms-container">
                <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} />
                <p>I agree to the <span>Terms of Service</span> and <span>Privacy Policy</span> regarding my administrative access.</p>
              </div>
              {errors.terms && <small className="urc-error-text">{errors.terms}</small>}
            </div>

            <button type="submit" className="urc-register-btn">Complete Registration</button>
            <p className="urc-login-text">Already have an account? <span onClick={() => navigate("/Resume-builder/login/candidate")}>Login</span></p>
          </form>
        </div>
      </div>
      {/* ================= EMAIL VERIFICATION POPUP ================= */}

{showEmailPopup && (
  <div className="email-popup-overlay">

    <div className="email-popup">

      <div className="popup-icon">
        📩
      </div>

      <h2>Email Verification</h2>

      <p>
        We've Sent a Code To
      </p>

      <strong>{formData.email}</strong>

      <p>Please enter it below</p>

      <div className="otp-wrapper">

        {otp.map((digit, index) => (

          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) =>
              handleOtpChange(e.target.value, index)
            }
            className="otp-box"
          />

        ))}

      </div>

      {!otpVerified ? (

        <button
          className="popup-btn"
          onClick={verifyOtp}
        >
          Verify
        </button>

      ) : (

        <button
          className="popup-btn"
          onClick={continueVerification}
        >
          Continue
        </button>

      )}

    </div>

  </div>
)}
{/* ================= SUCCESS POPUP ================= */}

{showSuccessPopup && (

<div className="email-popup-overlay">

<div className="success-popup">

<div className="success-icon">

✅

</div>

<h2>

Verification is Confirmed

</h2>

<button

className="popup-btn"

onClick={finishVerification}

>

Continue

</button>

</div>

</div>

)}
    </div>
  );
};

export default UserRegCandidate;