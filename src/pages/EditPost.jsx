import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getSinglePost, updatePost } from "../redux/action";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
const EditPost = () => {
  const { id } = useParams();
  const { post } = useSelector((state) => state.data);
  const [postData, setPostData] = useState({
    title: "",
    body: "",
  });

  const history = useHistory();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    let { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };
  useEffect(() => {
    if (post) {
      setPostData({ ...post });
    }
  }, [post]);

  useEffect(() => {
    dispatch(getSinglePost(id));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePost(postData, id));
    history.push("/");
  };
  return (
    <>
      <Button variant="outlined" onClick={() => history.push(`/`)}>
        Go Back
      </Button>
      <div>Update Post</div>

      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <form onSubmit={handleSubmit}>
          <TextField
            required
            id="outlined-required"
            label="Title"
            type="text"
            value={postData.title || ""}
            name="title"
            onChange={handleChange}
          />
          <br />
          <TextField
            required
            id="outlined-required"
            label="Body"
            type="text"
            value={postData.body || ""}
            name="body"
            onChange={handleChange}
          />
          <br />
          <Button variant="outlined" type="submit">
            Update
          </Button>
        </form>
      </Box>
    </>
  );
};

export default EditPost;
