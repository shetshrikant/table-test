import React from 'react';
import Tag, {TAG_TYPE} from "./Tag";

const getTagTypeByIndex = (index: number) => {
  if(index === 0){
    return TAG_TYPE.primary
  } else if (index === 1) {
    return TAG_TYPE.secondary
  } else if (index === 2) {
    return TAG_TYPE.tertiary
  } else {
    return TAG_TYPE.primary
  }
}

function Tags({labels, noOfLabelsToShow = 3}: {labels: string[], noOfLabelsToShow?: number}) {
  return (
    <div className={"flex gap-1.5"}>
      {labels.slice(0, noOfLabelsToShow).map((label, index) => {
        return (
          <Tag key={label} label={label} type={getTagTypeByIndex(index)} />
        )
      })}
      {labels.length > noOfLabelsToShow && (
        <Tag label={`+ ${labels.length - noOfLabelsToShow}`} type={"info"} />
      )}
    </div>
  );
}

export default Tags;
