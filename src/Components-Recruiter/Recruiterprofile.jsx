import React from "react";
import "./RecruiterProfile.css";

// =================== Images ===================
import profileImg from "../assets/profile.png";

import companyIcon from "../assets/company.png";
import emailIcon from "../assets/email.png";
import phoneIcon from "../assets/phone.png";
import locationIcon from "../assets/location.png";
import linkedinIcon from "../assets/linkedin.png";

import editIcon from "../assets/edit.png";
import passwordIcon from "../assets/password.png";

import securityIcon from "../assets/security.png";
import historyIcon from "../assets/history.png";
import deviceIcon from "../assets/device.png";
import notificationIcon from "../assets/notification.png";
import arrowIcon from "../assets/arrow2.png";

import certificateIcon from "../assets/certificate.png";
import documentIcon from "../assets/document.png";
import idCardIcon from "../assets/idcard.png";

const RecruiterProfile = () => {
  return (
    <div className="recruiter-profile">

      {/* ================= Header ================= */}

      <div className="profile-header">

        <div>
          <h2>Recruiter Profile</h2>

          <div className="breadcrumb">
            <span>Dashboard</span>
            <span className="divider">›</span>
            <span className="active">Recruiter Profile</span>
          </div>
        </div>

        <div className="header-buttons">

          <button className="password-btn">
            <img src={passwordIcon} alt="" />
            Change Password
          </button>

          <button className="edit-btn">
            <img src={editIcon} alt="" />
            Edit Profile
          </button>

        </div>

      </div>

      {/* ================= Main Grid ================= */}

      <div className="profile-grid">

        {/* ================================================= */}
        {/* Left Profile Card */}
        {/* ================================================= */}

        <div className="card profile-card">

          <div className="active-badge">
            <span className="dot"></span>
            Active
          </div>

          <img
            src={profileImg}
            alt="Profile"
            className="profile-image"
          />

          <h3>Rohith Sharma</h3>

          <p className="designation">
            Senior HR Recruiter
          </p>

          <p className="company-name">
            TalentAcme Solutions Pvt. Ltd.
          </p>

          <div className="employee-id">
            Recruiter ID : REC-2024-0187
          </div>

          <div className="contact-list">

            <div className="contact-item">
              <img src={emailIcon} alt="" />
              <span>
                rohithsharma@talentacme.com
              </span>
            </div>

            <div className="contact-item">
              <img src={phoneIcon} alt="" />
              <span>+91 90080 37635</span>
            </div>

            <div className="contact-item">
              <img src={locationIcon} alt="" />
              <span>Bengaluru, Karnataka, India</span>
            </div>

            <div className="contact-item">
              <img src={linkedinIcon} alt="" />
              <span>
                LinkedIn.com/in/rohithsharma
              </span>
            </div>

          </div>

        </div>

        {/* ================================================= */}
        {/* Company Information */}
        {/* ================================================= */}

       <div className="company-card">

  <h3 className="card-title">Company Information</h3>

  <div className="company-top">

    <div className="company-image">
      <img src={companyIcon} alt="Company" />
    </div>

    <div className="company-details">

      <h4>TalentAcme Solutions Pvt. Ltd.</h4>

      <p>
        <strong>Industry:</strong> Information Technology
      </p>

      <p>
        <strong>Company Size:</strong> 501 - 1000 Employees
      </p>

      <p>
        <strong>Website:</strong>
        <span className="website"> www.talentacme.com</span>
      </p>

      <p>
        <strong>HeadQuarters:</strong> Bengaluru, Karnataka, India
      </p>

    </div>

  </div>

  <div className="about-company">

    <h4>About Company</h4>

    <p>
      TalentAcme Solutions is a fast growing IT services and consulting
      company specialising in digital transformation, cloud solutions
      and product engineering.
    </p>

  </div>

</div>

        {/* ================================================= */}
        {/* Professional Information */}
        {/* ================================================= */}

       <div className="card professional-card">

  <h3 className="card-title">Professional Information</h3>

  <div className="info-row">
    <span className="label">Department</span>
    <span className="value">Human Resources</span>
  </div>

  <div className="info-row">
    <span className="label">Role</span>
    <span className="value">Recruiter</span>
  </div>

  <div className="info-row">
    <span className="label">Years of experience</span>
    <span className="value">6+ Years</span>
  </div>

  <div className="info-row">
    <span className="label">Specialization</span>
    <span className="value">IT Recruitment</span>
  </div>

  <div className="info-row">
    <span className="label">Hiring Domains</span>
  </div>

  <div className="skills">

    <span>Software Development</span>
    <span>Data Science</span>
    <span>Cloud Computing</span>
    <span>Cyber Security</span>
    <span>DevOps</span>

  </div>

  <div className="location-box">

    <span className="label">Preferred Locations</span>

    <p>
      Bengaluru, Pune, Hyderabad, Remote
    </p>

  </div>

</div>
        {/* ================================================= */}
        {/* Recent Activity */}
        {/* ================================================= */}

        <div className="card activity-card">

  <h3 className="card-title">Recent Activity</h3>

  <div className="activity-list">

    <div className="activity-item">

      <div className="activity-icon"></div>

      <div className="activity-content">

        <h5>Created new job post - UI Stack Developer</h5>

        <p>Today, 10:30 AM</p>

      </div>

    </div>

    <div className="activity-item">

      <div className="activity-icon"></div>

      <div className="activity-content">

        <h5>Screened 35 candidates for Data Engineer role</h5>

        <p>Today, 09:15 AM</p>

      </div>

    </div>

    <div className="activity-item">

      <div className="activity-icon"></div>

      <div className="activity-content">

        <h5>Shortlisted 8 candidates for Product Manager role</h5>

        <p>Yesterday, 04:20 PM</p>

      </div>

    </div>

    <div className="activity-item">

      <div className="activity-icon"></div>

      <div className="activity-content">

        <h5>Scheduled interview with Anjali Mehta</h5>

        <p>Yesterday, 11:40 AM</p>

      </div>

    </div>

    <div className="activity-item">

      <div className="activity-icon"></div>

      <div className="activity-content">

        <h5>Generated recruitment report - May 2025</h5>

        <p>20 May 2025, 06:30 PM</p>

      </div>

    </div>

  </div>

</div>

        {/* ================================================= */}
        {/* Security */}
        {/* ================================================= */}

      <div className="card security-card">

  <h3 className="card-title">Security & Account Settings</h3>

  <div className="security-item">

    <div className="security-left">
      <img src={securityIcon} alt="" />
      <span>Two-Factor Authentication</span>
    </div>

    <div className="security-right">
      <span className="enabled">Enabled</span>
      <img src={arrowIcon} alt="" className="arrow-icon" />
    </div>

  </div>

  <div className="security-item">

    <div className="security-left">
      <img src={passwordIcon} alt="" />
      <span>Change Password</span>
    </div>

    <img src={arrowIcon} alt="" className="arrow-icon" />

  </div>

  <div className="security-item">

    <div className="security-left">
      <img src={historyIcon} alt="" />
      <span>Login History</span>
    </div>

    <img src={arrowIcon} alt="" className="arrow-icon" />

  </div>

  <div className="security-item">

    <div className="security-left">
      <img src={deviceIcon} alt="" />
      <span>Device Management</span>
    </div>

    <div className="security-right">
      <span className="device-text">3 Active Devices</span>
      <img src={arrowIcon} alt="" className="arrow-icon-small" />
    </div>

  </div>

  <div className="security-item">

    <div className="security-left">
      <img src={notificationIcon} alt="" />
      <span>Notification Preferences</span>
    </div>

    <img src={arrowIcon} alt="" className="arrow-icon" />

  </div>

</div>

        {/* ================================================= */}
        {/* Documents */}
        {/* ================================================= */}

        <div className="card document-card">

          <h3 className="card-title">
            Documents
          </h3>

          <div className="document-item">

            <img src={certificateIcon} alt="" />

            <div>

              <h5>
                Company Verification Certificate
              </h5>

              <p>
                Uploaded on 10 Jan 2024
              </p>

            </div>

          </div>

          <div className="document-item">

            <img src={documentIcon} alt="" />

            <div>

              <h5>
                HR Authorization Letter
              </h5>

              <p>
                Uploaded on 10 Jan 2024
              </p>

            </div>

          </div>

          <div className="document-item">

            <img src={idCardIcon} alt="" />

            <div>

              <h5>
                Recruiter ID Card
              </h5>

              <p>
                Uploaded on 10 Jan 2024
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default RecruiterProfile;