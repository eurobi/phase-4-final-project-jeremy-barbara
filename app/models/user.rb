class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true
    validates :username, uniqueness: true
    has_many :attempts
    has_many :quizzes, through: :attempts 

    def createdquizzes
        quizzes = Quiz.where(["author_id = ?", self.id])
        quizzes
    end

end
