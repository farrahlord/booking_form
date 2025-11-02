import Alert from "../components/alert/Alert";
import Button from "../components/button/Button";
import confirmationIcon from "../assets/confirmationIcon.svg";
import { useNavigate } from "react-router";

const SubmissionPage = () => {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="flex flex-col gap-6 w-lg">
        <img
          src={confirmationIcon}
          alt="Powered by Spectrum"
          className="mx-auto"
        />
        <h1 className="font-bold text-xl text-center">Booking confirmed !</h1>
        <p className="text-md text-center">
          You should soon receive an email confirming your booking, followed by
          to your registered email address.
        </p>
        <p className="text-md">
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
            minutes before your appointment to avoid missing your session"
          </p>
        </Alert>
        <Button variant="primary" disabled={false} onClick={handleReturnHome}>
          Return to Home
        </Button>
      </div>
    </>
  );
};
export default SubmissionPage;
