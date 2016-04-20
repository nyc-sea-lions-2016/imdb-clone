json.array!@films do |film|
  json.id film.id
  json.name film.name
  json.category_id film.category_id
  json.director film.director
  json.oscar_count film.oscar_count
  json.imdb_link film.imdb_link
  json.country film.country
  json.year film.year
  json.rating film.rating
end
