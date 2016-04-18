class CreateFilms < ActiveRecord::Migration
  def change
    create_table :films do |t|
      t.string :name, null: false, index: true
      t.belongs_to :category, null: false, index: true
      t.string :director
      t.integer :year
      t.integer :oscar_count
      t.string :imdb_link
      t.string :country
      t.timestamps null: false
    end
  end
end
