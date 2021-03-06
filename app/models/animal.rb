class Animal < ApplicationRecord
  belongs_to :seller
  belongs_to :buyer, optional: true
  has_one_attached :photo

  include PgSearch::Model

  pg_search_scope :search_by_category,
    against: [:category],
    using: {
      tsearch: { prefix: true }
    }
end
