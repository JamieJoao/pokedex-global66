export const copyClipboard = (textToCopy: string) => {
  navigator.clipboard.writeText(textToCopy)
}