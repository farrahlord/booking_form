import Alert from "../components/alert/Alert";
import Button from "../components/button/Button";
import { useNavigate } from "react-router";
import PageFooter from "../components/pageFooter/PageFooter";
import ConfirmationIcon from "../components/icons/confirmationIcon";

const SubmissionPage = () => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex flex-col gap-6 sm:max-w-lg w-full p-6">
        <ConfirmationIcon className="mx-auto" />

        <h1 className="font-bold text-xl text-center">Booking confirmed !</h1>
        <p className="text-md text-center">
          You should soon receive an email confirming your booking, followed by
          to your registered email address.
        </p>
        <p className="text-md text-center">
          To attend or cancel your session, go to the bookingarea by clicking
          the calendar icon in the top navigation
        </p>

        <Alert title="Important Note">
          <p className="text-sm">
            For both audio appointments and video appointments, you will need to
            return to the portal to join your session at the scheduled time.
          </p>
          <p className="text-sm">
            Clinicians do not call users directly. Ensure you log in a few
            minutes before your appointment to avoid missing your session
          </p>
        </Alert>

        <div className="flex flex-col md:flex-row w-full p-6 md:p-0 md:justify-end mt-4 bottom-0 left-0 absolute md:relative">
          <div className="md:hidden block">
            <PageFooter />
          </div>
          <Button variant="primary" disabled={false} onClick={handleReturnHome}>
            Return to Home
          </Button>
        </div>
      </div>
    </>
  );
};
export default SubmissionPage;
