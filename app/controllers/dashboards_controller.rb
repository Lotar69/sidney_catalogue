class DashboardsController < ApplicationController
  skip_before_action :authenticate_buyer!
  before_action :authenticate_seller!

  def show
    @animals = current_seller.animals
  end
end
