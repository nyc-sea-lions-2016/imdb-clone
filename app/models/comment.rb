class Comment < ActiveRecord::Base
  belongs_to :commentable, polymorphic: true
  belongs_to :user

  validates :content, :user_id, :commentable_type, :commentable_id, presence: true
end
