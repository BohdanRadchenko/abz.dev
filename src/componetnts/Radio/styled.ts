import { styled } from '@mui/material/styles';

export const BpIcon = styled('span')(({ theme }) => ( {
  borderRadius: '50%',
  width: 20,
  height: 20,
  marginLeft: '1px',
  backgroundColor: 'transparent',
  border: `1px solid ${theme.palette.radioBorderDefault}`,
  position: "relative",
} ));

export const BpCheckedIcon = styled(BpIcon)(({ theme }) => ( {
  borderColor: theme.palette.radioPrimaryColor,
  '&:before': {
    content: '""',
    position: "absolute",
    display: 'block',
    width: 10,
    height: 10,
    borderRadius: "50%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: theme.palette.radioPrimaryColor,
  },
} ));
