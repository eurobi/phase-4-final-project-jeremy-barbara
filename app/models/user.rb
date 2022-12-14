class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true
    validates :username, uniqueness: true
    has_many :attempts
    has_many :quizzes
    has_many :quizzes, through: :attempts 
end
