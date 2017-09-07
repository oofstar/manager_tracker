class Api::V1::KyleesController < ApplicationController
  def index
    render json: {
      kylees: Kylee.all.offset((params[:page].to_i-1)*10).limit(10),
      total: Kylee.count
    }
  end
end
