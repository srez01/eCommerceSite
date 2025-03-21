import React, { useState } from "react";
import FemaleGender from "./FemaleGender";
import MaleGender from "./MaleGender";

const GenderToggler = () => {
  const [isGender, setIsGender] = useState(true);

  const SwitchToFemale = () => setIsGender(true);
  const SwitchToMale = () => setIsGender(false);
  return (
    <>
      {isGender ? (
        <FemaleGender onSwitchToMale={SwitchToMale} />
      ) : (
        <MaleGender onSwitchToFemale={SwitchToFemale} />
      )}
    </>
  );
};

export default GenderToggler;

// to change the gender theme to load producta based on the gender
