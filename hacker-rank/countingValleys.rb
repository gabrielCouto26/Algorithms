def countingValleys(steps, path)
  ultimo_nivel = 0
  nivel        = 0
  n_vales      = 0
  (0..steps).each do |step|
    nivel += 1 if path[step] == "U"
    nivel -= 1 if path[step] == "D"
    
    n_vales += 1 if nivel == -1 and ultimo_nivel == 0
    ultimo_nivel = nivel
  end
  n_vales
end
