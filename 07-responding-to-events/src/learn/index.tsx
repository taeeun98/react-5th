import NavContents from "./NavContents"
import ScrollDown from "./ScrollDown"
import View from "./View"




function Learn() {
  return (
    <div className="Learn">
      <NavContents />
      <View.RespondingToEvents />
      <ScrollDown />
    </div>
  )
}
export default Learn