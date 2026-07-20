import "./Admissions.css";
import admissions from "../../data/admissions.json";

function Admissions() {
  return (
    <div className="admissions-page">

      <section className="admissions-hero">
        <div className="container-custom text-center">
          <h1 className="font-display">{admissions.hero.title}</h1>

          <p>{admissions.hero.description}</p>
        </div>
      </section>

      <section className="container-custom admissions-content">
        <div className="admissions-sidebar">
          {admissions.steps.map((step) => (
            <div key={step.number} className="admissions-step">
              <h3 className="font-display">
                <span>{step.number}</span>
                {step.title}
              </h3>

              <p>{step.description}</p>
            </div>
          ))}

          <div className="required-documents">
            <h4>Required Documents</h4>

            <ul>
              {admissions.requiredDocuments.map((document) => (
                <li key={document}>{document}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="admissions-form-card">
          <h2 className="font-display">Online Enquiry</h2>

          <form className="admissions-form">
            <div className="form-grid">
              <div>
                <label>Student First Name</label>
                <input type="text" className="form-input" />
              </div>

              <div>
                <label>Student Surname</label>
                <input type="text" className="form-input" />
              </div>
            </div>

            <div className="form-grid">
              <div>
                <label>Current Grade</label>

                <select className="form-input">
                  {admissions.grades.map((grade) => (
                    <option key={grade}>{grade}</option>
                  ))}
                </select>
              </div>

              <div>
                <label>Year of Entry</label>

                <select className="form-input">
                  {admissions.entryYears.map((year) => (
                    <option key={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-section">
              <label>Parent Name</label>
              <input type="text" className="form-input" />

              <label>Email Address</label>
              <input type="email" className="form-input" />

              <label>Message / Queries</label>
              <textarea className="form-input textarea" />
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
              Submit Enquiry
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Admissions;
