class CreateRatings < ActiveRecord::Migration
  def change
    create_table :ratings do |t|
      t.integer :value, null: false, index: true
      t.belongs_to :user, null: false, index: true
      t.belongs_to :film, null: false, index: true
      t.timestamps null: false
    end
  end
end
