function Step2Preferences({
  formData,
  updateData,
  nextStep,
  previousStep,
}) {
  const handleNext = () => {
    if (formData.track === "") {
      alert("Please select a track");
      return;
    }

    if (formData.experience === "") {
      alert("Please select your experience level");
      return;
    }

    nextStep();
  };

  return (
    <div>
      <h2>Preferences</h2>

      <label>Primary Track</label>
      <br />

      <select
        value={formData.track}
        onChange={(e) =>
          updateData({
            track: e.target.value,
            selectedTech: [],
          })
        }
      >
        <option value="">Select Track</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Fullstack">Full Stack</option>
        <option value="UI/UX Design">UI/UX Design</option>
      </select>

      <br />
      <br />

      <label>Experience Level</label>
      <br />

      <select
        value={formData.experience}
        onChange={(e) =>
          updateData({
            experience: e.target.value,
          })
        }
      >
        <option value="">Select Experience</option>
        <option value="Junior">Junior</option>
        <option value="Mid">Mid</option>
        <option value="Senior">Senior</option>
      </select>

      <br />
      <br />

      <button onClick={previousStep}>Back</button>{" "}
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Step2Preferences;