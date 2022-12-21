import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAlbum } from "../../redux/slices/album";
import { getAllComment } from "../../redux/slices/comment";
import axios from "axios";

export default function Home() {
  const dispatch = useDispatch();
  const dataAlbum = useSelector((state) => state.album.posts);
  const dataComment = useSelector((state) => state.comment.posts);
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    if (dataAlbum.length < 1) {
      dispatch(getAllAlbum());
    }
    if (dataComment < 1) {
      dispatch(getAllComment());
    }

    fetchingTodos();
  }, []);

  const fetchingTodos = async () => {
    setLoading(true);
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    if (response) {
      setTodos(response.data);
    }
    setLoading(false);
  };

  return (
    <Container>
      <Typography>Data Todos</Typography>
      <Stack direction="row" flexWrap="wrap">
        {(loading ? Array.from(new Array(4)) : todos).map((val, i) => (
          <Card
            key={i}
            sx={{
              width: 250,
              m: 1,
              display: "flex",
              flexDirection: "column",
              height: 150,
            }}
          >
            {val ? (
              <>
                <CardContent sx={{ flex: 1 }}>
                  <Typography>
                    {val.id}. {val.title}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "flex-end" }}>
                  <Button
                    variant="contained"
                    color={val.completed ? "info" : "error"}
                  >
                    {val.completed ? "Completed" : "Not Completed"}
                  </Button>
                </CardActions>
              </>
            ) : (
              <Box sx={{ pt: 0.5, flex: 1 }}>
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            )}
          </Card>
        ))}
      </Stack>

      <Typography>Data Album</Typography>
      <Stack direction="row" flexWrap="wrap">
        {dataAlbum.map((val, i) => (
          <Card key={i} sx={{ width: 250, m: 1 }}>
            <CardContent>
              <Typography>
                {val.id}. {val.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>

      <Typography>Data Comment</Typography>
      <Stack direction="row" flexWrap="wrap">
        {dataComment.map((val, i) => (
          <Card key={i} sx={{ width: 250, m: 1 }}>
            <CardContent>
              <Typography>
                {val.id}. {val.name}
              </Typography>
              <Typography variant="subtitle2">{val.email}</Typography>
              <Typography>{val.body}</Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Container>
  );
}
