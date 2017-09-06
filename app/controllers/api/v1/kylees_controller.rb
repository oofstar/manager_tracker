class Api::V1::KyleesController < ApplicationController
  def index
    render json: Kylee.all
  end
end
