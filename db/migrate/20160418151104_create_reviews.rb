class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.text :content, null: false
      t.belongs_to :film, index: true
      t.belongs_to :user, index: true
      t.timestamps null: false
    end
  end
end
