class Animal < ApplicationRecord
  belongs_to :seller
  belongs_to :buyer, optional: true
  has_one_attached :photo
end
