export const copyClipboard = () => {

  const copyNode = document.getElementById('pokemon-fake-copy')
    , selection = document.createRange()

  selection.selectNodeContents(copyNode!)
  window.getSelection()?.removeAllRanges()
  window.getSelection()?.addRange(selection)

  document.execCommand('copy')
  window.getSelection()?.removeRange(selection)

}