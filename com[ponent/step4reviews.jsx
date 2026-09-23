function Step4Review({
  name,
  email,
  portfolio,
  track,
  experience,
  selectedTech,
  editStep,
}) {
  const handleSubmit=()=> {
    alert("Onboarding submitted successfully");
  };

  return (
    <div>
      <h2>Review and Submit</h2>

      <h3>Personal Information</h3>

      <p>
        <strong>Name:</strong>{name}
      </p>

      <p>
        <strong>Email:</strong>{email}
      </p>

      <p>
        <strong>Portfolio / GitHub:</strong>{" "}
        {portfolio||"Not Provided"}
      </p>

      <button onClick={()=>editStep(1)}>
        Edit Personal Info
      </button>

      <hr />

      <h3>Preferences</h3>

      <p>
        <strong>Primary Track:</strong>{track}
      </p>

      <p>
        <strong>Experience Level:</strong>{experience}
      </p>

      <button onClick={() => editStep(2)}>
        Edit Preferences
      </button>

      <hr />

      <h3>Tech Stack</h3>

      {selectedTech.length>0?(
        <ul>
          {selectedTech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      ) : (
        <p>No technologies selected</p>
      )}

      <button onClick={()=>editStep(3)}>
        Edit Tech Stack
      </button>

      <br />
      <br />

      <button onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Step4Review;