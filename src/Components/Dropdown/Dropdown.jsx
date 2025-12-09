import Style from "./dropdown.module.css";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";
import { useEffect, useRef } from "react";

export default function Dropdown({
  dropDownOpen,
  setDropDownOpen,
  dropType,
  setDropType,
  compareData,
  data,
  defaultMessage,
}) {
  const dropdownRef = useRef(null);

  function dropdownHandler(data) {
    setDropDownOpen((prev) => (prev === data ? null : data));
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropDownOpen(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setDropDownOpen]);

  return (
    <div className={Style.dropDown} ref={dropdownRef}>
      <div
        onClick={() => dropdownHandler(compareData)}
        className={Style.dropDownButtonBox}
      >
        <span>{dropType || defaultMessage}</span>
        {dropDownOpen === compareData ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      <div
        className={`${Style.dropDownContent} ${
          dropDownOpen === compareData ? Style.dropDownContentShow : ""
        }`}
      >
        <ul className={Style.dropDownList}>
          {data?.length > 0 &&
            data.map((list) => {
              return (
                <li
                  className={Style.dropDownItem}
                  onClick={() => {
                    setDropDownOpen(null);
                    setDropType(list.label);
                  }}
                >
                  {list.label}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
