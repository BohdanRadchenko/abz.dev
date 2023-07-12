import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

export const LoaderWrapper = styled(Stack)(({ theme }) => ( {
  width: "100%",
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  top: 0,
  left: 0,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.loaderSurfaceDefault,
} ))
