class Quiz < ApplicationRecord
    belongs_to :user
    has_many :attempts
    has_many :users, through: :attempts
end
