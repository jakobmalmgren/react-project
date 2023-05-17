import { GrAmex } from "react-icons/gr";
import { SiKlarna } from "react-icons/si";
import { FaCcMastercard } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { SiRevolut } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { CgInstagram } from "react-icons/cg";
import { SiTiktok } from "react-icons/si";
import { CiYoutube } from "react-icons/ci";
import css from "./FooterSection.module.css";

function FooterSection() {
  return (
    <div>
      <div className={css.footer}>
        <div>
          <div className={css.footerPaymentIcons}>
            <SiKlarna></SiKlarna>
            <GrAmex></GrAmex>
            <FaCcMastercard></FaCcMastercard>
            <RiVisaLine></RiVisaLine>
            <SiRevolut></SiRevolut>
          </div>

          <p>
            Fashion4You Copyright © 2023 | 152 Beach Avenue Brooklyn, NY 11206
          </p>
        </div>
        <div className={css.footerSocialIcons}>
          <SiFacebook></SiFacebook>
          <CgInstagram></CgInstagram>
          <SiTiktok></SiTiktok>
          <CiYoutube></CiYoutube>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
