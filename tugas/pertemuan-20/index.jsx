import React, { useState } from "react";

function App() {
  const [hello, setHello] = useState("Selamat Datang");
  const [title, setTitle] = useState("Hello World");
  const [students, setStudents] = useState([]);

  return (
    <>
      {/* Ini komentar di dalam JSX */}
      <h2>{title}</h2>
      {hello}
      <div>
        {students.map((item, index) => (
          <p key={index}>{item.fullName}</p>
        ))}
      </div>
    </>
  );
}

export default App;
