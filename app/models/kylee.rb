class Kylee < ApplicationRecord
  validates :name, presence: true, format: { with: /[K|k]ylee/,
    message: "That's not a Kylee" }
end
