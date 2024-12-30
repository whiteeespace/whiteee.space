import { motion } from "framer-motion";

import "./App.css";
import Blob from "./shared-component/Blob";

function App() {
  return (
    <div className="container">
      <Blob className="logo">whiteee space</Blob>
      <div className="textContainer">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "linear", duration: 1, delay: 0.5 }}
          className="subtitle"
        >
          a design space based in montreal
        </motion.p>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "linear", duration: 2 }}
          className="title"
        >
          whiteee space
        </motion.h1>
      </div>
      <motion.a
        whileHover={{ scale: 1.2 }}
        transition={{ ease: "linear", duration: 0.5 }}
        href={"mailto:info@whiteee.space&subject=Saying hi!"}
        className="email"
      >
        info@whiteee.space
      </motion.a>
    </div>
  );
}

export default App;
