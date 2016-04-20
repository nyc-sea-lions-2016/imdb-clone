class CreateVotes < ActiveRecord::Migration
  def change
    create_table :votes do |t|
      t.integer :value, null: false
      t.belongs_to :user, index: true, null: false
      t.belongs_to :review, index: true, null: false
      t.timestamps null: false
    end
  end
end
