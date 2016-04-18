class Comment < ActiveRecord::Base
  validates :content, :commentable_type, :commentable_id, presence: true

  belongs_to :commentable, polymorphic: true
end
