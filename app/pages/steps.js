"use client"
import React, { useState } from 'react';
import StepOne from '../components/StepsOne';
import StepTwo from '../components/StepTwo/Steptwo';
import StepThree from '../components/StepThree/StepThree';

const Steps = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleTalkClick = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log('Hello');
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return <StepThree />;
      default:
        return null;
    }
  };

  return (
    <div className='h-screen w-full bg-bg_color'>
      {renderStep()}
      <div className='w-full px-1 pb-5 md:pb-10 flex flex-col items-center justify-center gap-4 md:gap-10 absolute bottom-0'>
        {currentStep < 3 && (
          <button
            onClick={handleNext}
            className='rounded-full bg-green hover:bg-custom_color_400 font-medium text-bg_color max-w-[400px] w-full p-3.5 text-[18px]'
          >
            Next
          </button>
        )}
        <div className='flex items-center gap-2 pagination'>
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`h-2 w-2 rounded-full ${step === currentStep ? 'bg-green' : 'bg-custom_color_700'
                }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Steps;
