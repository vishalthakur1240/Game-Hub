import { CircularProgress, CircularProgressLabel, Text, VStack } from "@chakra-ui/react"

interface Props {
    progressNumber: number | string;
    progressLabel: string;
}

const ProgressCardHover = ({progressNumber, progressLabel}: Props) => {
  return (
    <>
    <VStack paddingTop={2}>
        
        <CircularProgress value={progressNumber === "NA" ? "" : progressNumber} color='green.400'>
            < CircularProgressLabel>{progressNumber === "NA" ? "NA" : progressNumber?.toFixed()}</CircularProgressLabel>
        </CircularProgress>
        <Text whiteSpace={"nowrap"}>{progressLabel}</Text>
    </VStack>
    </>
  )
}

export default ProgressCardHover