class DashboardsController < ApplicationController
  skip_before_action :authenticate_buyer!
  before_action :authenticate_seller!

  def show
    @animals = Animal.all
  end
end
