// You are given a 2D array of characters, and a target string.
// Return whether or not the word target word exists in the matrix. 
// Unlike a standard word search, the word must be either going left-to-right, or top-to-bottom in the matrix.

// Example:
// [['F', 'A', 'C', 'I'],
//  ['O', 'B', 'Q', 'P'],
//  ['A', 'N', 'O', 'B'],
//  ['M', 'A', 'S', 'S']]

// Given this matrix, and the target word FOAM, you should return true, as it can be found going up-to-down in the first column.

function word_search(matrix, word){
  var word = word.split('')
  var letra = 0
  var coluna = 0
  var linha = 0
  var tamPalavra = word.length
  var tamMatrix = matrix.length
  
  // limite de posicoes onde a primeira letra pode começar 
  var posicoesPossiveis = tamMatrix - tamPalavra 

  // top-to-bottom
  while(coluna < tamMatrix){
    if(matrix[linha][coluna] == word[letra]){
      // achou
      // move linha e letra
      linha++
      letra++
    } else if(linha < posicoesPossiveis){
      // nao achou
      // se possivel, move linha
      linha++
    } else {
      // chegou no final
      // reseta linha e move coluna
      letra = 0
      linha = 0
      coluna++
    }
    // achou todas as letras
    if(letra == tamPalavra)
      return true
  }

  // reseta variaveis
  linha = 0
  coluna = 0
  letra = 0

  // left-to-right
  while(linha < tamMatrix){
    if(matrix[linha][coluna] == word[letra]){
      // achou
      // move coluna e letra
      coluna++
      letra++
    } else if(coluna < posicoesPossiveis){
      // nao achou
      // se possivel, move coluna
      coluna++
    } else {
      // chegou no final
      // reseta coluna e move linha
      letra = 0
      coluna = 0
      linha++
    }
    // achou todas as letras
    if(letra == tamPalavra)
      return true
  }
  // passou pelos testes e nao achou todas as letras
  return false

};

var matrix = [
  ['F', 'A', 'C', 'I'],
  ['O', 'B', 'Q', 'P'],
  ['A', 'N', 'O', 'B'],
  ['M', 'A', 'S', 'S']]

word_search(matrix, 'OS')
