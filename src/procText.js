function searchForWord(word, sentence) {
  return sentence.search(word)
}

function timesWordInSentence(word, sentence){
  let wordCount = 0
  const splitedSentence = sentence.split(' ')
  for (let i=0; i<splitedSentence.length; i++){
    if (splitedSentence[i] === word){wordCount++}
  }
  return wordCount
}

function mostUsedWord(sentence){
  

}