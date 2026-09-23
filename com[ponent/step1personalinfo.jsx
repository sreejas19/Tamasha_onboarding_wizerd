function Step1PersonalInfo({
  formData,
  updateData,
  nextStep,
}) {
  const handleNext = () => {
    if (formData.name.trim()==="") {
      alert("Name is required");
      return;
    }

    if (formData.email.trim()==="") {
      alert("Email is required");
      return;
    }

    if (!formData.email.includes("@")) {
      alert("Enter a valid email");
      return;
    }

    nextStep();
  };

  return (
    <div>
      <h2>Personal Information</h2>

      <label>Name</label>
      <br />

      <input
        type="text"
        value={formData.name}
        onChange={(e)=>
          updateData({ name: e.target.value })
        }
      />

      <br />
      <br />

      <label>Email</label>
      <br />

      <input
        type="email"
        value={formData.email}
        onChange={(e) =>
          updateData({ email: e.target.value })
        }
      />

      <br />
      <br />

      <label>Portfolio / GitHub URL</label>
      <br />

      <input
        type="url"
        value={formData.portfolio}
        onChange={(e) =>
          updateData({ portfolio: e.target.value })
        }
      />

      <br />
      <br />

      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Step1PersonalInfo;