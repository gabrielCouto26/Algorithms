# Not my implementation

def quicksort(arr)
  return [] if arr.empty?

  # pega pivot e deleta do arr
  pivot = arr.delete_at(arr.size / 2)

  # passa pra direita o q for menor q pivot
  # passa pra esquerda o q for maior q pivot
  left, right = arr.partition { |n| pivot > n }

  # retorna com recursão
  [*quicksort(left), pivot, *quicksort(right)]
end