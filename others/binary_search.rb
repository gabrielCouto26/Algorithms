# This was my first implementation of binary search.
# I thought it working with recursion, although I realized it is not good when thinking on MEM utilization.

list = [2, 3, 5, 6, 7, 11, 12, 14, 15, 17, 19, 20, 21, 24, 30, 31, 32, 33, 36, 37, 40]

def binary_search(array, beginning, key)
  pivot = (array.length) / 2
  if key == array[pivot]
    return "\nFound! Position: #{pivot}\n"
  elsif array.length == 1
    return "\nNot found\n"
  end
  
  if key > array[pivot]
    beginning = pivot
    last_half = array.slice(pivot, array.length)
    binary_search(last_half, beginning, key)
  elsif key < array[pivot]
    beginning  = 0
    first_half = array.slice(beginning, pivot)
    binary_search(first_half, beginning, key)
  end
end

print binary_search(list, 0, 11)
