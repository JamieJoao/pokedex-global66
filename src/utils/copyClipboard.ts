export const copyClipboard = async (textToCopy: string) => {
  return await navigator.clipboard.writeText(textToCopy)
}