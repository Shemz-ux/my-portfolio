import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { contactConfig } from './index.copy';

function Contact() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    website: '',
    timeline: ''
  });
  const [selectedBudget, setSelectedBudget] = useState('');
  const [projectDetails, setProjectDetails] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {
    if (step < contactConfig.steps.length) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ budget: selectedBudget, details: projectDetails });
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-[#f3f3f3] pt-16 sm:pt-22 pb-8 px-4 sm:px-8">
      <div className="max-w-[1728px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-8">
          <h1 className="text-black uppercase mb-4">
            {contactConfig.heading}
          </h1>
          <p className="text-p2 text-black uppercase">
            {contactConfig.email}
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-[800px] mx-auto border border-black/20 rounded-[30px] sm:rounded-[40px] md:rounded-[60px] p-6 sm:p-8 md:p-10 relative min-h-[400px] sm:min-h-[500px] flex flex-col mb-12 sm:mb-16 mt-18 sm:mt-12">
          {/* Subheading */}
          {/* <h3 className="text-center text-black/26 uppercase mb-8 text-h4">
            {contactConfig.subheading}
          </h3> */}

          {contactConfig.steps[step - 1]?.fields ? (
            <>
              {/* Form Fields */}
              <div className="flex-1 flex items-center justify-center">
                <div className="w-full max-w-[500px] space-y-12">
                  {contactConfig.steps[step - 1].fields.map((field) => (
                    <input
                      key={field.name}
                      type={field.type}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      placeholder={field.placeholder}
                      className="w-full bg-transparent border-b border-black/20 pb-2 text-black text-p1 placeholder:text-black/20 focus:outline-none focus:border-black transition-colors uppercase"
                    />
                  ))}
                </div>
              </div>
              
              {/* Navigation Buttons */}
              <div className="flex justify-between items-center">
                {step > 1 && (
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-2 sm:gap-3 hover:opacity-60 transition-opacity min-h-[44px] p-2"
                  >
                    <ChevronLeft size={28} strokeWidth={0.5} className="text-black" />
                    <span className="text-p2 text-black uppercase">BACK</span>
                  </button>
                )}
                <button
                  onClick={handleNext}
                  className="flex items-center gap-2 sm:gap-3 hover:opacity-60 transition-opacity ml-auto min-h-[44px] p-2"
                >
                  <span className="text-p2 text-black uppercase">NEXT</span>
                  <ChevronRight size={28} strokeWidth={0.5} className="text-black" />
                </button>
              </div>
            </>
          ) : contactConfig.steps[step - 1]?.showBudget ? (
            <>
              {/* Back Button */}
              <div className="mb-6 sm:mb-8">
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 sm:gap-3 hover:opacity-60 transition-opacity min-h-[44px] p-2"
                >
                  <ChevronLeft size={28} strokeWidth={0.5} className="text-black" />
                  <span className="text-p2 text-black uppercase">BACK</span>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
                {/* Budget Section */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-center text-black/36 uppercase mb-4 sm:mb-6">
                    BUDGET
                  </h3>
                  <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                    {contactConfig.budgetOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => setSelectedBudget(option.value)}
                        className={`border border-black px-4 sm:px-5 py-2 sm:py-1 text-p2 uppercase transition-all min-h-[44px] ${
                          selectedBudget === option.value
                            ? 'bg-black text-white'
                            : 'bg-transparent text-black hover:bg-black/5'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Details Section */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-center text-black/36 uppercase mb-6">
                    PROJECT DETAILS
                  </h3>
                  <textarea
                    value={projectDetails}
                    onChange={(e) => setProjectDetails(e.target.value)}
                    className="flex-1 w-full bg-transparent border-b border-black/20 pb-3 text-black text-p2 placeholder:text-black/20 focus:outline-none focus:border-black transition-colors resize-none"
                    placeholder=""
                  />
                </div>

                {/* Send Button */}
                <div className="text-center mt-6">
                  <button
                    type="submit"
                    className="text-p2 text-black uppercase hover:opacity-60 transition-opacity min-h-[44px] px-4 py-2"
                  >
                    SEND
                  </button>
                </div>
              </form>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Contact;
