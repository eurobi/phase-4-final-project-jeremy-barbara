class AttemptsController < ApplicationController
    def index
        attempts = Attempt.all
        render json: attempts
    end

    def create
        attempt = Attempt.create(attempt_params)
        if attempt
            quiz = Quiz.find_by(id: attempt[:quiz_id])
            # attempt.score = score_quiz(attempt, quiz)
            render json: attempt, status: :created
        else
            render json: {errors: attempt.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private

    def attempt_params
        params.permit(:user_id, :quiz_id, :answers => [])
    end

    def score_quiz

    end
end
