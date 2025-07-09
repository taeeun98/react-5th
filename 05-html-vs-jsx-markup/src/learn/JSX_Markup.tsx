import * as learnData from "@/data/learn";
import DataBinding from "./DataBinding";
import ConditionalRendering from "./ConditionerRendering";
import ConditionalDisplay from "./ConditionalDisplay";
import RenderList from "./RenderList";

function JSX_Markup() {
  const {
    statusMessage,
    imageType,
    isShowReactImage,
    reactLibrary,
    statusMessageWithId,
  } = learnData;

  return (
    <dl className="descriptionList">
      <DataBinding statusMessage={statusMessage} />
      <ConditionalRendering imageType={imageType} />
      <ConditionalDisplay isShowImage={isShowReactImage} />
      <RenderList reactLibrary={reactLibrary} items={statusMessageWithId} />
    </dl>
  );
}

export default JSX_Markup;
