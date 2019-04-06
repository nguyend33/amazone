require 'test_helper'

class Api::DepartmentControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_department_index_url
    assert_response :success
  end

end
