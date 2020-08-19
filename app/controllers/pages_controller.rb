class PagesController < ApplicationController
  skip_before_action :authenticate_buyer!
  def home
  end
end
