import ReCAPTCHA from "react-google-recaptcha";

interface Props {
  onChange: (value: string | null) => void;
}

const Recaptcha = ({ onChange }: Props) => {
  return (
    <ReCAPTCHA
      sitekey="6LcH69QqAAAAAB2bF7Gfhq73kOVKm1lt7w5f0ZWc"
      onChange={onChange}
      className="recaptcha"
    />
  );
};

export default Recaptcha;
