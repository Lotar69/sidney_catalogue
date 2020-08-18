class Animal < ApplicationRecord
  belongs_to :seller
  belongs_to :buyer
  has_one_attached :photo
end
