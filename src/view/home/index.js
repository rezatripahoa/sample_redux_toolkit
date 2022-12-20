import React from "react";
import { Card, CardContent, Container, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAlbum } from "../../redux/slices/album";
import { getAllComment } from "../../redux/slices/comment";

export default function Home() {
  const dispatch = useDispatch();
  const dataAlbum = useSelector((state) => state.album.posts);
  const dataComment = useSelector((state) => state.comment.posts);

  useEffect(() => {
    if (dataAlbum.length < 1) {
      dispatch(getAllAlbum());
    }
    if (dataComment < 1) {
      dispatch(getAllComment());
    }
  }, []);

  return (
    <Container>
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
