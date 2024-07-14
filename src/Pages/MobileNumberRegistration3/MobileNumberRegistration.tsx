import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { InputNumber } from 'primereact/inputnumber';
import { useState } from 'react';
import OTPInput from 'react-otp-input';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ROUTER_CONSTANTS } from '../../Routes/routes.model';
import eventImg from './../../assets/Images/mobile-number-verification.png';
import './MobileNumberRegistration.css';

function MobileNumberRegistration() {
  const [mobileNumber, setMobileNumber] = useState<number | null>(null);
  const [otp, setOtp] = useState<string>('');
  const [isMobileNumberInvalid, setIsMobileNumberInvalid] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleNumberInput = (value: number) => {
    const isInvalid = !value || value.toString().length !== 10;
    setIsMobileNumberInvalid(isInvalid);
    if (!isInvalid) setMobileNumber(value);
  };

  const handleButtonClick = () => {
    if (isMobileNumberInvalid || (isOtpSent && otp.length !== 4)) return;
    if (!isOtpSent) {
      setIsOtpSent(true);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate(ROUTER_CONSTANTS.HOME);
        toast.success('OTP Verified Successfully');
      }, 2000);
    }
  };

  return (
    <Card className="glass-card">
      <div className="mobile-wrapper d-flex flex-column justify-content-center align-items-center text-center">
        <img src={eventImg} className="otp-hero-img" alt="OTP verification hero image" />
        <h3 className="mt-3">OTP Verification</h3>
        <p>Enter phone number to send one-time password</p>
        {isOtpSent ? (
          <OTPInput
            inputStyle="inputStyle"
            containerStyle="otp-container"
            numInputs={4}
            onChange={setOtp}
            value={otp}
            inputType="number"
            renderInput={props => <input {...props} />}
            shouldAutoFocus
          />
        ) : (
          <>
            <InputNumber
              className="text-center"
              inputId="minmax"
              inputClassName={isMobileNumberInvalid ? 'p-invalid' : ''}
              value={mobileNumber}
              useGrouping={false}
              onKeyDown={e => {
                setTimeout(() => {
                  handleNumberInput(+(e.target as HTMLInputElement).value || 0);
                }, 0);
              }}
              maxLength={10}
              placeholder="9689768767"
            />
            {isMobileNumberInvalid && <span className="text-danger mt-1 fw-bold">Number is Invalid</span>}
          </>
        )}
        <Button
          label={isOtpSent ? 'Confirm' : 'Send OTP'}
          icon={loading ? 'pi pi-check' : undefined}
          loading={loading}
          disabled={isMobileNumberInvalid || !mobileNumber || (isOtpSent && otp.length !== 4)}
          onClick={handleButtonClick}
          className="mt-3 rounded btn-sm"
          size="small"
          severity="warning"
        />
      </div>
    </Card>
  );
}

export default MobileNumberRegistration;
