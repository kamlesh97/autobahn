import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { deletePost, loadPosts } from "../redux/action";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Typography from "@mui/material/Typography";

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(loadPosts());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("delete")) {
      dispatch(deletePost(id));
    }
  };
  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<AddCircleOutlineIcon />}
        onClick={() => history.push("/addpost")}
      >
        Add Post
      </Button>
      {posts &&
        posts.map((el) => (
          <div key={el.id} className="listContainer">
            <List
              mx={{
                display: "flex",
                width: "100%",
                maxWidth: 480,
                bgcolor: "background.paper",
              }}
            >
              <ListItem
                alignItems="flex-start"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  bgcolor: "background.paper",
                }}
              >
                <ListItemText
                  primary={el.title}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Post
                      </Typography>
                      {" - "}
                      {el.body}
                    </React.Fragment>
                  }
                />
                <div>
                  <Button
                    variant="outlined"
                    startIcon={<EditIcon />}
                    onClick={() => history.push(`/editpost/${el.id}`)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    onClick={() => handleDelete(el.id)}
                  >
                    Delete
                  </Button>
                </div>
              </ListItem>

              <Divider variant="inset" component="li" />
            </List>
          </div>
        ))}
    </div>
  );
};

export default Home;
