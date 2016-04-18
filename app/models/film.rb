class Film < ActiveRecord::Base
  belongs_to :category

  validates :name, :category_id, presence: true
end
