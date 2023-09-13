import { motion, useAnimate } from "framer-motion";

import "./App.css";
import { useCallback, useEffect, useState } from "react";

function App() {
  const [scope, animate] = useAnimate();
  const [startRepeatAnimation, setStartRepeatAnimation] = useState(true);

  const handleHoverStart = useCallback(() => {
    animate(
      scope.current,
      { scale: [1], width: [36, 180], borderRadius: [50, 20] },
      { ease: "easeInOut", duration: 0.5 }
    );
    animate(
      "div",
      { opacity: [0, 0, 0, 1] },
      { ease: "easeInOut", duration: 0.5 }
    );
  }, [animate, scope]);

  const handleHoverEnd = useCallback(async () => {
    animate(
      scope.current,
      { scale: [1], width: [180, 36], borderRadius: [20, 50] },
      { ease: "easeInOut", duration: 0.5 }
    );
    animate(
      "div",
      { opacity: [1, 0, 0, 0] },
      { ease: "easeInOut", duration: 0.5 }
    ).then(() => {
      setStartRepeatAnimation(true);
    });
  }, [animate, scope]);

  useEffect(() => {
    if (startRepeatAnimation) {
      animate("div", { opacity: [0] });
      animate(
        scope.current,
        { scale: [1, 1, 1, 1.2, 1, 1, 1], width: [36], borderRadius: [50] },
        { ease: "easeInOut", repeat: Infinity, duration: 2 }
      );
      setStartRepeatAnimation(false);
    }
  }, [animate, scope, startRepeatAnimation]);

  return (
    <div className="container">
      <div
        ref={scope}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
        className="dotLogo"
      >
        <div className="logoText" style={{ opacity: 0, marginRight: 15 }}>
          whiteee space
        </div>
      </div>
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
