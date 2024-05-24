export function formatText(text: string, limitLength = 40) {
  if (!text) {
    return text
  }

  const words = text.split(' ')

  const limitedWords = words.slice(0, limitLength).join(' ')

  const finalText = words.length > limitLength ? `${limitedWords}...` : text

  return finalText
}
