import Image from "next/image";
import s from "./Dashboard.module.scss";
import information from "../assets/img/home.jpg";
import agreement from "../assets/img/user-check-2.png";
import bankDetails from "../assets/img/landmark.png";
import methods from "../assets/img/credit-card.png";
import moveRight from "../assets/img/move-right.png";
import search from "../assets/img/search.png";

import cn from "classnames";
import { DatePicker } from "antd";

export default function DataPicker() {
  return (
    <>
      <div className={s.container}>
        <div className={cn(s.element, s.active)}>
          <Image className={s.image} src={information} alt="" />
          <span>Tenancy Information</span>
        </div>
        <div className={s.element}>
          <Image className={s.image} src={agreement} alt="" />
          <span>Tenancy Agreement</span>
        </div>
        <div className={s.element}>
          <Image className={s.image} src={bankDetails} alt="" />
          <span>Recipient Bank Details</span>
        </div>
        <div className={s.element}>
          <Image className={s.image} src={methods} alt="" />
          <span>Payment Methods</span>
        </div>
      </div>

      <div className={s.tenancyInformationForm}>
        <div className={s.title}>Tenancy Information</div>
        <div className={s.element}>
          <input className={s.inputAddress} type="text" placeholder="Address" />
          <Image className={s.search} src={search} alt="" />

          <div className={s.containerDatePick}>
            <DatePicker className={s.date} placeholder="MM.DD.YYYY" />
            <Image src={moveRight} alt="" />
            <DatePicker className={s.date} placeholder="MM.DD.YYYY" />
          </div>
          <div>
            <input
              type="text"
              className={s.rentalAmount}
              placeholder="Rental Amount (Monthly)"
            />
          </div>
        </div>
        <div>
          <button className={s.continue}>Continue</button>
        </div>
      </div>
    </>
  );
}
