import Dropdown from "../Dropdown/Dropdown";
import Style from "./search.module.css";
import { propertyTypeDropdown } from "../../Data";
import { locationDropdown } from "../../Data";
import { priceRangeDropdown } from "../../Data";
import { bedroomDropdown } from "../../Data";

import { useState } from "react";

export default function Search() {
  const [dropDownOpen, setDropDownOpen] = useState(null);
  const [propertyType, setPropertyType] = useState("");
  const [locationType, setLocationType] = useState("");
  const [priceType, setPriceType] = useState("");
  const [bedType, setBedType] = useState("");

  return (
    <div className={Style.searchBox}>
      <Dropdown
        compareData="type"
        defaultMessage="Type"
        dropDownOpen={dropDownOpen}
        setDropDownOpen={setDropDownOpen}
        dropType={propertyType}
        setDropType={setPropertyType}
        data={propertyTypeDropdown}
      />

      <Dropdown
        compareData="location"
        defaultMessage="Location"
        dropDownOpen={dropDownOpen}
        setDropDownOpen={setDropDownOpen}
        dropType={locationType}
        setDropType={setLocationType}
        data={locationDropdown}
      />

      <Dropdown
        compareData="price"
        defaultMessage="price"
        dropDownOpen={dropDownOpen}
        setDropDownOpen={setDropDownOpen}
        dropType={priceType}
        setDropType={setPriceType}
        data={priceRangeDropdown}
      />

      <Dropdown
        compareData="bed"
        defaultMessage="Bed"
        dropDownOpen={dropDownOpen}
        setDropDownOpen={setDropDownOpen}
        dropType={bedType}
        setDropType={setBedType}
        data={bedroomDropdown}
      />

      <button className={Style.searchButtton}>Search</button>
    </div>
  );
}
