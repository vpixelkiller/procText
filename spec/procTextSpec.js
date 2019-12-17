describe("text processor test", function() {
  it('finding a word in a sentence', ()=>{
    //arrange
    const sentence = "Nos han pedido ayuda para contribuir a un procesador de textos de código abierto."
    const word = "contribuir"
    //act
    let result = searchForWord(word, sentence)
    //assert
    expect(result).toBeGreaterThan(-1)
  })

  it('the word is not in the sentence', ()=>{
    const sentence = "Nos han pedido ayuda para contribuir a un procesador de textos de código abierto."
    const word = "ordenador"

    let result = searchForWord(word, sentence)

    expect(result).toBe(-1)
  })

  it('how many times is the word in the sentence', ()=>{
    const sentence = "Nos han pedido ayuda para contribuir a un procesador de textos para código abierto."
    const word = "para"

    let result = timesWordInSentence(word, sentence)

    expect(result).toBe(2)
  })

  it('find most used word in a sentence', ()=>{
    const sentence = "Nos han pedido ayuda para contribuir a un procesador an pedido ayuda de textos para código abierto ayuda para contribuir a un procesador han pedido."

    let result = mostUsedWord(sentence)

    expect(result).toEqual('para')
  })
});
