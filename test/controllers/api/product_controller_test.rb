require 'test_helper'

class Api::ProductControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_product_index_url
    assert_response :success
  end

end
