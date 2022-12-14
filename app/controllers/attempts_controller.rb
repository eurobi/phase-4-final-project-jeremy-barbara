class AttemptsController < ApplicationController
    def index
        attempts = Attempt.all
        render json: attempts
    end
end
