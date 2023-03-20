import { GrAmex } from "react-icons/gr";
import { SiKlarna } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { SiRevolut } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { CgInstagram } from "react-icons/cg";
import { SiTiktok } from "react-icons/si";
import { CiYoutube } from "react-icons/ci";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div>
          <div className="footer-payment-icons">
            <SiKlarna></SiKlarna>
            <GrAmex></GrAmex>
            <FaCcMastercard></FaCcMastercard>
            <RiVisaLine></RiVisaLine>
            <SiRevolut></SiRevolut>
          </div>

          <p>Swaggish AB Copyright © 2023 | Karlavägen 12, 109 42 Stockholm</p>
        </div>
        <div className="footer-social-icons">
          <SiFacebook></SiFacebook>
          <CgInstagram></CgInstagram>
          <SiTiktok></SiTiktok>
          <CiYoutube></CiYoutube>
        </div>
      </div>
    </div>
  );
}

export default Footer;
