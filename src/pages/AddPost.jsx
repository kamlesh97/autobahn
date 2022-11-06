import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addPost } from "../redux/action";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
const AddPost = () => {
  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  const history = useHistory();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    let { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost(post));
    history.push("/");
  };
  return (
    <>
      <Button variant="outlined" onClick={() => history.push(`/`)}>
        Go Back
      </Button>
      <div>Add Post</div>
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
            value={post.title}
            name="title"
            onChange={handleChange}
          />
          <br />
          <TextField
            required
            id="outlined-required"
            label="Body"
            type="text"
            value={post.body}
            name="body"
            onChange={handleChange}
          />
          <br />

          <Button variant="outlined" type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </>
  );
};

export default AddPost;
