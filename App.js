const heading1 = React.createElement("h1", {}, "hello ");
const heading2 = React.createElement("h2", {}, "React");
const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);
//   console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
//console.log(root);
root.render(container);