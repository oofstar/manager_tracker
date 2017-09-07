class Api::V1::KyleesController < ApplicationController
  def index
    render json: Kylee.all.offset((params[:page].to_i-1)*10).limit(10)
  end
end
