class CreateFilms < ActiveRecord::Migration
  def change
    create_table :films do |t|
      t.string :name, null: false, index: true
      t.belongs_to :category, index: true
      t.timestamps null: false
    end
  end
end
