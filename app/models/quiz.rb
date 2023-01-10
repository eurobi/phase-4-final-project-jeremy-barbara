class Quiz < ApplicationRecord
    belongs_to :user
    has_many :attempts
    has_many :users, through: :attempts


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
