import { useState, useEffect, useRef } from "react";
import "./App.css";
import { upload } from "./api";

function App() {
  const ref = useRef(null);
  const [result, setResult] = useState("");
  const [file, setFile] = useState(null);
  useEffect(() => {
    const uploadFile = async () => {
      const data = new FormData();
      data.append("file", file);
      data.append("name", file.name);
      const res = await upload(data);
      setResult(res.url);
    };
    file && uploadFile();
  }, [file]);
  return (
    <div className="container">
      <img src={"./image1.webp"} className="img" />
      <div className="wrapper">
        <h1>Simple file sharing!</h1>
        <p>Upload and share the download link.</p>

        <button onClick={() => ref.current.click()}>Upload</button>
        <input
          type="file"
          ref={ref}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />

        <a href={result}>{result}</a>
      </div>
    </div>
  );
}

export default App;
