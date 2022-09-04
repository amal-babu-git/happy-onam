import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React, { useRef } from "react";
import "./theme.css";
import { Button, FormControl, TextField } from "@mui/material";
import onam3 from "../images/onam3.png";
import { useParams } from "react-router";
import { useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { motion } from "framer-motion";

const HappyOnam = () => {
  const { myname, friend } = useParams();
  const [mname, setMname] = useState("");
  const [fname, setFname] = useState("");
  const [rotate, setRotate] = useState(false);
  const constrainRef = useRef(null);
  const constrainRef1 = useRef(null);

  const onchangeMyName = (e) => setMname(e.target.value.trim());
  const onchangeFriendName = (e) => setFname(e.target.value.trim());

  const onShare = () => {
    console.log(mname, fname);
  };

  return (
    <Grid container spacing={2} padding={1} ref={constrainRef}>
      <Grid xs={12} padding={2} alignItems="center">
        <div ref={constrainRef1}>
          <div className="ndiv">
            <motion.h1
              animate={{ rotate: rotate ? 360 : 0, scale: 1 }}
              onClick={() => setRotate(!rotate)}
              initial={{ scale: 0 }}
              drag
              dragConstraints={constrainRef1}
              transition={{ type: "tween", duration: 0.3 }}
            >
              Happy Onam
            </motion.h1>

            <motion.h2
              animate={{ rotate: rotate ? 360 : 0, scale: 1 }}
              onClick={() => setRotate(!rotate)}
              initial={{ scale: 0 }}
              drag
              dragConstraints={constrainRef1}
              transition={{ type: "tween", duration: 0.3 }}
            >
              Dear {friend}, wish you a very happy onam .
            </motion.h2>

            <motion.h3
              animate={{ rotate: rotate ? 360 : 0, scale: 1 }}
              onClick={() => setRotate(!rotate)}
              initial={{ scale: 0 }}
              drag
              dragConstraints={constrainRef1}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <b>By {myname}</b>
            </motion.h3>
            <motion.div>
              <motion.img
                animate={{ rotate: rotate ? 360 : 0, scale: 1 }}
                // onClick={() => setRotate(!rotate)}
                initial={{ scale: 0 }}
                drag
                dragConstraints={constrainRef1}
                transition={{ type: "keyframes", duration: 0.3 }}
                style={{ maxWidth: "300px" }}
                src={onam3}
                alt=""
              />
            </motion.div>
          </div>
        </div>

        <motion.div className="ndiv2" drag dragConstraints={constrainRef}>
          <FormControl style={{ padding: "5px", margin: "2px" }}>
            <TextField
              variant="standard"
              label="Your name"
              value={mname}
              onChange={onchangeMyName}
            />
            <TextField
              variant="standard"
              label="Friend name (optional)"
              value={fname}
              onChange={onchangeFriendName}
            />

            <div>
              <a
                aria-label="Chat on WhatsApp"
                href={
                  "https://wa.me/?text=" +
                  `https://very-happy-onam.web.app/${fname}/${mname}/`
                }
              >
                <Button
                  style={{ marginTop: "10px" }}
                  variant="outlined"
                  onClick={onShare}
                  type="submit"
                >
                  <WhatsAppIcon /> Share
                </Button>
              </a>
            </div>
          </FormControl>
        </motion.div>
      </Grid>
    </Grid>
  );
};

export default HappyOnam;
