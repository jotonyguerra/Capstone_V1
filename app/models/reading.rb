require 'csv'

class Reading < ApplicationRecord

    csv_text = File.read('...')
    csv = CSV.parse(csv_text, :headers => true)
    csv.each do |row|
      Reading.create!(row.to_hash)
    end


end
