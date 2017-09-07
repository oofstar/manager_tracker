class KyleesController < ApplicationController
  def index
    @kylees = Kylee.all.page(params[:page])
  end
end
