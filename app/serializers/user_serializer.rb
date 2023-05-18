class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :pofile_img_url, :createdquizzes
  has_many :attempts
end
