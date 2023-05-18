class AttemptSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :quiz_id, :score, :answers, :attempter
  belongs_to :quiz

  def attempter
    user = User.find_by(id: object.user_id)
    if user
      user.username
    else
      "Deleted User"
    end
  end
end
