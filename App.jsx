import { useEffect, useState } from "react";

import Step1PersonalInfo from "./components/step1personalinfo";
import Step2Preferences from "./components/step2preferences";
import Step3TechStack from "./components/step3techstack";
import Step4Review from "./components/step4reviews";

function App() {
  const [step, setStep]=useState(1);

  const [formData, setFormData]=useState(() => {
    const savedData = localStorage.getItem("onboardingDraft");

    if (savedData) {
      return JSON.parse(savedData);
    }

    return {
      name:"",
      email:"",
      portfolio:"",
      track:"",
      experience:"",
      selectedTech: [],
    };
  });

  const [draftSaved, setDraftSaved] = useState(true);

  useEffect(() => {
    const timer=setTimeout(()=>{
      localStorage.setItem(
        "onboardingDraft",
        JSON.stringify(formData)
      );

      setDraftSaved(true);
    }, 500);

    return ()=>clearTimeout(timer);
  }, [formData]);

  const updateData=(data) => {
    setFormData((previousData)=>({
      ...previousData,
      ...data,
    }));

    setDraftSaved(false);
  };

  return (
    <div className="app">
      <h1>Onboarding Wizard</h1>

      <p className="draft-status">
  {draftSaved ? "✓ Draft Saved" : "Saving draft..."}
</p>

      <div className="steps">
        <span className={step===1? "active" : ""}>
          1. Personal Info
        </span>

        <span className={step===2 ? "active" : ""}>
          2. Preferences
        </span>

        <span className={step===3 ? "active" : ""}>
          3. Tech Stack
        </span>

        <span className={step===4 ? "active" : ""}>
          4. Review
        </span>
      </div>

      {step===1 && (
        <Step1PersonalInfo
          formData={formData}
          updateData={updateData}
          nextStep={() => setStep(2)}
        />
      )}

      {step===2 && (
        <Step2Preferences
          formData={formData}
          updateData={updateData}
          nextStep={() => setStep(3)}
          previousStep={() => setStep(1)}
        />
      )}

      {step===3 && (
        <Step3TechStack
          formData={formData}
          updateData={updateData}
          nextStep={()=> setStep(4)}
          previousStep={()=> setStep(2)}
        />
      )}

      {step===4 && (
        <Step4Review
          name={formData.name}
          email={formData.email}
          portfolio={formData.portfolio}
          track={formData.track}
          experience={formData.experience}
          selectedTech={formData.selectedTech}
          editStep={setStep}
        />
      )}
    </div>
  );
}

export default App;