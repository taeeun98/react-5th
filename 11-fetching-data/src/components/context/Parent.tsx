import Child from "./Child";

function Parent() {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
      }}
    >
      <h2>바뀐다 111</h2>
      <Child />
    </div>
  );
}
export default Parent;
