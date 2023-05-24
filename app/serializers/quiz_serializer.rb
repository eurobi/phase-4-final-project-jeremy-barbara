class QuizSerializer < ActiveModel::Serializer
  attributes :id, :title, :avg_score, :author_id, :questions, :answers, :author
  has_many :attempts
  has_many :users

  def author
    user = User.find_by(id: object.author_id)
    if user
      user.username
    else
      "Deleted User"
    end
  end

end
