class User < ActiveRecord::Base
  has_secure_password
  belongs_to :role
  has_many :reviews
  has_many :votes
  has_many :ratings
  has_many :comments

  validates :username, :email, :first_name, :last_name, :role_id, presence: true
  validates :username, :email, uniqueness: true
end
