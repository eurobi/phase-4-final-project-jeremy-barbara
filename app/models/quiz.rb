class Quiz < ApplicationRecord
    belongs_to :user
    has_many :attempts
    has_many :users, through: :attempts
    validates :title, presence: true
    validates :questions, length: {
        minimum: 5,
        message: 'There must be 5 questions'
    }
    validates :answers, length: {
        minimum: 5,
        message: 'There must be 5 answers.'
    }


    def avg_score
        scores = self.attempts.map{ |attempt| 
            if attempt.score != nil
                attempt.score
            else
            end
        }
        if scores.compact.length > 0
            scores.compact.sum / scores.compact.length
        else
            nil
        end
    end
end
