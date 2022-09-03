import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import "./theme.css";
import { Button, FormControl, TextField } from "@mui/material";
import onam3 from "../images/onam3.png";
import { useParams } from "react-router";
import { useState } from "react";

const HappyOnam = () => {
  const { myname, friend } = useParams();
  const [mname, setMname] = useState("");
  const [fname, setFname] = useState("");

  const onchangeMyName = (e) => setMname(e.target.value);
  const onchangeFriendName = (e) => setFname(e.target.value);

  const onShare = () => {
    console.log(mname, fname);
  };

  return (
    <Grid container spacing={2} padding={1}>
      <Grid xs={12} padding={2} alignItems="center">
        <div>
          <div className="ndiv">
            <h1>Happy Onam</h1>

            <h2>Dear {friend}, wish you a very happy onam .</h2>

            <h3>
              <b>{myname}</b>
            </h3>
            <img style={{ maxWidth: "300px" }} src={onam3} alt="" />
          </div>
        </div>

        <div className="ndiv2">
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

            <a
              target="_blank"
              href={
                "https://web.whatsapp.com/send?text=" +
                `https://very-happy-onam.web.app/${mname}/${fname}`
              }
            >
              <Button
                style={{ marginTop: "10px" }}
                variant="outlined"
                onClick={onShare}
              >
                SHARE
              </Button>
            </a>
          </FormControl>
        </div>
      </Grid>
    </Grid>
  );
};

export default HappyOnam;
