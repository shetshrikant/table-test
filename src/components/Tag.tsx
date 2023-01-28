import React from 'react';

export enum TAG_TYPE {
  primary = "primary",
  secondary = "secondary",
  tertiary = "tertiary",
  danger = "danger",
  info = "info",
}

function Tag({label, type = TAG_TYPE.primary, className = ""}: { label: string, type?: keyof typeof TAG_TYPE, className?: string }) {
  let typeClass = "";
  switch (type) {
    case TAG_TYPE.secondary:
      typeClass = "bg-[#99CCFF] text-[#004D99]";
      break;
    case TAG_TYPE.tertiary:
      typeClass = "bg-[#66B3FF] text-[#003366]";
      break;
    case TAG_TYPE.danger:
      typeClass = "bg-red-300 text-red-700";
      break;
    case TAG_TYPE.info:
      typeClass = "bg-[#F2F2F2] text-[#2E2E2E]";
      break;
    case TAG_TYPE.primary:
    default:
      typeClass = "bg-[#CCE6FF] text-[#003366]";
      break;
  }
  return (
    <span className={`text-[12px] leading-[16px] py-[2px] px-[8px] rounded-full ${typeClass} ${className}`}>{label}</span>
  );
}

export default Tag;
