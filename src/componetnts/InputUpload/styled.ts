import { styled } from '@mui/material/styles';
import Typography from "@mui/material/Typography"

interface ILabelStyleProps {
  hasError?: boolean;
}

interface ITittleStyleProps {
  isPlaceholder?: boolean;
}

export const InputButtonStyle = styled('div')({
  width: 83,
  borderStyle: "solid",
  borderTopLeftRadius: 4,
  borderBottomLeftRadius: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

export const InputFieldStyle = styled('div')(({ theme }) => ( {
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 2),
  borderStyle: "solid",
  flexGrow: 1,
  borderTopRightRadius: 4,
  borderBottomRightRadius: 4,
  maxWidth: "calc(100% - 83px)",
} ))


export const LabelStyle = styled(
  'label',
  {
    shouldForwardProp: (prop) => prop !== 'hasError',
  }
)<ILabelStyleProps>(({ theme, hasError = false }) => ( {
  width: "auto",
  maxWidth: "100%",
  minHeight: "54px",
  borderRadius: "4px",
  cursor: "pointer",
  display: "flex",
  position: "relative",
  borderColor: "transparent",

  [`& div:first-of-type`]: {
    borderWidth: `${hasError ? 2 : 1}px`,
    borderColor: `${hasError ? theme.palette.inputBorderCritical : theme.palette.inputBorderSecondary}`,
  },
  [`& div:nth-of-type(2)`]: {
    borderWidth: `${hasError ? 2 : 1}px`,
    borderColor: `${hasError ? theme.palette.inputBorderCritical : theme.palette.inputBorderDefault}`,
    borderLeftWidth: 0,
  },
  "& div:last-child": {
    color: `${hasError ? theme.palette.inputLabelCritical : theme.palette.inputLabelDefault}`,
  }
} ))

export const TittleStyle = styled(
  Typography,
  {
    shouldForwardProp: (prop) => prop !== 'isPlaceholder',
  }
)<ITittleStyleProps>(({ theme, isPlaceholder = true }) => ( {
  color: isPlaceholder ? theme.palette.inputLabelDefault : theme.palette.inputLabelAccent,
} ))

export const HelperTextStyle = styled(Typography)(({ theme }) => ( {
  width: "auto",
  maxWidth: "100%",
  position: "absolute",
  bottom: -3,
  transform: "translateY(100%)",
  margin: "3px 14px 0",
  fontSize: "0.75rem",
  lineHeight: "1.66",
  color: theme.palette.inputHelperColorDefault,
} ))


export const InputFileStyle = styled('input')({
  width: 0,
  height: 0,
  opacity: 0,
  '&::file-selector-button': {
    display: "none"
  }
})
