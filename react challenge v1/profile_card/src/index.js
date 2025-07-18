import React from "react";
import ReactDom from "react-dom/client";

// data how is use data object i think data need dif_file
const data = {
  img: {
    src: "https://images.unsplash.com/photo-1597651711127-600d0c2e78b0?q=80&w=914&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "photo",
    width: 320,
    height: 180,
    style: { objectFit: "cover", borderRadius: "8px" },
  },

  usaeName: "Usama",
  description:
    "Hi, I'm Usama. I'm a passionate web developer who loves building interactive and user-friendly applications with React.",

  javaScript: {
    width: "max-content",
    background: "#f7df1e",
    padding: 9,
    borderRadius: "5px",
    margin: 0,
  },
  React: {
    width: "max-content",
    background: "#61dafb",
    padding: 9,
    borderRadius: "5px",
    margin: 0,
  },
  CSS: {
    width: "max-content",
    background: "#2965f1",
    padding: 9,
    borderRadius: "5px",
    margin: 0,
  },
  NodeJS: {
    width: "max-content",
    background: "#68a063",
    padding: 9,
    borderRadius: "5px",
    margin: 0,
  },
};
// v2
const skills = [
  { skill: "JavaScript", level: "advenced", coler: "#f7df1e" },
  { skill: "React ", level: "intermediate", coler: "#61dafb" },
  { skill: "CSS ", level: "advenced", coler: "#2965f1" },
  { skill: "Node.js ", level: "beginner", coler: "#68a063" },
];

//////////////////////////////////////////////
function App() {
  return (
    <div>
      <h1>hello word</h1>
      <Main />
    </div>
  );
}
function Main() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          border: "2px solid #ccc",
          borderRadius: "12px",
          padding: "14px",
          background: "#fafafa",
          width: 320,
        }}
      >
        <img
          src={data.img.src}
          alt={data.img.alt}
          width={data.img.width}
          height={data.img.height}
          style={data.img.style}
        />
        <h1 styal={{}}>{data.usaeName}</h1>
        <p>{data.description}</p>
        <Skills />
      </div>
    </div>
  );
}

function Skills() {
  // v2
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
      {skills.map((skill) => (
        <SkillsData
          skillName={skill.skill}
          level={skill.level}
          coler={skill.coler}
          key={skill.skill}
        />
      ))}
      {/* <SkillsData title={<p style={data.javaScript}>javaScript 💛</p>} />
      <SkillsData title={<p style={data.React}>React ⚛️</p>} />
      <SkillsData title={<p style={data.CSS}>CSS 🎨</p>} />
      <SkillsData title={<p style={data.NodeJS}>Node.js 🌳</p>} /> */}
    </div>
  );
}
// v-2
function SkillsData({ skillName, level, coler }) {
  return (
    <div style={{ backgroundColor: coler }}>
      <span>{skillName}</span>
      <span>
        {level === "advenced" && "👨‍🎓"}
        {level === "intermediate" && "🥷"}
        {level === "beginner" && "👍"}
      </span>
    </div>
  );
}
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
