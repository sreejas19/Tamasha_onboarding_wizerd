function Step3TechStack({
  formData,
  updateData,
  nextStep,
  previousStep,
}) {
  const technologies = {
    Frontend: [
      "React",
      "Vue",
      "TypeScript",
      "CSS Modules",
    ],

    Backend: [
      "Node.js",
      "Python/Django",
      "PostgreSQL",
      "Redis",
    ],

    Fullstack: [
      "React",
      "Node.js",
      "PostgreSQL",
    ],

    "UI/UX Design": [
      "Figma",
      "Storybook",
      "Design Systems",
    ],
  };

  const techList = technologies[formData.track] || [];

  const handleChange = (tech) => {
    let updatedTech;

    if (formData.selectedTech.includes(tech)) {
      updatedTech = formData.selectedTech.filter(
        (item) => item !== tech
      );
    } else {
      updatedTech = [
        ...formData.selectedTech,
        tech,
      ];
    }

    updateData({
      selectedTech: updatedTech,
    });
  };

  const handleNext = () => {
    if (formData.selectedTech.length === 0) {
      alert("Please select at least one technology");
      return;
    }

    nextStep();
  };

  return (
    <div>
      <h2>Tech Stack</h2>

      <p>
        Technologies for: <strong>{formData.track}</strong>
      </p>

      {techList.map((tech) => (
        <div key={tech}>
          <label>
            <input
              type="checkbox"
              checked={formData.selectedTech.includes(tech)}
              onChange={() => handleChange(tech)}
            />

            {" "}
            {tech}
          </label>
        </div>
      ))}

      <br />

      <button onClick={previousStep}>Back</button>{" "}

      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Step3TechStack;