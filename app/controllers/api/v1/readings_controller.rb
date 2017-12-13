class Api::V1::ReadingsController < ApplicationController
  def index
    render json: Reading.all
  end
end
