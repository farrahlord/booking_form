import { FormProvider, useForm, type SubmitHandler } from "react-hook-form";
import Button from "../components/button/Button";
import ProgressBar from "../components/progressBar/ProgressBar";
import InputField from "../components/forms/InputField";
import { useState, type FC, type PropsWithChildren } from "react";
import ButtonGroupField from "../components/forms/ButtonGroupField";
import { useNavigate } from "react-router";
import PageFooter from "../components/pageFooter/PageFooter";

const totalSteps = 3;

const Steps = {
  CONTACT_INFORMATION: 1,
  CONTACT_METHOD_PREFERENCE: 2,
  SUBMIT_CONFIRMATION: 3,
};

const FormTitle: FC<PropsWithChildren> = ({ children }) => (
  <p className="font-bold mb-6 text-left w-full text-[22px]">{children}</p>
);

interface FormValues {
  gpName: string;
  email: string;
  contactNumber: number;
  appointmentFormat: "video" | "audio";
}

const BookingForm = () => {
  const navigate = useNavigate();
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [step, setStep] = useState(Steps.CONTACT_INFORMATION);
  const formMethods = useForm<FormValues>({ mode: "onChange" });

  const {
    handleSubmit,
    formState: { isValid },
    trigger,
  } = formMethods;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setFormSubmitting(true);
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
      console.log(data);
    });

    navigate("/submission");
  };

  const onContinue = async () => {
    if (step === Steps.CONTACT_INFORMATION) {
      const valid = await trigger(["gpName", "email", "contactNumber"]);
      if (valid) {
        setStep(Steps.CONTACT_METHOD_PREFERENCE);
        return;
      }
    }

    if (step === Steps.CONTACT_METHOD_PREFERENCE) {
      await handleSubmit(onSubmit)();
    }
  };

  const onPrevious = () => {
    if (step === Steps.CONTACT_METHOD_PREFERENCE) {
      setStep(Steps.CONTACT_INFORMATION);
      return;
    }
  };

  const progress = (step / totalSteps) * 100;

  return (
    <div className="md:max-w-lg mx-auto md:p-0 p-6">
      <FormProvider {...formMethods}>
        <ProgressBar progressPercentage={progress} className="mb-6 md:mt-10" />
        <form className="flex flex-col md:min-w-lg w-full">
          {step === Steps.CONTACT_INFORMATION && (
            <>
              <FormTitle>
                Please confirm or add to the below GP Contact Details
              </FormTitle>
              <div className="flex flex-col gap-6">
                <InputField
                  name="gpName"
                  label="GP Name"
                  type="text"
                  required
                />

                <InputField name="email" label="Email" type="email" required />

                <InputField
                  name="contactNumber"
                  label="Contact Number"
                  type="tel"
                />
              </div>
            </>
          )}

          {step === Steps.CONTACT_METHOD_PREFERENCE && (
            <>
              <FormTitle>Select your prefered appointment format</FormTitle>

              <ButtonGroupField
                name="appointmentFormat"
                required
                options={[
                  { label: "Video", value: "video" },
                  { label: "Audio", value: "audio" },
                ]}
              />
            </>
          )}

          <div className="flex flex-col md:flex-row w-full p-6 md:p-0 md:justify-end mt-4 bottom-0 left-0 absolute md:relative">
            <div className="md:hidden block">
              <PageFooter />
            </div>
            <span className="flex w-full md:w-auto gap-6">
              <Button variant="secondary" onClick={onPrevious} className="grow">
                Previous
              </Button>

              <Button
                variant="primary"
                disabled={!isValid || formSubmitting}
                onClick={onContinue}
                className="grow"
              >
                {formSubmitting ? "Submitting..." : "Continue"}
              </Button>
            </span>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default BookingForm;
