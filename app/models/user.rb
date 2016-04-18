class User < ActiveRecord::Base
  has_secure_password

  validates :username, :email, :first_name, :last_name, :role_id, presence: true
  validates :username, :email, uniqueness: true

end
