class FilmActors < ActiveRecord::Migration
  def change
    create_table :film_actors do |t|
      t.belongs_to :film, null: false, index: true
      t.belongs_to :actor, null: false, index: true
    end
  end
end
