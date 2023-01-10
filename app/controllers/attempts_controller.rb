class AttemptsController < ApplicationController
    def index
        attempts = Attempt.all
        render json: attempts
    end

    def create
        attempt = Attempt.create(attempt_params)
        if attempt
            quiz = Quiz.find_by(id: attempt[:quiz_id])
            attempt.update(score: score_quiz(attempt.answers, quiz.answers))
            render json: attempt, status: :created
        else
            render json: {errors: attempt.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    def attempt_params
        params.permit(:user_id, :quiz_id, :answers => [])
    end

    def score_quiz (attempt_answers, correct_answers)
        score = 0
              attempt_answers.map.with_index { |answer, index| 
                if answer.downcase == correct_answers[index].downcase
                  score +=1
                end
              }
        return score
      end
end
