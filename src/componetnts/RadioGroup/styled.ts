import { styled } from '@mui/material/styles';
import FormLabel from '@mui/material/FormLabel';

export const FormLabelTitleStyle = styled(FormLabel)(({ theme }) => ( {
  marginBottom: 11,
  color: `${theme.palette.inputLabelAccent} !important`,
} ))
