
const parent = React.createElement("div", {id: "parent"}, [React.createElement("div", {id: "parent2", key:"5"}, "jd")]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);